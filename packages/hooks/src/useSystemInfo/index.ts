import { getSystemInfoSync } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useSystemInfo = createUseInfoHook<'getSystemInfoSync'>(
  getSystemInfoSync,
  {},
);

export default useSystemInfo;
