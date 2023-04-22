import { getUpdateManager } from '@tarojs/taro';
import { useRef, useEffect } from '@taro-hooks/core';

import type { UpdateManager } from '@tarojs/taro';

export type UpdateInfo = {
  hasUpdate?: boolean;
  error?: boolean;
  ready?: boolean;
};

export type Callback = (manager: UpdateManager, updateInfo: UpdateInfo) => void;

function useUpdateManager(callback: Callback) {
  const updateManager = useRef<UpdateManager>(getUpdateManager());
  const updateInfo = useRef<UpdateInfo>({});

  useEffect(() => {
    if (updateManager.current) {
      updateManager.current.onCheckForUpdate?.((res) => {
        updateInfo.current.hasUpdate = res.hasUpdate;
      });

      updateManager.current.onUpdateFailed?.(() => {
        updateInfo.current.error = true;
      });

      updateManager.current.onUpdateReady?.(() => {
        updateInfo.current.ready = true;
      });
    }
  }, [updateManager.current]);

  useEffect(() => {
    callback?.(updateManager.current, updateInfo.current);
  }, [updateInfo.current]);
}

export default useUpdateManager;
