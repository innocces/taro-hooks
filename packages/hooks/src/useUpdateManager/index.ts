import { getUpdateManager, UpdateManager } from '@tarojs/taro';
import { useCallback, useEffect, useRef } from 'react';
import useEnv from '../useEnv';
import { ENV_TYPE } from '../constant';

export type Result = UpdateManager | undefined;

export type IAction = (manager: UpdateManager) => void;
export interface IUpdateManager {
  onCheckForUpdate?: (
    manager: UpdateManager,
    result: UpdateManager.OnCheckForUpdateResult,
  ) => void;
  onUpdateReady?: IAction;
  onUpdateFailed?: IAction;
}

function useUpdateManager({
  onCheckForUpdate,
  onUpdateReady,
  onUpdateFailed,
}: IUpdateManager): Result {
  const env = useEnv();
  const updateManager = useRef<Result>();

  useEffect(() => {
    if (env === ENV_TYPE.WEAPP) {
      const updateManagerInstance = getUpdateManager();
      addEventListener(updateManagerInstance);
      updateManager.current = updateManagerInstance;
    }
  }, [env]);

  const addEventListener = useCallback((updateManagerInstance) => {
    onCheckForUpdate &&
      updateManagerInstance.onCheckForUpdate(
        (result: UpdateManager.OnCheckForUpdateResult) =>
          onCheckForUpdate(updateManagerInstance, result),
      );
    onUpdateReady &&
      updateManagerInstance.onUpdateReady(() =>
        onUpdateReady(updateManagerInstance),
      );
    onUpdateFailed &&
      updateManagerInstance.onUpdateFailed(() =>
        onUpdateFailed(updateManagerInstance),
      );
  }, []);

  return updateManager.current;
}

export default useUpdateManager;
