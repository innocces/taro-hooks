import {
  getNetworkType,
  onNetworkStatusChange,
  offNetworkStatusChange,
  useTaroState,
  useTaroEffect,
} from '@tarojs/taro';
import { logError } from '@taro-hooks/shared';
import usePromise from '../usePromise';

export type NetworkType = keyof Taro.getNetworkType.NetworkType;

function useNetworkType(autoListen = true): NetworkType {
  const [networkType, setNetworkType] = useTaroState<NetworkType>('unknown');
  const asyncGetNetworkType = usePromise<
    null,
    Taro.getNetworkType.SuccessCallbackResult
  >(getNetworkType);

  useTaroEffect(() => {
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

  useTaroEffect(() => {
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
