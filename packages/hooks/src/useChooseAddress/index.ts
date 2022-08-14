import { chooseAddress } from '@tarojs/taro';
import usePromise from '../usePromise';
import type { PromiseWithoutOptionAction } from '../type';

export type Choose =
  PromiseWithoutOptionAction<Taro.chooseAddress.SuccessCallbackResult>;

function useChooseAddress(): Choose {
  const choose: Choose = usePromise<
    {},
    Taro.chooseAddress.SuccessCallbackResult
  >(chooseAddress);

  return choose;
}

export default useChooseAddress;
