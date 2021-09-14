import React, { useCallback } from 'react';
import { AtNoticebar, AtButton } from 'taro-ui';

import DocPage from '@components/DocPage';

import { useModal, useRequestSubscribeMessage } from 'taro-hooks';

export default () => {
  const [show] = useModal({ mask: true, title: '订阅消息', showCancel: false });
  const [requestSubscribeMessage] = useRequestSubscribeMessage();

  const handleRequestSubscribeMessage = useCallback(async () => {
    let content = '订阅成功!';
    const subscribeId = 'jeNEwprDztjgwq0BI1raBmcJ7Sw1ldt-8lRi-7jXeyY';
    try {
      const { [subscribeId]: result } = await requestSubscribeMessage([
        subscribeId,
      ]);
      if (result !== 'accept') {
        content = '订阅失败';
      }
    } catch (e) {
      content = '订阅失败';
    }
    show({ content });
  }, [requestSubscribeMessage, show]);

  return (
    <>
      <AtNoticebar marquee>该hook仅可在小程序端使用</AtNoticebar>
      <DocPage
        title="useRequestSubscribeMessage 订阅消息"
        panelTitle="useRequestSubscribeMessage"
      >
        <AtButton onClick={handleRequestSubscribeMessage}>订阅消息</AtButton>
      </DocPage>
    </>
  );
};
