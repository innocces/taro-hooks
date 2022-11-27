import type { BatteryManager } from '../type';
import { createUseInfoHook, NonResult } from '../createUseInfoHook';
import type { CallbackResult } from '../type';

export type Result = Taro.getBatteryInfoSync.Result;

interface INavigator extends Navigator {
  getBattery: () => Promise<BatteryManager>;
}

let batteryManager: Partial<BatteryManager> = {};

// a bug will fixed: in taro, getBattery is missing????
(navigator as INavigator).getBattery?.()?.then?.((battery) => {
  batteryManager = battery;
});

const getBatteryInfoSync = () => {
  let result = {
    isCharging: false,
    level: '100',
  };
  if (navigator && 'getBattery' in navigator) {
    const { charging: isCharging = false, level = 1 } = batteryManager;
    result = {
      isCharging,
      level: level * 100 + '',
    };
  }
  return result;
};

const useBattery: CallbackResult<NonResult<Result, {} | undefined>> =
  createUseInfoHook<Result, {}>(getBatteryInfoSync, {});

export default useBattery;
