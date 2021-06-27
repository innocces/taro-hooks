import Taro, { ENV_TYPE } from '@tarojs/taro';
import useEnv from '../useEnv';

function useAPICheck(scheme: string): boolean {
  const env = useEnv();

  return env === ENV_TYPE.WEB ? false : Taro.canIUse(scheme);
}

export default useAPICheck;
