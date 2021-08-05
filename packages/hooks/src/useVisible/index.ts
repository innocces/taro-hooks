import { useDidHide, useDidShow } from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import { ENV_TYPE } from '@tarojs/taro';
import useEnv from '../useEnv';

function useVisible(): boolean {
  const [visible, changeVisible] = useState<boolean>(true);
  const env = useEnv();
  const listenVisible = useCallback(() => {
    const visibleState = document.visibilityState;
    changeVisible(visibleState === 'visible');
  }, []);

  useEffect(() => {
    if (env && env === ENV_TYPE.WEB) {
      document.addEventListener('visibilitychange', listenVisible);

      return () =>
        document.removeEventListener('visibilitychange', listenVisible);
    }
  }, [env]);

  useDidShow(() => {
    changeVisible(true);
  });

  useDidHide(() => {
    changeVisible(false);
  });

  return visible;
}

export default useVisible;
