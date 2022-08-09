import React from 'react';
import { useRequestSubscribeMessage, useModal } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const { subscribe, subscribeDevice } = useRequestSubscribeMessage();
  const show = useModal({ mask: true, title: '订阅结果', showCancel: false });

  const subscribeId = 'jeNEwprDztjgwq0BI1raBmcJ7Sw1ldt-8lRi-7jXeyY';

  const handleSubscribe = async () => {
    let content = '订阅成功';
    try {
      const { [subscribeId]: result } = await subscribe([subscribeId]);
      content = result !== 'accept' ? '订阅失败' : content;
    } catch (e) {
      content = e.errMsg || e.message;
    }
    show({ content });
  };

  const handleSubscribeDevice = async () => {
    let content = '订阅成功';
    try {
      // 这里的数据是mock的. 真实配置需要在平台设置绑定
      const { [subscribeId]: result } = await subscribeDevice({
        tmplIds: [subscribeId],
        snTicket: ('' + Math.random()).replace('0.', ''),
        sn: ('' + Math.random()).replace('0.', ''),
        modelId: ('' + Math.random()).replace('0.', ''),
      });
      content = result !== 'accept' ? '订阅失败' : content;
    } catch (e) {
      content = e.errMsg || e.message;
    }
    show({ content });
  };

  return (
    <DemoContent>
      <Button
        block
        color="primary"
        onClick={handleSubscribe}
        className="gap"
        shape="square"
      >
        订阅消息
      </Button>
      <Button
        block
        color="primary"
        onClick={handleSubscribeDevice}
        shape="square"
      >
        订阅设备消息
      </Button>
    </DemoContent>
  );
};
