import { canIUse } from '@tarojs/taro';
import { useEffect, useState } from '@taro-hooks/core';

export type SetAPI = (scheme: string) => boolean;

function useAPICheck(scheme: string): [boolean, SetAPI] {
  const setAPI: SetAPI = (scheme) => {
    if (!scheme) return false;
    const valid = canIUse(scheme);
    setApiValid(valid);
    return valid;
  };

  const [apiValid, setApiValid] = useState<boolean>(canIUse(scheme));

  useEffect(() => {
    scheme && setAPI(scheme);
  }, [scheme]);

  return [apiValid, setAPI];
}

export default useAPICheck;
