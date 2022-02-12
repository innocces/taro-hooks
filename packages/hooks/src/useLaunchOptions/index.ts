import { useEffect, useState } from 'react';
import { getLaunchOptionsSync } from '@tarojs/taro';
import useEnv from '../useEnv';
import { ENV_TYPE } from '../constant';

export type Result = TaroGeneral.LaunchOptionsApp | undefined;

function useLaunchOptions(): Result {
  const env = useEnv();
  const [launchOptions, setLaunchOptions] = useState<Result>();

  useEffect(() => {
    if (env && env === ENV_TYPE.WEAPP) {
      setLaunchOptions(getLaunchOptionsSync());
    }
  }, [env]);

  return launchOptions;
}

export default useLaunchOptions;
