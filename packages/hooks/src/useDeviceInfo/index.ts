import Taro from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useDeviceInfo = createUseInfoHook<'getDeviceInfo'>(
  Taro.getDeviceInfo,
  {},
);

export default useDeviceInfo;
