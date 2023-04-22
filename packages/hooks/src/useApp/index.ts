import { getApp } from '@tarojs/taro';
import { useRef, useEffect, useState } from '@taro-hooks/core';
import { isUndef, escapeState } from '@taro-hooks/shared';

import type { App } from '@tarojs/taro';
import type { RecordData } from '../type';
import { generateGeneralFail } from '../utils/tool';

export type Instance<T extends App> = Taro.getApp.Instance<T>;

export type GlobalData<R extends RecordData> = R;

export type SetGlobalData<R> = (
  key: keyof R,
  value: R[keyof R],
) => Promise<TaroGeneral.CallbackResult>;

function useApp<R extends RecordData = RecordData, T extends App = App>(
  allDefault?: boolean,
): {
  app: Instance<T>;
  globalData: GlobalData<R>;
  setGlobalData: SetGlobalData<GlobalData<R>>;
} {
  const appInstance = useRef<Instance<T>>(
    getApp<T>({ allowDefault: Boolean(allDefault) }),
  );

  const [globalData, setGlobalData] = useState<GlobalData<R>>(
    generateGlobalDataFromAppInstance(appInstance.current) as GlobalData<R>,
  );

  useEffect(() => {
    if (appInstance.current) {
      setGlobalData(generateGlobalDataFromAppInstance(appInstance.current));
    }
  }, [appInstance]);

  const setGlobalDataAsync: SetGlobalData<GlobalData<R>> = (key, value) => {
    return new Promise((resolve, reject) => {
      if (isUndef(key))
        reject(generateGeneralFail('setGlobalData', 'please privide key'));
      try {
        const latestGobalData = {
          ...escapeState(globalData),
          [key]: value,
        };
        const $globalData =
          appInstance.current?.$app?.globalData ?? appInstance.current;

        $globalData[key] = value;

        setGlobalData(latestGobalData);

        resolve(generateGeneralFail('setGlobalData', 'success'));
      } catch (e) {
        reject(generateGeneralFail('setGlobalData', e.message));
      }
    });
  };

  return {
    app: appInstance.current,
    globalData,
    setGlobalData: setGlobalDataAsync,
  };
}

export default useApp;

// TODO: $app may not exists. filter normal key, rest is globalData
function generateGlobalDataFromAppInstance<T extends App = App>(
  app: Instance<T>,
) {
  const UNSAFE = ['config', 'onHide', 'onLaunch', 'onShow'];
  const { $app } = app ?? {};

  if ($app?.globalData) {
    return $app?.globalData;
  }

  return Object.fromEntries(
    Object.entries(app).filter((v) => !UNSAFE.includes(v[0])),
  );
}
