/**
 * api: getAccountInfoSync
 */

import { getAccountInfoSync } from '@tarojs/taro';
import { createUseInfoHook, NonResult } from '../createUseInfoHook';
import type { CallbackResult } from '../type';

export type Result = Taro.getAccountInfoSync.AccountInfo;

const useAccountInfo: CallbackResult<NonResult<Result, {} | undefined>> =
  createUseInfoHook<Taro.getAccountInfoSync.AccountInfo, {}>(
    getAccountInfoSync,
    {},
  );

export default useAccountInfo;
