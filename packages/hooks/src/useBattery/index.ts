import { getBatteryInfoSync } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useBattery = createUseInfoHook<Taro.getBatteryInfoSync.Result, {}>(
  getBatteryInfoSync,
  {},
);

export default useBattery;
