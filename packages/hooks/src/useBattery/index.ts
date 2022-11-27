import { getBatteryInfoSync } from '@tarojs/taro';
import { createUseInfoHook, NonResult } from '../createUseInfoHook';
import type { CallbackResult } from '../type';

export type Result = Taro.getBatteryInfoSync.Result;

const useBattery: CallbackResult<NonResult<Result, {} | undefined>> =
  createUseInfoHook<Result, {}>(getBatteryInfoSync, {});

export default useBattery;
