import { useEffect, useState } from '@taro-hooks/core';
import { escapeState } from '@taro-hooks/shared';
import useNetworkType from '../useNetworkType';

function useOnline(): boolean {
  const [online, changeOnline] = useState<boolean>(true);
  const networkType = useNetworkType();

  useEffect(() => {
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
