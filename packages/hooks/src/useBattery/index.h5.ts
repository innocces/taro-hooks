import { createUseInfoHook } from '../createUseInfoHook';

let batteryManager: Partial<BatteryManager> = {};

// a bug will fixed: in taro, getBattery is missing????
navigator.getBattery?.()?.then?.((battery) => {
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

const useBattery = createUseInfoHook<Taro.getBatteryInfoSync.Result, {}>(
  getBatteryInfoSync,
  {},
);

export default useBattery;
