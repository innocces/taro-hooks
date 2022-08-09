<template>
  <demo-content>
    <nut-button
      shape="square"
      type="primary"
      block
      class="gap"
      @click="handleSubscribe()"
      >订阅消息</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      block
      @click="handleSubscribeDevice()"
      >订阅设备消息</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useRequestSubscribeMessage, useModal } from 'taro-hooks';

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
</script>
