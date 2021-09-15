import {
  ENV_TYPE,
  chooseInvoice,
  chooseInvoiceTitle,
  General,
} from '@tarojs/taro';
import { useCallback } from 'react';
import useEnv from '../useEnv';

export interface IChooseInvoiceSuccessResult {
  card_id: string;
  encrypt_code: string;
  app_id: string;
}
export interface IChooseInvoiceTitleSuccessResult {
  bankAccount: string;
  bankName: string;
  companyAddress: string;
  taxNumber: string;
  telephone: string;
  title: string;
  type: 0 | 1;
}
export type TChooseInvoice = () => Promise<
  IChooseInvoiceSuccessResult[] | General.CallbackResult
>;

export type TChooseInvoiceTitle = () => Promise<
  IChooseInvoiceTitleSuccessResult | General.CallbackResult
>;

function useInvoice(): [TChooseInvoice, TChooseInvoiceTitle] {
  const env = useEnv();

  const chooseInvoiceAsync = useCallback<TChooseInvoice>(() => {
    return new Promise((resolve, reject) => {
      if (env !== ENV_TYPE.WEAPP) {
        reject({ errMsg: 'chooseInvoice: fail' });
      } else {
        try {
          chooseInvoice({
            success: ({ invoiceInfo = '' }) => {
              const parseInvoiceInfo = JSON.parse(invoiceInfo);
              resolve(parseInvoiceInfo);
            },
            fail: reject,
          });
        } catch (e) {
          reject({ errMsg: 'chooseInvoice: fail', data: e });
        }
      }
    });
  }, [env]);

  const chooseInvoiceTitleAsync = useCallback<TChooseInvoiceTitle>(() => {
    return new Promise((resolve, reject) => {
      if (env !== ENV_TYPE.WEAPP) {
        reject({ errMsg: 'chooseInvoiceTitle: fail' });
      } else {
        try {
          chooseInvoiceTitle({
            success: ({ errMsg, ...result }) => resolve(result),
            fail: reject,
          });
        } catch (e) {
          reject({ errMsg: 'chooseInvoiceTitle: fail', data: e });
        }
      }
    });
  }, [env]);

  return [chooseInvoiceAsync, chooseInvoiceTitleAsync];
}

export default useInvoice;
