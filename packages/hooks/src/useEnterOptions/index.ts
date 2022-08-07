import { getEnterOptionsSync } from '@tarojs/taro';

import { createUseInfoHook } from '../createUseInfoHook';

const useEnterOptions = createUseInfoHook<
  Taro.getEnterOptionsSync.EnterOptions,
  {}
>(getEnterOptionsSync, {});

export default useEnterOptions;
