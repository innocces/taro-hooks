import { useCallback, useEffect, useState } from 'react';
import {
  getSetting,
  openSetting,
  AuthSetting,
  authorize,
  General,
  ENV_TYPE,
} from '@tarojs/taro';
import useEnv from '../useEnv';
import useVisible from '../useVisible';
import { typeOf } from '../utils/tool';
import type { TAuthResultType } from '../type';

declare var wx: any;

// rewrite openSetting options
interface ISubscriptionsSetting {
  mainSwitch?: boolean;
  itemSetting?: {
    [_: string]: TAuthResultType;
  };
}
interface IROpenSettingSuccessCallbackResult
  extends openSetting.SuccessCallbackResult {
  subscriptionsSetting?: ISubscriptionsSetting;
}

interface IOption {
  withSubscriptions?: boolean;
}

interface IROpenSettingOption extends openSetting.Option {
  success?: (result: IROpenSettingSuccessCallbackResult) => void;
}
type ROpenSetting = (
  options: IROpenSettingOption & IOption,
) => Promise<IROpenSettingSuccessCallbackResult>;

interface IRGetSettingSuccessCallbackResult
  extends openSetting.SuccessCallbackResult {
  subscriptionsSetting?: ISubscriptionsSetting;
  miniprogramAuthSetting?: AuthSetting;
}
interface IRGetSettingOption extends getSetting.Option {
  success?: (result: IRGetSettingSuccessCallbackResult) => void;
}
type RGetSetting = (
  options: IRGetSettingOption & IOption,
) => Promise<IRGetSettingSuccessCallbackResult>;

export type IOpenSettingAction = (
  withSubscriptions?: boolean,
) => Promise<IROpenSettingSuccessCallbackResult>;

// plugin scope
export interface IAuthSettingForMiniProgram {
  'scope.record'?: boolean;
  'scope.writePhotosAlbum'?: boolean;
  'scope.camera'?: boolean;
}
export type IAuthorizeAction = (
  scope: keyof AuthSetting | keyof IAuthSettingForMiniProgram,
  miniprogram?: boolean,
) => Promise<General.CallbackResult>;

export interface IAction {
  openSetting: IOpenSettingAction;
  authorize: IAuthorizeAction;
}

export interface IResult {
  authSetting: AuthSetting;
  subscriptionsSetting: ISubscriptionsSetting;
  miniprogramAuthSetting: AuthSetting;
}

function useAuthorize(option?: IOption): [IResult, IAction] {
  const env = useEnv();
  const visible = useVisible();
  const [authSetting, setAuthSetting] = useState<AuthSetting>({});
  const [subscriptionsSetting, setSubscriptionsSetting] =
    useState<ISubscriptionsSetting>({});
  const [miniprogramAuthSetting, setMiniprogramAuthSetting] =
    useState<AuthSetting>({});

  useEffect(() => {
    if (env === ENV_TYPE.WEAPP) {
      getSettingAsync();
    }
  }, [env, visible]);

  const getSettingAsync = useCallback(async () => {
    try {
      const { withSubscriptions = false } = option || {};
      const {
        authSetting: totalAuthSetting = {},
        subscriptionsSetting: totalSubscriptionsSetting,
        miniprogramAuthSetting: totalMiniprogramAuthSetting,
      } = await (getSetting as RGetSetting)({
        withSubscriptions,
      });
      setAuthSetting(totalAuthSetting);
      if (withSubscriptions && totalSubscriptionsSetting) {
        setSubscriptionsSetting(totalSubscriptionsSetting);
      }
      totalMiniprogramAuthSetting &&
        setMiniprogramAuthSetting(totalMiniprogramAuthSetting);
    } catch (e) {
      console.log(e);
    }
  }, [option]);

  const openSettingAsync = useCallback<IOpenSettingAction>(
    (withSubscriptions = false) => {
      return new Promise((resolve, reject) => {
        if (env === ENV_TYPE.WEAPP) {
          try {
            (openSetting as ROpenSetting)({
              withSubscriptions,
              success: (res) => {
                const {
                  authSetting: totalAuthSetting,
                  subscriptionsSetting: totalSubscriptionsSetting,
                } = res;
                if (withSubscriptions && totalSubscriptionsSetting) {
                  setSubscriptionsSetting(totalSubscriptionsSetting);
                }
                setAuthSetting(totalAuthSetting);
                resolve(res);
              },
              fail: reject,
            }).catch(reject);
          } catch (e) {
            reject({ errMsg: e });
          }
        } else {
          reject({ errMsg: 'openSetting:fail' });
        }
      });
    },
    [env],
  );

  const authorizeAysnc = useCallback<IAuthorizeAction>(
    (scope, miniprogram = false) => {
      return new Promise((resolve, reject) => {
        if (!scope || env === ENV_TYPE.WEAPP) {
          try {
            if (miniprogram && typeOf(wx, 'Object')) {
              wx.authorizeForMiniProgram({
                scope,
                success: resolve,
                fail: reject,
              });
            } else {
              authorize({
                scope,
                success: resolve,
                fail: reject,
              }).catch(reject);
            }
          } catch (e) {
            reject(e);
          }
        } else {
          reject({ errMsg: 'authorize:fail' });
        }
      });
    },
    [authSetting, miniprogramAuthSetting],
  );

  return [
    { authSetting, subscriptionsSetting, miniprogramAuthSetting },
    {
      openSetting: openSettingAsync,
      authorize: authorizeAysnc,
    },
  ];
}

export default useAuthorize;
