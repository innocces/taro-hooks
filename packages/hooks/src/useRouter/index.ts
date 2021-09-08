import {
  RouterInfo,
  useRouter as useTaroRouter,
  General,
  switchTab,
  reLaunch,
  redirectTo,
  navigateTo,
  navigateBack,
  navigateToMiniProgram,
  navigateBackMiniProgram,
} from '@tarojs/taro';
import { useCallback } from 'react';
import { stringify } from 'querystring';
import { typeOf } from '../utils/tool';

export type TRecord = { [_: string]: any };
export type RouterInfoResult = RouterInfo<Partial<Record<string, string>>>;
export type NavigateBackSync = (
  deltaOrMark?: number | boolean,
  extraData?: TRecord,
) => Promise<General.CallbackResult>;
export interface INavigateToMiniProgramSyncOptions {
  appId?: string;
  path?: string;
  envVersion?: keyof navigateToMiniProgram.envVersion;
  extraData?: TRecord;
}

export type CommonRouteWithOptionsSync = (
  url: string,
  options?: TRecord,
) => Promise<General.CallbackResult>;

export type NavigateToSync = (
  urlOrMark: string | boolean,
  options?: TRecord | INavigateToMiniProgramSyncOptions,
) => Promise<General.CallbackResult>;
export interface ResultMethods {
  [_: string]: CommonRouteWithOptionsSync | NavigateBackSync | NavigateToSync;
}

export type Result = [RouterInfoResult, ResultMethods];

function stringfiyUrl(url: string, options?: TRecord): string {
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

  const navigateToSync = useCallback<NavigateToSync>((urlOrMark, options) => {
    return new Promise((resolve, reject) => {
      try {
        const { appId } = options || {};
        // if appid exist, use navigateToMiniprogram
        if (appId && urlOrMark) {
          navigateToMiniProgram({
            ...options,
            appId,
            success: resolve,
            fail: reject,
          }).catch(reject);
        } else if (typeOf(urlOrMark, 'String')) {
          urlOrMark = stringfiyUrl(urlOrMark as string, options);
          navigateTo({ url: urlOrMark, success: resolve, fail: reject }).catch(
            reject,
          );
        }
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  const navigateBackSync = useCallback<NavigateBackSync>(
    (deltaOrMark, extraData) => {
      return new Promise((resolve, reject) => {
        try {
          // if deltaOrMark is boolean, use navigateBackMiniprogram
          if (typeOf(deltaOrMark, 'Boolean') && deltaOrMark) {
            navigateBackMiniProgram({
              ...(extraData ? { extraData } : {}),
              success: resolve,
              fail: reject,
            }).catch(reject);
          } else {
            navigateBack({
              ...(deltaOrMark ? { deltaOrMark } : {}),
              success: resolve,
              fail: reject,
            }).catch(reject);
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    [],
  );

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
