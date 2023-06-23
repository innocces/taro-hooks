import { getBatteryInfoSync } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useBattery = createUseInfoHook<'getBatteryInfoSync'>(
  getBatteryInfoSync,
  {},
);

export default useBattery;
