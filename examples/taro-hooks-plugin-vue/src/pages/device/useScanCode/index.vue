<template>
  <demo-content>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleScan()"
      >普通扫码</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleCameraScan()"
      >相机扫码</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleScan('qrCode')"
      >扫二维码</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useScanCode, useModal } from 'taro-hooks';

const { scan, cameraScan } = useScanCode();
const show = useModal({ mask: true, title: '扫码结果', showCancel: false });

const handleScan = async (scanType?) => {
  let content = '';
  try {
    const res = await scan({ scanType });
    content = JSON.stringify(res);
  } catch (e) {
    content = e.errMsg || e.message;
  }
  show({ content });
};

const handleCameraScan = async () => {
  let content = '';
  try {
    const res = await cameraScan();
    content = JSON.stringify(res);
  } catch (e) {
    content = e.errMsg || e.message;
  }
  show({ content });
};
</script>
