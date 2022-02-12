import { getEnv } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import { ENV_TYPE } from '../constant';

export type Result = ENV_TYPE | '';

function useEnv(): Result {
  const [env, setEnv] = useState<Result>('');

  useEffect(() => {
    setEnv(getEnv());
  }, []);

  return env;
}

export default useEnv;
