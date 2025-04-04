import Taro, {
  getAppAuthorizeSetting,
  getAppBaseInfo,
  getDeviceInfo,
  getWindowInfo
} from '@tarojs/taro';
import { useEffect, useState } from '@taro-hooks/core';

export interface SystemInfo {
  appBaseInfo: ReturnType<typeof getAppBaseInfo>;
  windowInfo: ReturnType<typeof getWindowInfo>;
  appAuthorizeSetting: ReturnType<typeof getAppAuthorizeSetting>;
  deviceInfo: ReturnType<typeof getDeviceInfo>;
}

/**
 * 获取系统信息，替代已废弃的getSystemInfoSync
 * 使用新的API：getAppBaseInfo, getWindowInfo, getAppAuthorizeSetting, getDeviceInfo
 * @returns 包含系统各项信息的对象
 */
function useSystemInfo(): SystemInfo {
  const [systemInfo, setSystemInfo] = useState<SystemInfo>({} as SystemInfo);

  useEffect(() => {
    try {
      setSystemInfo({
        appBaseInfo: getAppBaseInfo(),
        windowInfo: getWindowInfo(),
        appAuthorizeSetting: getAppAuthorizeSetting(),
        deviceInfo: getDeviceInfo(),
      });
    } catch (error) {
      console.error('[useSystemInfo]:', error);
    }
  }, []);

  return systemInfo;
}

export default useSystemInfo;
