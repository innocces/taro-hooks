import {
  getNetworkType,
  onNetworkStatusChange,
  offNetworkStatusChange,
} from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import useEnv from '../useEnv';
import { ENV_TYPE } from '../constant';

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
  const env = useEnv();

  useEffect(() => {
    if (!env) return;
    getNetworkType().then(({ networkType }) => setType(networkType));

    onNetworkStatusChange(listenNetworkStatusChange);

    return () => {
      env !== ENV_TYPE.WEB && offNetworkStatusChange(listenNetworkStatusChange);
    };
  }, [env]);

  const listenNetworkStatusChange = useCallback(
    ({ networkType }) => {
      setType(networkType);
    },
    [setType],
  );

  return type;
}

export default useNetworkType;
