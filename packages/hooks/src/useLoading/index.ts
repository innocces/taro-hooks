import { showLoading, hideLoading, getCurrentInstance } from '@tarojs/taro';
import { useCallback, useEffect, useMemo, useRef } from 'react';

export interface LoadingOption {
  title: string;
  mask?: boolean;
}

export type ShowLoading = (
  option?: Partial<LoadingOption>,
) => Promise<TaroGeneral.CallbackResult>;
export type HideLoading = () => Promise<TaroGeneral.CallbackResult>;

const useLoadingPageRecord: Record<string, Set<number> | undefined> = {};
const USE_LOADING_MAX_COUNT = 0b11111111;
let useLoadingCount = 0;

function useLoading(
  option?: Partial<LoadingOption>,
): [ShowLoading, HideLoading] {
  const initialOption = useRef<Partial<LoadingOption>>();
  const pageKey = useMemo(
    () => (getCurrentInstance().page as any)?.$taroPath,
    [],
  );
  const loadingKey = useMemo(() => {
    useLoadingCount++;
    if (useLoadingCount > USE_LOADING_MAX_COUNT) {
      useLoadingCount = 0;
    }
    return useLoadingCount;
  }, []);

  useEffect(() => {
    useLoadingPageRecord[pageKey] = new Set();
    return () => {
      useLoadingPageRecord[pageKey] = undefined;
      hideLoading();
    };
  }, [pageKey]);

  useEffect(() => {
    initialOption.current = option;
  }, [option]);

  const showLoadingAsync = useCallback<ShowLoading>(
    (option) => {
      useLoadingPageRecord[pageKey]?.add(loadingKey);
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
    [initialOption, loadingKey, pageKey],
  );

  const hideLoadingAsync = useCallback<HideLoading>(() => {
    const pageRecord = useLoadingPageRecord[pageKey];
    if (pageRecord) {
      pageRecord.delete(loadingKey);
      if (pageRecord.size > 0) {
        return Promise.resolve({ errMsg: 'hideLoading:ok' });
      }
    }
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
  }, [loadingKey, pageKey]);

  return [showLoadingAsync, hideLoadingAsync];
}

export default useLoading;
