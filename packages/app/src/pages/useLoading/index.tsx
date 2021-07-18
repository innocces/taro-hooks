import React, { useCallback } from 'react';
import { AtButton } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useLoading } from 'taro-hooks';

export default () => {
  const [show, hide] = useLoading({
    mask: false,
    title: 'initial title',
  });

  const showCustomLoading = useCallback(() => {
    show({
      title: '点击隐藏按钮进行隐藏',
    });
  }, [show]);

  return (
    <>
      <DocPage title="useLoading 加载提示框" panelTitle="useLoading">
        <AtButton onClick={show}>展示带初始配置Loading</AtButton>
        <AtButton className="gap" onClick={showCustomLoading}>
          展示新配置Loading
        </AtButton>
        <AtButton onClick={hide}>隐藏Loading</AtButton>
      </DocPage>
    </>
  );
};
