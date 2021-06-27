import Taro, { ENV_TYPE } from '@tarojs/taro';
import useEnv from '../useEnv';

const useAPICheck = (scheme: string): boolean => {
  const env = useEnv();

  return env !== ENV_TYPE.WEAPP ? false : Taro.canIUse(scheme);
};

export default useAPICheck;
