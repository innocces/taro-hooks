import {
  getSetting,
  openSetting,
  getAppAuthorizeSetting,
  authorize as taroAuthorize,
  authorizeForMiniProgram,
} from '@tarojs/taro';
import { useEffect, useState } from '@taro-hooks/core';
import type { AuthSetting, SubscriptionsSetting } from '@tarojs/taro';
import useVisible from '../useVisible';
import usePromise from '../usePromise';

import type {
  ExcludeOption,
  PromiseOptionalAction,
  PromiseParamsAction,
} from '../type';

export type Authorize = PromiseParamsAction<
  (scope: string, mini?: boolean) => void
>;

export type Get = PromiseOptionalAction<
  boolean,
  Taro.getSetting.SuccessCallbackResult
>;

export type Open = PromiseOptionalAction<
  boolean,
  Taro.openSetting.SuccessCallbackResult
>;

export type WithMiniAndAppAuthSetting = AuthSetting & {
  mini: AuthSetting;
  app?: Taro.getAppAuthorizeSetting.Result;
};

function useAuthorize(
  withSubscriptions?: boolean,
  withAppAuthSetting?: boolean,
): {
  authSetting: WithMiniAndAppAuthSetting;
  subscriptionsSetting: SubscriptionsSetting | {};
  authorize: Authorize;
  get: Get;
  open: Open;
} {
  const visible = useVisible();
  const [authSetting, setAuthSetting] = useState<WithMiniAndAppAuthSetting>({
    mini: {},
  });
  const [subscriptionsSetting, setSubscriptionsSetting] = useState<
    SubscriptionsSetting | {}
  >({});

  const authorizeAsync = usePromise<Taro.authorize.Option>(taroAuthorize);
  const authorizeForMiniProgramAsync =
    usePromise<Taro.authorizeForMiniProgram.Option>(authorizeForMiniProgram);

  const authorize: Authorize = (scope, mini) => {
    const payload = { scope };

    return mini
      ? authorizeForMiniProgramAsync(payload)
      : authorizeAsync(payload);
  };

  const getAsync = usePromise<
    ExcludeOption<Taro.getSetting.Option>,
    Taro.getSetting.SuccessCallbackResult
  >(getSetting);

  const get: Get = (withSubscriptions) => {
    return getAsync({ withSubscriptions }).then((res) => {
      const { authSetting, subscriptionsSetting, miniprogramAuthSetting } = res;
      const latestAuthSetting: WithMiniAndAppAuthSetting = {
        ...authSetting,
        mini: miniprogramAuthSetting,
      };
      if (withAppAuthSetting) {
        const app = getAppAuthorizeSetting();
        latestAuthSetting.app = app;
      }
      setAuthSetting(latestAuthSetting);
      setSubscriptionsSetting(subscriptionsSetting);
      return res;
    });
  };

  const openAsync = usePromise<
    ExcludeOption<Taro.openSetting.Option>,
    Taro.openSetting.SuccessCallbackResult
  >(openSetting);

  const open: Open = (withSubscriptions) => {
    return openAsync({ withSubscriptions }).then((res) => {
      const { authSetting: openSettingAuthSetting, subscriptionsSetting } = res;
      setAuthSetting({
        ...openSettingAuthSetting,
        mini: authSetting.mini,
      });
      setSubscriptionsSetting(subscriptionsSetting);
      return res;
    });
  };

  useEffect(() => {
    get(withSubscriptions);
  }, [visible]);

  return {
    authSetting,
    subscriptionsSetting,
    authorize,
    get,
    open,
  };
}

export default useAuthorize;
