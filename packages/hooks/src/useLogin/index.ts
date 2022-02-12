import { login, checkSession } from '@tarojs/taro';
import { useCallback } from 'react';
import { ENV_TYPE } from '../constant';
import useEnv from '../useEnv';

export type ILogin = (needCheck?: boolean) => Promise<string | undefined>;
export type IAction = () => Promise<TaroGeneral.CallbackResult>;

function useLogin(): [ILogin, IAction] {
  const env = useEnv();

  const checkSessionSync = useCallback<IAction>(() => {
    return new Promise((resolve, reject) => {
      if (env === ENV_TYPE.WEAPP) {
        checkSession({
          success: resolve,
          fail: reject,
        }).catch(reject);
      } else {
        reject({ errMsg: 'checkSession:fail' });
      }
    });
  }, [env]);

  const loginSync = useCallback<ILogin>(
    (needCheck) => {
      return new Promise((resolve, reject) => {
        if (env === ENV_TYPE.WEAPP) {
          const loginAction = () => {
            login({
              success: (res) => resolve(res.code),
              fail: reject,
            }).catch(reject);
          };
          try {
            if (needCheck) {
              checkSessionSync()
                .then(() => {
                  loginAction();
                })
                .catch(reject);
            } else {
              loginAction();
            }
          } catch (e) {
            reject({ errMsg: 'login:fail', data: e });
          }
        } else {
          reject({ errMsg: 'login:fail' });
        }
      });
    },
    [env, checkSessionSync],
  );

  return [loginSync, checkSessionSync];
}

export default useLogin;
