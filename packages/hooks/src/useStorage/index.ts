import Taro, {
  setStorage,
  getStorage,
  getStorageInfo,
  removeStorage,
  clearStorage,
} from '@tarojs/taro';
import { useEffect, useState } from '@taro-hooks/core';
import { logError, escapeState, isString } from '@taro-hooks/shared';
import usePromise from '../usePromise';
import getStorageSpaceInfo from './utils/index';
import type { SpaceInfo, SuccessCallbackResult } from './utils/spaceInfo.type';

import type {
  ExcludeOption,
  RecordData,
  PromiseParamsAction,
  PromiseOptionalAction,
  UnionResult,
} from '../type';
import { generateGeneralFail } from '../utils/tool';

export type Set<T = unknown> = PromiseParamsAction<
  (key: string, data: T) => void
>;

export type Remove = PromiseOptionalAction<string>;

export type StorageInfo = Taro.getStorageInfo.SuccessCallbackOption & {
  storage: RecordData;
};

const initStorageInfo: StorageInfo = {
  currentSize: 0,
  limitSize: 0,
  keys: [],
  storage: {},
};

function useStorage() {
  const [storageInfo, setStorageInfo] = useState<StorageInfo>(initStorageInfo);

  async function get<T = RecordData>(
    key?: string | string[],
  ): Promise<UnionResult<T>> {
    try {
      let getKeys: string[] = [];
      if (!key) {
        const { keys } =
          (await getStorageInfo()) as unknown as Taro.getStorageInfo.SuccessCallbackOption;
        if (!keys?.length) {
          return {} as T;
        }
        getKeys = keys;
      } else {
        getKeys = [key].flat();
      }
      const storageGroup = await Promise.all(
        getKeys.map((payload) => getStorage({ key: payload })),
      );
      const storageMap = Object.fromEntries(
        storageGroup.map((storage, index) => {
          let data = storage?.data;
          try {
            data = JSON.parse(data);
          } catch (e) {
            logError('parse storage data failed', e);
          }
          return [getKeys[index], data];
        }),
      ) as T;

      if (isString(key)) {
        return storageMap[key];
      }
      return storageMap;
    } catch (e) {
      return generateGeneralFail('getStorage', e.errMsg || e.message);
    }
  }

  const setAsync =
    usePromise<ExcludeOption<Taro.setStorage.Option>>(setStorage);

  function set<T = string>(
    key: string,
    data?: T,
  ): Promise<UnionResult<TaroGeneral.CallbackResult>> {
    let setStorageData: T | string | undefined = data;
    try {
      setStorageData = JSON.stringify(data);
    } catch (e) {
      logError('can not convert json, use empty string instaned', e);
    }
    return setAsync({ key, data: setStorageData }).then((res) => {
      generateStorageInfo();
      return res;
    });
  }

  const removeAsync =
    usePromise<ExcludeOption<Taro.removeStorage.Option>>(removeStorage);
  const clearAsync = usePromise(clearStorage);

  const remove: Remove = (key) => {
    const removeHandler = key ? removeAsync({ key }) : clearAsync();
    return removeHandler.then((res) => {
      setStorageInfo({ ...escapeState(storageInfo), keys: [], storage: {} });
      return res;
    });
  };

  const generateStorageInfo = async () => {
    try {
      const { keys } =
        (await getStorageInfo()) as unknown as SuccessCallbackResult;
      const spaceInfo = (await getStorageSpaceInfo()) as SpaceInfo;
      const storage = (await get()) as RecordData;
      setStorageInfo({
        ...spaceInfo,
        keys,
        storage,
      });
    } catch (e) {
      logError('generateStorageInfo failed', e);
    }
  };

  useEffect(() => {
    generateStorageInfo();
  }, []);

  return [
    storageInfo,
    {
      set,
      get,
      remove,
    },
  ] as const;
}

export default useStorage;
