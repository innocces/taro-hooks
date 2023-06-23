import { getEnterOptionsSync } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useEnterOptions = createUseInfoHook<'getEnterOptionsSync'>(
  getEnterOptionsSync,
  {},
);

export default useEnterOptions;
