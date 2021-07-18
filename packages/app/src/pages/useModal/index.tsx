import React, { useCallback } from 'react';
import { AtButton } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useModal } from 'taro-hooks';

export default () => {
  const [show] = useModal({
    title: 'initial title',
    content: 'initial content',
  });

  const showCustomModal = useCallback(() => {
    show({
      title: 'taro hooks',
      content: 'taro hooks 还不戳！',
      showCancel: false,
      confirmText: '确实！',
      confirmColor: '#4569d4',
    });
  }, [show]);

  return (
    <>
      <DocPage title="useModal 模态对话框" panelTitle="useModal">
        <AtButton onClick={show}>展示带初始配置Modal</AtButton>
        <AtButton className="gap" onClick={showCustomModal}>
          展示新配置Modal
        </AtButton>
      </DocPage>
    </>
  );
};
