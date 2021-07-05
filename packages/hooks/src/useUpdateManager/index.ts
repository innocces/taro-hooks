import { ENV_TYPE, getUpdateManager, UpdateManager } from '@tarojs/taro';
import { useCallback, useEffect, useRef } from 'react';
import useEnv from '../useEnv';

export type Result = UpdateManager | {};

function useUpdateManager({
  onCheckForUpdate,
  onUpdateReady,
  onUpdateFailed,
}: UpdateManager): Result {
  const env = useEnv();
  const updateManager = useRef<Result>({});

  useEffect(() => {
    if (env === ENV_TYPE.WEAPP) {
      const updateManagerInstance = getUpdateManager();
      addEventListener(updateManagerInstance);
      updateManager.current = updateManagerInstance;
    }
  }, [env]);

  const addEventListener = useCallback((updateManagerInstance) => {
    updateManagerInstance.onCheckForUpdate(onCheckForUpdate);
    updateManagerInstance.onUpdateReady(onUpdateReady);
    updateManagerInstance.onUpdateFailed(onUpdateFailed);
  }, []);

  return updateManager;
}

export default useUpdateManager;
