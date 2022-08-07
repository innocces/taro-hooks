import { getLaunchOptionsSync } from '@tarojs/taro';

import { createUseInfoHook } from '../createUseInfoHook';

const useLaunchOptions = createUseInfoHook<
  Taro.getLaunchOptionsSync.LaunchOptions,
  {}
>(getLaunchOptionsSync, {});

export default useLaunchOptions;
