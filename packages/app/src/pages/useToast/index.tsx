import React, { useCallback } from 'react';
import { AtButton } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useToast } from 'taro-hooks';
import image from '../../assets/icon/about-select.png';

export default () => {
  const [show, hide] = useToast({
    mask: true,
    duration: 1000,
    title: 'initial title',
    icon: 'success',
  });

  const showCustomToast = useCallback(() => {
    show({
      title: '点击隐藏按钮进行隐藏',
      image,
      duration: 3000000,
      mask: false,
    });
  }, [show]);

  return (
    <>
      <DocPage title="useToast 消息提示框" panelTitle="useToast">
        <AtButton onClick={show}>展示带初始配置Toast</AtButton>
        <AtButton className="gap" onClick={showCustomToast}>
          展示新配置Toast
        </AtButton>
        <AtButton onClick={hide}>隐藏新配置Toast</AtButton>
      </DocPage>
    </>
  );
};
