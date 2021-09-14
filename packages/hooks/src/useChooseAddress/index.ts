import { ENV_TYPE, chooseAddress, General } from '@tarojs/taro';
import { useCallback } from 'react';
import useEnv from '../useEnv';
import { typeOf } from '../utils/tool';

declare var wx: any;

export interface ISuccessResult {
  cityName: string;
  countyName: string;
  detailInfo: string;
  nationalCode: string;
  postalCode: string;
  provinceName: string;
  telNumber: string;
  userName: string;
}
export type IAction = () => Promise<ISuccessResult | General.CallbackResult>;

function useChooseAddress(): [IAction] {
  const env = useEnv();

  const chooseAddressAsync = useCallback<IAction>(() => {
    return new Promise((resolve, reject) => {
      if (
        (env !== ENV_TYPE.WEAPP && env !== ENV_TYPE.WEB) ||
        typeOf(wx, 'Undefined')
      ) {
        reject({ errMsg: 'requestSubscribeMessage: fail' });
      } else {
        try {
          const successMethod = ({
            errMsg,
            ...result
          }: { errMsg: string } & ISuccessResult) => resolve(result);
          if (env === ENV_TYPE.WEAPP) {
            chooseAddress({
              success: successMethod,
              fail: reject,
            }).catch(reject);
          } else {
            wx.openAddress({
              success: successMethod,
              fail: reject,
            });
          }
        } catch (e) {
          reject({ errMsg: 'requestSubscribeMessage: fail', data: e });
        }
      }
    });
  }, [env]);

  return [chooseAddressAsync];
}

export default useChooseAddress;
