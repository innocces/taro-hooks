import { showToast, hideToast, General } from '@tarojs/taro';
import { useCallback, useEffect, useRef } from 'react';

export interface ToastOption {
  title: string;
  duration?: number;
  icon?: 'success' | 'loading' | 'none';
  image?: string;
  mask?: boolean;
}

export type ShowToast = (
  option?: Partial<ToastOption>,
) => Promise<General.CallbackResult>;
export type HideToast = () => Promise<General.CallbackResult>;

function useToast(option?: Partial<ToastOption>): [ShowToast, HideToast] {
  const initialOption = useRef<Partial<ToastOption>>();

  useEffect(() => {
    initialOption.current = option;
  }, [option]);

  const showToastAsync = useCallback<ShowToast>(
    (option?: Partial<ToastOption>) => {
      return new Promise((resolve, reject) => {
        try {
          if (!option && !initialOption.current) {
            console.warn('please provide a option');
            return reject(new Error('please provide a option'));
          } else {
            const options = Object.assign(
              {},
              initialOption.current || {},
              option || {},
            );
            if (!options.title) {
              reject({ errMsg: 'showToast: fail' });
            } else {
              showToast({
                ...(options as ToastOption),
                success: resolve,
                fail: reject,
              }).catch(reject);
            }
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    [initialOption],
  );

  const hideToastAsync = useCallback<HideToast>(() => {
    return new Promise((resolve, reject) => {
      try {
        hideToast({
          success: resolve,
          fail: reject,
        });
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  return [showToastAsync, hideToastAsync];
}

export default useToast;
