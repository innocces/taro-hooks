import {
  RouterInfo,
  useRouter as useTaroRouter,
  General,
  switchTab,
  reLaunch,
  redirectTo,
  navigateTo,
  navigateBack,
} from '@tarojs/taro';
import { useCallback } from 'react';
import { stringify } from 'querystring';

export type RouterInfoResult = RouterInfo<Partial<Record<string, string>>>;
export type NavigateBackSync = (
  delta?: number,
) => Promise<General.CallbackResult>;
export type CommonRouteWithOptionsSync = (
  url: string,
  options?: { [_: string]: any },
) => Promise<General.CallbackResult>;

export interface ResultMethods {
  [_: string]: CommonRouteWithOptionsSync | NavigateBackSync;
}

export type Result = [RouterInfoResult, ResultMethods];

function stringfiyUrl(url: string, options?: { [_: string]: any }): string {
  let stringfiyUrl = url;
  if (options && typeof options === 'object') {
    const hasQuery = stringfiyUrl.includes('?');
    stringfiyUrl += (hasQuery ? '&' : '?') + stringify(options);
  }
  return stringfiyUrl;
}

function useRouter(): Result {
  const router = useTaroRouter();

  const switchTabSync = useCallback<CommonRouteWithOptionsSync>(
    (url, options) => {
      return new Promise((resolve, reject) => {
        try {
          url = stringfiyUrl(url, options);
          switchTab({ url, success: resolve, fail: reject }).catch(reject);
        } catch (e) {
          reject(e);
        }
      });
    },
    [],
  );

  const relaunchSync = useCallback<CommonRouteWithOptionsSync>(
    (url, options) => {
      return new Promise((resolve, reject) => {
        try {
          url = stringfiyUrl(url, options);
          reLaunch({ url, success: resolve, fail: reject }).catch(reject);
        } catch (e) {
          reject(e);
        }
      });
    },
    [],
  );

  const redirectToSync = useCallback<CommonRouteWithOptionsSync>(
    (url, options) => {
      return new Promise((resolve, reject) => {
        try {
          url = stringfiyUrl(url, options);
          redirectTo({ url, success: resolve, fail: reject }).catch(reject);
        } catch (e) {
          reject(e);
        }
      });
    },
    [],
  );

  const navigateToSync = useCallback<CommonRouteWithOptionsSync>(
    (url, options) => {
      return new Promise((resolve, reject) => {
        try {
          url = stringfiyUrl(url, options);
          navigateTo({ url, success: resolve, fail: reject }).catch(reject);
        } catch (e) {
          reject(e);
        }
      });
    },
    [],
  );

  const navigateBackSync = useCallback<NavigateBackSync>((delta) => {
    return new Promise((resolve, reject) => {
      try {
        navigateBack({
          ...(delta ? { delta } : {}),
          success: resolve,
          fail: reject,
        }).catch(reject);
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  return [
    router,
    {
      switchTab: switchTabSync,
      relaunch: relaunchSync,
      redirectTo: redirectToSync,
      navigateTo: navigateToSync,
      navigateBack: navigateBackSync,
    },
  ];
}

export default useRouter;
