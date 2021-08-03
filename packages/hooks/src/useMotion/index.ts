import {
  ENV_TYPE,
  startDeviceMotionListening,
  stopDeviceMotionListening,
  onDeviceMotionChange,
  offDeviceMotionChange,
} from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';

import useEnv from '../useEnv';

export type interval = keyof startDeviceMotionListening.interval;

export type IMotion = onDeviceMotionChange.CallbackResult | {};

export type Callaback = (...arg: any[]) => any;

export type IStartListen = (interval?: interval) => Promise<boolean>;

export type IAddListener = (callback: onDeviceMotionChange.Callback) => void;

export interface IAction {
  start: IStartListen;
  stop: () => void;
  addListener: IAddListener;
  removeListener: (callback: Callaback) => void;
}

function useMotion(
  autoListen?: boolean,
  interval?: interval,
): [IMotion, IAction] {
  const [motion, setMotion] = useState<IMotion>({});
  const env = useEnv();

  useEffect(() => {
    if (autoListen) {
      init();
    }

    return () => {
      if (autoListen) {
        removeListener(initListen);
        stopListen();
      }
    };
  }, [autoListen, interval]);

  const init = useCallback(async () => {
    const result = await startListen(interval);
    if (result) {
      addListener(initListen);
    }
  }, [interval]);

  const initListen = useCallback((motion) => {
    setMotion(motion);
  }, []);

  const startListen = useCallback<IStartListen>((interval = 'normal') => {
    return new Promise((resolve, reject) => {
      try {
        startDeviceMotionListening({
          interval,
          success: () => {
            resolve(true);
          },
          fail: () => {
            reject(false);
          },
        });
      } catch (e) {
        reject(false);
      }
    });
  }, []);

  const stopListen = useCallback(() => {
    return new Promise((resolve, reject) => {
      try {
        stopDeviceMotionListening({
          success: () => {
            resolve(true);
          },
          fail: () => {
            reject(false);
          },
        });
      } catch (e) {
        reject(false);
      }
    });
  }, []);

  const addListener = useCallback<IAddListener>((callback) => {
    try {
      onDeviceMotionChange(callback);
    } catch (e) {
      console.warn('add listener fail: ', e);
    }
  }, []);

  const removeListener = useCallback(
    (callback: Callaback) => {
      if (env !== ENV_TYPE.WEB) {
        try {
          offDeviceMotionChange(callback);
        } catch (e) {
          console.warn('remove listener fail: ', e);
        }
      }
    },
    [env],
  );

  return [
    motion,
    {
      start: startListen,
      stop: stopListen,
      addListener,
      removeListener,
    },
  ];
}

export default useMotion;
