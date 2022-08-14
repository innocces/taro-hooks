import { chooseInvoice, chooseInvoiceTitle } from '@tarojs/taro';
import usePromise from '../usePromise';

import type { PromiseWithoutOptionAction } from '../type';

export type Choose =
  PromiseWithoutOptionAction<Taro.chooseInvoice.SuccessCallbackResult>;
export type ChooseTitle =
  PromiseWithoutOptionAction<Taro.chooseInvoiceTitle.SuccessCallbackResult>;

function useInvoice(): { choose: Choose; chooseTitle: ChooseTitle } {
  const choose: Choose = usePromise<
    {},
    Taro.chooseInvoice.SuccessCallbackResult
  >(chooseInvoice);
  const chooseTitle: ChooseTitle = usePromise<
    {},
    Taro.chooseInvoiceTitle.SuccessCallbackResult
  >(chooseInvoiceTitle);

  return { choose, chooseTitle };
}

export default useInvoice;
