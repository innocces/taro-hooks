import { canIUse } from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import useEnv from '../useEnv';
import { ENV_TYPE } from '../constant';

function useAPICheck(scheme: string): [boolean, (scheme: string) => void] {
  const env = useEnv();
  const [apiValid, setApiValid] = useState(false);

  const setAPI = useCallback(
    (scheme: string) => {
      if (env.length && env !== ENV_TYPE.WEB) {
        setApiValid(canIUse(scheme));
      }
    },
    [env],
  );

  useEffect(() => {
    setAPI(scheme);
  }, [env]);

  return [apiValid, setAPI];
}

export default useAPICheck;
