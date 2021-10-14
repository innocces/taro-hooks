import { getSystemInfo } from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';

export type Result = getSystemInfo.Result | undefined;

function useSystemInfo(): Result {
  const [systemInfo, setSystemInfo] = useState<Result>();

  useEffect(() => {
    getSystemInfoSync();
  }, []);

  const getSystemInfoSync = useCallback(() => {
    try {
      getSystemInfo({
        success: setSystemInfo,
        fail: () => console.error({ errMsg: 'getSystemInfo: fail', data: e }),
      });
    } catch (e) {
      console.error({ errMsg: 'getSystemInfo: fail', data: e });
    }
  }, []);

  return systemInfo;
}

export default useSystemInfo;
