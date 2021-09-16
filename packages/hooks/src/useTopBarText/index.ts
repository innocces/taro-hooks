import { ENV_TYPE, setTopBarText, General } from '@tarojs/taro';
import { useCallback, useEffect } from 'react';
import useEnv from '../useEnv';

export type TSetTopBarText = (
  topBarText: string,
) => Promise<General.CallbackResult>;

function useTopBarText(text?: string): [TSetTopBarText] {
  const env = useEnv();

  const setTopBarTextAsync = useCallback<TSetTopBarText>(
    (topBarText: string) => {
      return new Promise((resolve, reject) => {
        if (text && env === ENV_TYPE.WEAPP) {
          try {
            setTopBarText({
              text: topBarText,
              success: resolve,
              fail: reject,
            });
          } catch (e) {
            reject({ errMsg: 'setTopBarText: fail', data: e });
          }
        } else {
          reject({ errMsg: 'setTopBarText: fail' });
        }
      });
    },
    [env],
  );

  useEffect(() => {
    text && setTopBarTextAsync(text);
  }, [env, text]);

  return [setTopBarTextAsync];
}

export default useTopBarText;
