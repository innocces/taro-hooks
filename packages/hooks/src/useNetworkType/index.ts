import {
  getNetworkType,
  onNetworkStatusChange,
  offNetworkStatusChange,
} from '@tarojs/taro';
import { useEffect, useState } from '@taro-hooks/core';
import { logError } from '@taro-hooks/shared';
import usePromise from '../usePromise';

export type NetworkType = keyof Taro.getNetworkType.NetworkType;

function useNetworkType(autoListen = true): NetworkType {
  const [networkType, setNetworkType] = useState<NetworkType>('unknown');
  const asyncGetNetworkType = usePromise<
    null,
    Taro.getNetworkType.SuccessCallbackResult
  >(getNetworkType);

  useEffect(() => {
    asyncGetNetworkType().then(
      (response) => {
        setNetworkType(response.networkType);
      },
      ({ errMsg }) => {
        logError(errMsg);
        setNetworkType('unknown');
      },
    );
  }, []);

  const listener: Taro.onNetworkStatusChange.Callback = (response) => {
    setNetworkType(response.networkType);
  };

  useEffect(() => {
    if (autoListen) {
      onNetworkStatusChange(listener);

      return () => {
        offNetworkStatusChange(listener);
      };
    }
  }, [autoListen]);

  return networkType;
}

export default useNetworkType;
