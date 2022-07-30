import { useTaroEffect, useTaroState } from '@tarojs/taro';
import { escapeState } from '@taro-hooks/shared';
import useNetworkType from '../useNetworkType';

function useOnline(): boolean {
  const [online, changeOnline] = useTaroState<boolean>(true);
  const networkType = useNetworkType();

  useTaroEffect(() => {
    const currentNetworkType = escapeState(networkType);
    if (currentNetworkType && currentNetworkType !== 'none') {
      changeOnline(true);
    } else {
      changeOnline(false);
    }
  }, [networkType]);

  return online;
}

export default useOnline;
