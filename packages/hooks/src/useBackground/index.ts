import {
  setBackgroundColor,
  setBackgroundTextStyle,
  General,
  ENV_TYPE,
} from '@tarojs/taro';
import { isPlainObject } from '../utils/tool';
import { useCallback, useEffect } from 'react';
import useEnv from '../useEnv';

export type TTextStyle = 'dark' | 'light';

export interface IBackgroundColorOption {
  backgroundColor?: string;
  backgroundColorBottom?: string;
  backgroundColorTop?: string;
}

export interface IOption extends IBackgroundColorOption {
  textStyle?: TTextStyle;
}

export type TSetBackgroundColor = (
  setOption?: IBackgroundColorOption,
) => Promise<General.CallbackResult>;
export type TSetBackgroundTextStyle = (
  textStyle: TTextStyle,
) => Promise<General.CallbackResult>;

function useBackground(
  option?: IOption,
): [TSetBackgroundColor, TSetBackgroundTextStyle] {
  const env = useEnv();

  useEffect(() => {
    if (option) {
      setBackgroundColorAsync(option);
      option.textStyle && setBackgroundTextStyleAsync(option.textStyle);
    }
  }, [option]);

  const setBackgroundColorAsync = useCallback<TSetBackgroundColor>(
    (setOption = {}) => {
      return new Promise((resolve, reject) => {
        if (isPlainObject(setOption) || env === ENV_TYPE.WEB) {
          reject({ errMsg: 'setBackgroundColor: fail' });
        } else {
          try {
            setBackgroundColor({
              ...setOption,
              success: resolve,
              fail: reject,
            }).catch(reject);
          } catch (e) {
            reject({ errMsg: 'setBackgroundColor: fail', data: e });
          }
        }
      });
    },
    [option, env],
  );

  const setBackgroundTextStyleAsync = useCallback<TSetBackgroundTextStyle>(
    (textStyle) => {
      return new Promise((resolve, reject) => {
        if (!textStyle || env === ENV_TYPE.WEB) {
          reject({ errMsg: 'setBackgroundTextStyle: fail' });
        } else {
          try {
            setBackgroundTextStyle({
              textStyle,
              success: resolve,
              fail: reject,
            }).catch(reject);
          } catch (e) {
            reject({ errMsg: 'setBackgroundTextStyle: fail', data: e });
          }
        }
      });
    },
    [option, env],
  );

  return [setBackgroundColorAsync, setBackgroundTextStyleAsync];
}

export default useBackground;
