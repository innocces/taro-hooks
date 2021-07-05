import React, { useCallback } from 'react';
import { AtMessage, AtNoticebar } from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '../../components/DocPage';

import { useEnv, useUpdateManager } from 'taro-hooks';
import Taro, { ENV_TYPE } from '@tarojs/taro';

import 'taro-ui/dist/style/components/icon.scss';

export default () => {
  const env = useEnv();

  const onCheckForUpdate = useCallback((res) => {
    Taro.atMessage({
      message: res.hasUpdate ? '有新版本' : '无新版本',
    });
  }, []);

  const onUpdateReady = useCallback(() => {
    Taro.atMessage({
      message: '检查更新成功',
    });
  }, []);

  const onUpdateFailed = useCallback(() => {
    Taro.atMessage({
      message: '检查更新失败',
    });
  }, []);

  const updateManager = useUpdateManager({
    onCheckForUpdate,
    onUpdateReady,
    onUpdateFailed,
  });

  return (
    <>
      {env !== ENV_TYPE.WEAPP && (
        <AtNoticebar>useUpdateManager 仅可以在小程序环境中使用</AtNoticebar>
      )}
      <AtMessage />
      <DocPage title="useUpdateManager 更新" panelTitle="useUpdateManager">
        <View>检查更新中....</View>
      </DocPage>
    </>
  );
};
