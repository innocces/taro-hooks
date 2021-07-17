import { ENV_TYPE, getLaunchOptionsSync, General } from '@tarojs/taro';
import useEnv from '../useEnv';

function useLaunchOptions(): General.LaunchOptionsApp | {} {
  const env = useEnv();
  return env === ENV_TYPE.WEAPP ? getLaunchOptionsSync() : {};
}

export default useLaunchOptions;
