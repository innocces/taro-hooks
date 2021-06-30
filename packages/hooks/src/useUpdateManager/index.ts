import { ENV_TYPE, getUpdateManager, UpdateManager } from '@tarojs/taro';
import { useCallback, useEffect, useRef, useState } from 'react';
import useEnv from '../useEnv';

export interface Options {
  applyUpdate: () => void;
}

export type Result = UpdateManager | {};

function useUpdateManager({
  applyUpdate,
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
      updateManager.current = getUpdateManager();
    }
  }, []);

  const addEventListener = useCallback((updateManagerInstance) => {
    updateManagerInstance.applyUpdate = applyUpdate;
    updateManagerInstance.onCheckForUpdate = onCheckForUpdate;
    updateManagerInstance.onUpdateReady = onUpdateReady;
    updateManagerInstance.onUpdateFailed = onUpdateFailed;
  }, []);

  return updateManager;
}

export default useUpdateManager;
