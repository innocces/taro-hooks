<template>
  <demo-content>
    <nut-button shape="square" type="primary" block @click="handleClick()"
      >设置置顶栏文字内容</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useTopBarText, useModal } from 'taro-hooks';
import Mock from 'mockjs';

const set = useTopBarText('taro-hooks');
const show = useModal({ mask: true, title: '设置结果', showCancel: false });

const handleClick = async () => {
  let content = '';
  try {
    const { errMsg } = await set(Mock.Random.name());
    content = errMsg;
  } catch (e) {
    content = e.errMsg || e.message;
  }
  show({ content });
};
</script>
