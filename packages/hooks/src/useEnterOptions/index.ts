import { getEnterOptionsSync } from '@tarojs/taro';
import { createUseInfoHook, NonResult } from '../createUseInfoHook';
import type { CallbackResult } from '../type';

export type Result = Taro.getEnterOptionsSync.EnterOptions;

const useEnterOptions: CallbackResult<NonResult<Result, {} | undefined>> =
  createUseInfoHook<Result, {}>(getEnterOptionsSync, {});

export default useEnterOptions;
