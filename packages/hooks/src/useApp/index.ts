import { useCallback, useEffect, useState, useRef } from 'react';
import { getApp } from '@tarojs/taro';

import { isUndefined } from '../utils/tool';

import type { App } from '@tarojs/taro';
import type { TRecord } from '../type';

export type TSetGlobalData<G extends Record<string, any> = TRecord> = (
  key: keyof G,
  value: G[keyof G],
) => Promise<TaroGeneral.CallbackResult>;

function useApp<G extends Record<string, any> = TRecord>(allDefault?: boolean) {
  const [globalData, setGlobalData] = useState<G>({} as G);
  const appInstance = useRef<App>(
    getApp({ allowDefault: Boolean(allDefault) }),
  );

  useEffect(() => {
    if (appInstance.current?.$app) {
      setGlobalData(appInstance.current.$app.globalData || {});
    }
  }, [appInstance]);

  const setGlobalDataAsync = useCallback<TSetGlobalData<G>>(
    (key, value) => {
      return new Promise((resolve, reject) => {
        if (isUndefined(key)) {
          reject({ errMsg: 'setGlobalData: fail' });
        } else {
          try {
            const prevGlobalData = { ...globalData };
            prevGlobalData[key] = value;
            appInstance.current.$app.globalData = prevGlobalData;
            setGlobalData(prevGlobalData);
            resolve({ errMsg: 'setGlobalData: ok' });
          } catch (e) {
            reject({ errMsg: 'setGlobalData: fail', data: e });
          }
        }
      });
    },
    [globalData, appInstance],
  );

  return [appInstance.current, globalData, setGlobalDataAsync] as const;
}

export default useApp;
