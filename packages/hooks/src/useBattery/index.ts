import { getBatteryInfoSync, ENV_TYPE } from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import { useEnv } from '../';

export interface IBatteryInfo {
  isCharging: boolean;
  level: number;
}

export interface IGetBatteryResult extends IBatteryInfo {
  charging: boolean;
}

interface INavigator extends Navigator {
  getBattery: () => Promise<IGetBatteryResult>;
}

declare var navigator: INavigator;

const initBatteryInfo: IBatteryInfo = {
  isCharging: false,
  level: 100,
};

function useBattery(): IBatteryInfo {
  const [batteryInfo, setBatteryInfo] = useState<IBatteryInfo>(initBatteryInfo);
  const env = useEnv();

  useEffect(() => {
    console.log(env);
    if (env) {
      generateBatteryInfo();
    }
  }, [env]);

  const generateBatteryInfo = useCallback(async () => {
    try {
      let battery = {};
      if (env === ENV_TYPE.WEB) {
        if (navigator && 'getBattery' in navigator) {
          const { charging: isCharging, level } = await navigator.getBattery();
          battery = {
            isCharging,
            level: level * 100,
          };
        }
      } else {
        battery = getBatteryInfoSync();
      }
      setBatteryInfo(battery as IBatteryInfo);
    } catch (e) {
      console.log(e);
    }
  }, [env]);

  return batteryInfo;
}

export default useBattery;
