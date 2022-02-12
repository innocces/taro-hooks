import {
  setStorage,
  getStorage,
  getStorageInfo,
  removeStorage,
  clearStorage,
} from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import useEnv from '../useEnv';
import { ENV_TYPE } from '../constant';

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

type getStorageSyncAction = (key: string) => Promise<any>;

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

  const generateStorageInfo = useCallback(() => {
    return new Promise(async (resolve, reject) => {
      try {
        getStorageInfo({
          success: async (currentInfo) => {
            const storage = await getStorageAsync();
            let polyfillInfo = {};
            if (env === ENV_TYPE.WEB) {
              polyfillInfo = await getStorageSpaceForWeb();
            }
            const storageInfo = {
              ...setStorageInfo,
              storage: storage || {},
              ...currentInfo,
              ...polyfillInfo,
            };
            setStorageInfo(storageInfo);
            resolve(storageInfo);
          },
          fail: reject,
        });
      } catch (e) {
        console.log(e);
      }
    });
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

  const getStorageSync = useCallback<getStorageSyncAction>((key) => {
    return new Promise((resolve, reject) => {
      try {
        getStorage({
          key,
          success: ({ data }) => resolve(data),
          fail: () => reject(undefined),
        });
      } catch (e) {
        reject(undefined);
      }
    });
  }, []);

  const getStorageAsync = useCallback<getAction>(
    (key) => {
      return new Promise(async (resolve, reject) => {
        try {
          // 没有key默认全部获取
          if (!key) {
            getStorageInfo({
              success: async ({ keys }) => {
                if (!keys.length) {
                  resolve(undefined);
                } else {
                  const result: { [_: string]: any } = {};
                  for await (let currentKey of keys) {
                    const data = await getStorageSync(currentKey);
                    result[currentKey] = data;
                  }
                  resolve(result);
                }
              },
              fail: () => reject(undefined),
            });
          } else {
            const data = await getStorageSync(key);
            resolve(data);
          }
        } catch (e) {
          reject(undefined);
        }
      });
    },
    [storageInfo, env],
  );

  const setStorageAsync = useCallback<setAction>(
    (key, data) => {
      return new Promise((resolve, reject) => {
        try {
          if (!key) {
            console.warn('please provide a option');
            return reject(false);
          } else {
            setStorage({
              key,
              data,
              success: () => {
                generateStorageInfo();
                resolve(true);
              },
              fail: () => reject(false),
            });
          }
        } catch (e) {
          reject(false);
        }
      });
    },
    [env],
  );

  const removeStorageAsync = useCallback<removeAction>(
    (key) => {
      return new Promise((resolve, reject) => {
        const callbackOptions = {
          success: () => {
            generateStorageInfo();
            resolve(true);
          },
          fail: () => reject(false),
        };
        try {
          if (!key) {
            clearStorage();
            // why not add options to feedback success? because it is not worked!
            generateStorageInfo();
            resolve(true);
          } else {
            removeStorage({
              key,
              ...callbackOptions,
            });
          }
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
      set: setStorageAsync,
      get: getStorageAsync,
      remove: removeStorageAsync,
    },
  ];
}

export default useStorage;
