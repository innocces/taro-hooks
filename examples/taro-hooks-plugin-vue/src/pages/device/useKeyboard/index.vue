<template>
  <demo-content>
    <nut-cell title="高度" :sub-title="$filters.stringify(height)"> </nut-cell>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleClose()"
      >关闭键盘</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleGetRange()"
      >获取选择范围</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useKeyboard, useModal } from 'taro-hooks';
const { height, close, getRange } = useKeyboard();
const show = useModal({ mask: true, title: '获取结果', showCancel: false });

const handleClose = async () => {
  let content = '关闭成功';
  try {
    const result = await close();
    console.log(result);
  } catch (e) {
    content = e.errMsg || e.message;
  }
  show({ content });
};

const handleGetRange = async () => {
  let content = '获取成功';
  try {
    const result = await getRange();
    console.log(result);
  } catch (e) {
    content = e.errMsg || e.message;
  }
  show({ content });
};
</script>
