import Taro from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useEnterOptions = createUseInfoHook<'getEnterOptionsSync'>(
  Taro.getEnterOptionsSync,
  {},
);

export default useEnterOptions;
