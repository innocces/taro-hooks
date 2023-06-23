import { getLaunchOptionsSync } from '@tarojs/taro';

import { createUseInfoHook } from '../createUseInfoHook';

const useLaunchOptions = createUseInfoHook<'getLaunchOptionsSync'>(
  getLaunchOptionsSync,
  {},
);

export default useLaunchOptions;
