import { ENV_TYPE, requestSubscribeMessage } from '@tarojs/taro';
import type { requestSubscribeMessage as requestSubscribeMessageNamespace } from '@tarojs/taro';
import { useCallback } from 'react';
import useEnv from '../useEnv';
import type { TAuthResultType } from '../type';

export type TSuccessResult = { [tmplId: string]: TAuthResultType };
export type IAction = (
  tmplIds: (keyof TSuccessResult)[],
) => Promise<
  TSuccessResult | requestSubscribeMessageNamespace.FailCallbackResult
>;

function useRequestSubscribeMessage(): [IAction] {
  const env = useEnv();

  const requestSubscribeMessageAsync = useCallback<IAction>(
    (tmplIds) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP || !tmplIds?.length) {
          reject({ errMsg: 'requestSubscribeMessage: fail' });
        } else {
          try {
            requestSubscribeMessage({
              tmplIds,
              success: ({ errMsg, ...result }) =>
                resolve(result as TSuccessResult),
              fail: reject,
            }).catch(reject);
          } catch (e) {
            reject({ errMsg: 'requestSubscribeMessage: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  return [requestSubscribeMessageAsync];
}

export default useRequestSubscribeMessage;
