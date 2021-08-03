import {
  ENV_TYPE,
  General,
  getScreenBrightness,
  setScreenBrightness,
  setKeepScreenOn,
} from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import useEnv from '../useEnv';

export type IAction = (value: number) => Promise<General.CallbackResult>;

function useBrightness(keepon?: boolean): [number, IAction] {
  const [brightness, setBrightness] = useState<number>(0);
  const env = useEnv();

  useEffect(() => {
    if (env) {
      getBrightness();
    }
  }, [env]);

  const getBrightness = useCallback(async () => {
    if (env !== ENV_TYPE.WEB) {
      const { value: brightness } = await getScreenBrightness();
      setBrightness(brightness);
      keepon && setKeepScreenOn({ keepScreenOn: keepon });
    }
  }, [env, keepon]);

  const setBrightnessAsync = useCallback<IAction>(
    (value) => {
      return new Promise((resolve, reject) => {
        try {
          if (env === ENV_TYPE.WEB) {
            reject('please use hook in weapp or app');
          } else if (value < 0 || value > 1) {
            reject('please input a valid number');
          } else {
            setScreenBrightness({
              value,
              success: (res) => {
                resolve(res);
                setBrightness(value);
              },
              fail: reject,
            }).catch(reject);
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    [env],
  );

  return [brightness, setBrightnessAsync];
}

export default useBrightness;
