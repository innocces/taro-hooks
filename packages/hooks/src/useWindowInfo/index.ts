import Taro from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useWindowInfo = createUseInfoHook<'getWindowInfo'>(
  Taro.getWindowInfo,
  {},
);

export default useWindowInfo;
