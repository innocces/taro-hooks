import { getAccountInfoSync } from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';

export type Result = getAccountInfoSync.AccountInfo | {};

function useAccountInfo(): Result {
  const [accountInfo, setAccountInfo] = useState<Result>({});

  useEffect(() => {
    getAccountInfo();
  }, []);

  const getAccountInfo = useCallback(() => {
    try {
      const info = getAccountInfoSync();
      setAccountInfo(info);
    } catch (e) {
      setAccountInfo({});
    }
  }, []);

  return accountInfo;
}

export default useAccountInfo;
