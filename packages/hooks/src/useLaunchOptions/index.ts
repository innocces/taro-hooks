import { useEffect, useState } from 'react';
import { ENV_TYPE, getLaunchOptionsSync, General } from '@tarojs/taro';
import useEnv from '../useEnv';

export type Result = General.LaunchOptionsApp | {};

function useLaunchOptions(): Result {
  const env = useEnv();
  const [launchOptions, setLaunchOptions] = useState<Result>({});

  useEffect(() => {
    if (env && env === ENV_TYPE.WEAPP) {
      setLaunchOptions(getLaunchOptionsSync());
    }
  }, [env]);

  return launchOptions;
}

export default useLaunchOptions;
