import React, { useCallback } from 'react';
import { AtMessage } from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '../../components/DocPage';

import { useUpdateManager } from 'taro-hooks';
import Taro from '@tarojs/taro';

import 'taro-ui/dist/style/components/icon.scss';

export default () => {
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
      <AtMessage />
      <DocPage title="useRequest 请求" panelTitle="useRequest">
        <View>检查更新中....</View>
      </DocPage>
    </>
  );
};
