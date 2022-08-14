<template>
  <demo-content>
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="handleGet()"
      >获取微信运动步数</nut-button
    >
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="handleShare()"
      >分享数据至微信运动</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useWeRun, useModal, useLogin } from 'taro-hooks';

const { login } = useLogin();
const { get, share } = useWeRun();
const show = useModal({ mask: true, title: '设置结果', showCancel: false });

const handleGet = async () => {
  let content = '';
  try {
    await login(true);
    const result = await get();
    content = JSON.stringify(result);
  } catch (e) {
    content = e.errMsg || e.message;
  }
  show({ content });
};

const handleShare = async () => {
  let content = '';
  try {
    await login(true);
    const recordList = [
      { typeId: 1000, time: 200, calorie: 100 },
      { typeId: 3000, time: 300, calorie: 1000, distance: 1000 },
      { typeId: 4000, calorie: 1000, number: 100 },
    ];
    const result = await share(recordList);
    content = JSON.stringify(result);
  } catch (e) {
    content = e.errMsg || e.message;
  }
  show({ content });
};
</script>
