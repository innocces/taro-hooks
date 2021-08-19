import { getSystemInfo } from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';

export type Result = getSystemInfo.Result | {};

function useSystemInfo(): Result {
  const [systemInfo, setSystemInfo] = useState<Result>({});

  useEffect(() => {
    getSystemInfoSync();
  }, []);

  const getSystemInfoSync = useCallback(() => {
    try {
      getSystemInfo({
        success: setSystemInfo,
        fail: () => setSystemInfo({}),
      });
    } catch (e) {
      setSystemInfo({});
    }
  }, []);

  return systemInfo;
}

export default useSystemInfo;
