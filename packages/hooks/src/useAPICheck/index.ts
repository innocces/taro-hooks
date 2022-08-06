import { canIUse, useTaroEffect, useTaroState } from '@tarojs/taro';

export type SetAPI = (scheme: string) => boolean;

function useAPICheck(scheme: string): [boolean, SetAPI] {
  const setAPI: SetAPI = (scheme) => {
    if (!scheme) return false;
    const valid = canIUse(scheme);
    setApiValid(valid);
    return valid;
  };

  const [apiValid, setApiValid] = useTaroState<boolean>(canIUse(scheme));

  useTaroEffect(() => {
    scheme && setAPI(scheme);
  }, [scheme]);

  return [apiValid, setAPI];
}

export default useAPICheck;
