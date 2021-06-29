import { getSystemInfoSync } from '@tarojs/taro';
import { useEffect, useState } from 'react';

export type Result = getSystemInfoSync.Result | {};

function useSystemInfo(): Result {
  const [systemInfo, setSystemInfo] = useState<Result>({});

  useEffect(() => {
    setSystemInfo(getSystemInfoSync());
  }, []);

  return systemInfo;
}

export default useSystemInfo;
