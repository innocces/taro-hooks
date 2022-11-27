import { getLaunchOptionsSync } from '@tarojs/taro';

import { createUseInfoHook, NonResult } from '../createUseInfoHook';
import type { CallbackResult } from '../type';

export type Result = Taro.getLaunchOptionsSync.LaunchOptions;

const useLaunchOptions: CallbackResult<NonResult<Result, {} | undefined>> =
  createUseInfoHook<Result, {}>(getLaunchOptionsSync, {});

export default useLaunchOptions;
