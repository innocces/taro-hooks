/**
 * api: getAccountInfoSync
 */
import { getAccountInfoSync } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useAccountInfo = createUseInfoHook<'getAccountInfoSync'>(
  getAccountInfoSync,
  {},
);

export default useAccountInfo;
