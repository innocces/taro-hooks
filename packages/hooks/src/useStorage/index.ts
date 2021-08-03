import {
  setStorageSync,
  getStorageInfoSync,
  getStorageSync,
  removeStorageSync,
  clearStorageSync,
  ENV_TYPE,
} from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import useEnv from '../useEnv';

export interface IStorageSpace {
  currentSize?: number;
  limitSize?: number;
}

export interface IStorageInfo extends Required<IStorageSpace> {
  keys: string[];
  storage: { [_: string]: any };
}

export type setAction = (key: string, data: any) => Promise<boolean>;
export type getAction = (key?: string) => Promise<any>;
export type removeAction = (key?: string) => Promise<boolean>;

export interface IAction {
  set: setAction;
  get: getAction;
  remove: removeAction;
}

const initStorageInfo: IStorageInfo = {
  currentSize: 0,
  limitSize: 0,
  keys: [],
  storage: {},
};

function useStorage(): [IStorageInfo, IAction] {
  const [storageInfo, setStorageInfo] = useState<IStorageInfo>(initStorageInfo);
  const env = useEnv();

  useEffect(() => {
    if (env) {
      generateStorageInfo();
    }
  }, [env]);

  const generateStorageInfo = useCallback(async () => {
    try {
      const currentInfo = getStorageInfoSync();
      const storage = await getStorage();
      let polyfillInfo = {};
      if (env === ENV_TYPE.WEB) {
        polyfillInfo = await getStorageSpaceForWeb();
      }
      setStorageInfo({
        ...setStorageInfo,
        storage: storage || {},
        ...currentInfo,
        ...polyfillInfo,
      });
    } catch (e) {
      console.log(e);
    }
  }, [storageInfo, env]);

  const getStorageSpaceForWeb = useCallback<
    () => Promise<IStorageSpace>
  >(async () => {
    let storageSpace = {};
    if (
      navigator &&
      'storage' in navigator &&
      'estimate' in navigator.storage
    ) {
      try {
        const { usage = 0, quota = 0 } = await navigator.storage.estimate();
        storageSpace = {
          currentSize: usage,
          limitSize: quota,
        };
      } catch (e) {
        storageSpace = {
          currentSize: Storage.length,
          limitSize: 0,
        };
      }
    }
    return storageSpace;
  }, [env]);

  const getStorage = useCallback<getAction>(
    (key) => {
      return new Promise((resolve, reject) => {
        try {
          // 没有key默认全部获取
          if (!key) {
            const { keys } = getStorageInfoSync();
            if (!keys.length) {
              resolve(undefined);
            } else {
              const result: { [_: string]: any } = {};
              keys.forEach((currentKey) => {
                const data = getStorageSync(currentKey);
                result[currentKey] = data;
              });
              resolve(result);
            }
          } else {
            const data = getStorageSync(key);
            resolve(data);
          }
        } catch (e) {
          reject(undefined);
        }
      });
    },
    [storageInfo, env],
  );

  const setStorage = useCallback<setAction>(
    (key, data) => {
      return new Promise((resolve, reject) => {
        try {
          if (!key) {
            console.warn('please provide a option');
            return reject(false);
          } else {
            setStorageSync(key, data);
            generateStorageInfo();
            resolve(true);
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    [env],
  );

  const removeStorage = useCallback<removeAction>(
    (key) => {
      return new Promise((resolve, reject) => {
        try {
          if (!key) {
            clearStorageSync();
          } else {
            removeStorageSync(key);
          }
          generateStorageInfo();
          resolve(true);
        } catch (e) {
          reject(false);
        }
      });
    },
    [env],
  );

  return [
    storageInfo,
    {
      set: setStorage,
      get: getStorage,
      remove: removeStorage,
    },
  ];
}

export default useStorage;
