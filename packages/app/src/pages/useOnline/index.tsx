import React, { useCallback, useEffect } from 'react';
import { AtMessage, AtSwitch, AtNoticebar } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useOnline } from 'taro-hooks';
import Taro from '@tarojs/taro';

import 'taro-ui/dist/style/components/icon.scss';

export default () => {
  const online = useOnline();

  const handleOnlineStatusChange = useCallback((status) => {
    Taro.atMessage({
      message: '当前网络状态为: ' + (status ? '开启' : '关闭'),
      type: 'info',
    });
  }, []);

  useEffect(() => {
    if (typeof online === 'boolean') handleOnlineStatusChange(online);
  }, [online, handleOnlineStatusChange]);

  return (
    <>
      <AtNoticebar marquee>
        当前hook自动监听网络状态变化。可尝试更改设备网络状态测试。
      </AtNoticebar>
      <AtMessage />
      <DocPage title="useOnline 网络状态" panelTitle="useOnline">
        <AtSwitch title="当前网络状态" checked={online} disabled />
      </DocPage>
    </>
  );
};
