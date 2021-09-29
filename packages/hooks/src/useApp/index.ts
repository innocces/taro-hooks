import { useCallback, useEffect, useState, useRef } from 'react';
import { getApp } from '@tarojs/taro';

import { isUndefined } from '../utils/tool';

import type { App, General } from '@tarojs/taro';
import type { TRecord } from '../type';

export type TSetGlobalData = (
  key: string,
  value: unknown,
) => Promise<General.CallbackResult>;

function useApp(
  allDefault?: boolean,
): [AppInstance: App, globalData: TRecord, setGlobalData: TSetGlobalData] {
  const [globalData, setGlobalData] = useState<TRecord>({});
  const appInstance = useRef<App>(
    getApp({ allowDefault: Boolean(allDefault) }),
  );

  useEffect(() => {
    if (appInstance.current?.$app) {
      setGlobalData(appInstance.current.$app.globalData || {});
    }
  }, [appInstance]);

  const setGlobalDataAsync = useCallback<TSetGlobalData>(
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

  return [appInstance.current, globalData, setGlobalDataAsync];
}

export default useApp;
