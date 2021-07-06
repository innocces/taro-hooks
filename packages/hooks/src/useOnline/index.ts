import { useEffect, useState } from 'react';
import useNetworkType, { NetworkType } from '../useNetworkType';

function useOnline(): boolean | undefined {
  const [online, changeOnline] = useState<boolean>();
  const networkType = useNetworkType();

  useEffect(() => {
    if (networkType && networkType !== NetworkType.none) {
      changeOnline(true);
    } else {
      changeOnline(false);
    }
  }, [networkType]);

  return online;
}

export default useOnline;
