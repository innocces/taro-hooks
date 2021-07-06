import {
  getNetworkType,
  onNetworkStatusChange,
  offNetworkStatusChange,
} from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';

export enum NetworkType {
  wifi = 'wifi',
  '2g' = '2g',
  '3g' = '3g',
  '4g' = '4g',
  '5g' = '5g',
  unknown = 'unknown',
  none = 'none',
}

function useNetworkType(): keyof getNetworkType.networkType | undefined {
  const [type, setType] = useState<keyof getNetworkType.networkType>();

  useEffect(() => {
    getNetworkType().then(({ networkType }) => setType(networkType));

    onNetworkStatusChange(listenNetworkStatusChange);

    return () => {
      offNetworkStatusChange(listenNetworkStatusChange);
    };
  }, []);

  const listenNetworkStatusChange = useCallback(
    ({ networkType }) => {
      setType(networkType);
    },
    [setType],
  );

  return type;
}

export default useNetworkType;
