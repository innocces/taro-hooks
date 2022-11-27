import { getSystemInfoSync } from '@tarojs/taro';
import { createUseInfoHook, NonResult } from '../createUseInfoHook';
import type { CallbackResult } from '../type';

export type Result = Taro.getSystemInfoSync.Result;

const useSystemInfo: CallbackResult<NonResult<Result, {} | undefined>> =
  createUseInfoHook<Result, {}>(getSystemInfoSync, {});

export default useSystemInfo;
