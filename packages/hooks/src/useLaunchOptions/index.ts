import Taro from '@tarojs/taro';

import { createUseInfoHook } from '../createUseInfoHook';

const useLaunchOptions = createUseInfoHook<'getLaunchOptionsSync'>(
  Taro.getLaunchOptionsSync,
  {},
);

export default useLaunchOptions;
