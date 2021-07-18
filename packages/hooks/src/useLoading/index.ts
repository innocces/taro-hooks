import { showLoading, hideLoading, General } from '@tarojs/taro';
import { useCallback, useEffect, useRef } from 'react';

export interface LoadingOption {
  title: string;
  mask?: boolean;
}

export type ShowLoading = (
  option?: LoadingOption,
) => Promise<General.CallbackResult>;
export type HideLoading = () => Promise<General.CallbackResult>;

function useLoading(option?: LoadingOption): [ShowLoading, HideLoading] {
  const initialOption = useRef<LoadingOption>();

  useEffect(() => {
    initialOption.current = option;
  }, [option]);

  const showLoadingAsync = useCallback<ShowLoading>(
    (option?: LoadingOption) => {
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
            ) as LoadingOption;
            showLoading({
              ...options,
              success: resolve,
              fail: reject,
            }).catch(reject);
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    [initialOption],
  );

  const hideLoadingAsync = useCallback<HideLoading>(() => {
    return new Promise((resolve, reject) => {
      try {
        hideLoading({
          success: resolve,
          fail: reject,
        });
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  return [showLoadingAsync, hideLoadingAsync];
}

export default useLoading;
