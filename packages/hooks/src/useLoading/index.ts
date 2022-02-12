import { showLoading, hideLoading } from '@tarojs/taro';
import { useCallback, useEffect, useRef } from 'react';

export interface LoadingOption {
  title: string;
  mask?: boolean;
}

export type ShowLoading = (
  option?: Partial<LoadingOption>,
) => Promise<TaroGeneral.CallbackResult>;
export type HideLoading = () => Promise<TaroGeneral.CallbackResult>;

function useLoading(
  option?: Partial<LoadingOption>,
): [ShowLoading, HideLoading] {
  const initialOption = useRef<Partial<LoadingOption>>();

  useEffect(() => {
    initialOption.current = option;
  }, [option]);

  const showLoadingAsync = useCallback<ShowLoading>(
    (option) => {
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
              reject({ errMsg: 'showLoading: fail' });
            } else {
              showLoading({
                ...(options as LoadingOption),
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
