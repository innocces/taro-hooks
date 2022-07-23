/**
 * api: getAccountInfoSync
 */

import { getAccountInfoSync } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

export type Result = Taro.getAccountInfoSync.AccountInfo;

const useAccountInfo = createUseInfoHook<
  Taro.getAccountInfoSync.AccountInfo,
  {}
>(getAccountInfoSync, {});

export default useAccountInfo;
