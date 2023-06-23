import Taro from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useSystemInfo = createUseInfoHook<'getSystemInfoSync'>(
  Taro.getSystemInfoSync,
  {},
);

export default useSystemInfo;
