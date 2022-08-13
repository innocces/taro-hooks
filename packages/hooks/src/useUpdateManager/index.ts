import { getUpdateManager, useTaroRef, useTaroEffect } from '@tarojs/taro';

import type { UpdateManager } from '@tarojs/taro';

export type UpdateInfo = {
  hasUpdate?: boolean;
  error?: boolean;
  ready?: boolean;
};

export type Callback = (manager: UpdateManager, updateInfo: UpdateInfo) => void;

function useUpdateManager(callback: Callback) {
  const updateManager = useTaroRef<UpdateManager>(getUpdateManager());
  const updateInfo = useTaroRef<UpdateInfo>({});

  useTaroEffect(() => {
    if (updateManager.current) {
      updateManager.current.onCheckForUpdate((res) => {
        updateInfo.current.hasUpdate = res.hasUpdate;
      });

      updateManager.current.onUpdateFailed(() => {
        updateInfo.current.error = true;
      });

      updateManager.current.onUpdateReady(() => {
        updateInfo.current.ready = true;
      });
    }
  }, [updateManager.current]);

  useTaroEffect(() => {
    callback?.(updateManager.current, updateInfo.current);
  }, [updateInfo.current]);
}

export default useUpdateManager;
