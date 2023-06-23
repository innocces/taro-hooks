import Taro from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useBattery = createUseInfoHook<'getBatteryInfoSync'>(
  Taro.getBatteryInfoSync,
  {},
);

export default useBattery;
