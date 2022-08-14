import {
  login as taroLogin,
  pluginLogin as taroPluginLogin,
  checkSession,
} from '@tarojs/taro';
import usePromise from '../usePromise';
import { generateGeneralFail } from '../utils/tool';
import type {
  ExcludeOption,
  PromiseParamsAction,
  PromiseWithoutOptionAction,
} from '../type';

export type Check = PromiseWithoutOptionAction;
export type Login = PromiseParamsAction<
  (needCheck?: boolean, plugin?: boolean, timeout?: number) => void,
  Taro.login.SuccessCallbackResult
>;

function useLogin(): { check: Check; login: Login } {
  const check: Check = usePromise(checkSession);

  const loginAsync = usePromise<
    ExcludeOption<Taro.login.Option>,
    Taro.login.SuccessCallbackResult
  >(taroLogin);
  const pluginLoginAsync = usePromise<
    ExcludeOption<Taro.pluginLogin.Option>,
    Taro.pluginLogin.SuccessCallbackResult
  >(taroPluginLogin);

  const login: Login = async (needCheck, plugin, timeout) => {
    let checkResult = !needCheck;
    if (!checkResult) {
      try {
        await check();
      } catch (e) {
        checkResult = false;
      }
    }
    if (!checkResult) {
      const payload = timeout ? { timeout } : {};
      return await (plugin ? pluginLoginAsync(payload) : loginAsync(payload));
    }

    return generateGeneralFail(
      'login',
      'code is valid, do not use fetch new one!',
    );
  };

  return { check, login };
}

export default useLogin;
