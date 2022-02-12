import { getWeRunData } from '@tarojs/taro';
import { useCallback } from 'react';
import useEnv from '../useEnv';
import { typeOf } from '../utils/tool';
import { ENV_TYPE } from '../constant';

declare var wx: any;
export interface IGetWeRunDataSuccessResult {
  encryptedData: string;
  iv: string;
  cloudId?: string;
}
export interface IRecordListItem {
  typeId: number;
  time?: number;
  distance?: number;
  calorie: number;
  number?: number;
}

export type TGetWeRunData = () => Promise<
  IGetWeRunDataSuccessResult | TaroGeneral.CallbackResult
>;

export type TShareToWeRun = (
  recordList: IRecordListItem[],
) => Promise<TaroGeneral.CallbackResult>;

function useWeRun(): [TGetWeRunData, TShareToWeRun] {
  const env = useEnv();

  const getWeRunDataAsync = useCallback<TGetWeRunData>(() => {
    return new Promise((resolve, reject) => {
      if (env !== ENV_TYPE.WEAPP) {
        reject({ errMsg: 'getWeRunData: fail' });
      } else {
        try {
          getWeRunData({
            success: (res) => {
              const { errMsg, ...result } =
                res as unknown as IGetWeRunDataSuccessResult &
                  TaroGeneral.CallbackResult;
              resolve(result);
            },
            fail: reject,
          }).catch(reject);
        } catch (e) {
          reject({ errMsg: 'getWeRunData: fail', data: e });
        }
      }
    });
  }, [env]);

  const shareToWeRunAsync = useCallback<TShareToWeRun>(
    (recordList) => {
      return new Promise((resolve, reject) => {
        if (
          env !== ENV_TYPE.WEAPP ||
          typeOf(wx, 'Undefined') ||
          !Array.isArray(recordList) ||
          !recordList.length
        ) {
          reject({ errMsg: 'shareToWeRun: fail' });
        } else {
          try {
            if (env === ENV_TYPE.WEAPP) {
              wx.shareToWeRun({
                recordList,
                success: resolve,
                fail: reject,
              }).catch(reject);
            }
          } catch (e) {
            reject({ errMsg: 'shareToWeRun: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  return [getWeRunDataAsync, shareToWeRunAsync];
}

export default useWeRun;
