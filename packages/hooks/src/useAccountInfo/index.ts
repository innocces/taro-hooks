/**
 * api: getAccountInfoSync
 */
import Taro from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useAccountInfo = createUseInfoHook<'getAccountInfoSync'>(
  Taro.getAccountInfoSync,
  {},
);

export default useAccountInfo;
