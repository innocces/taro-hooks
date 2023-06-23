import { getBatteryInfoSync } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

export type Result = Taro.getBatteryInfoSync.Result;

type s = Awaited<ReturnType<typeof getBatteryInfoSync>>;

const useBattery = createUseInfoHook<'getBatteryInfoSync'>(
  getBatteryInfoSync,
  {},
);

export default useBattery;
