<template>
  <demo-content>
    <nut-button shape="square" type="primary" class="gap" block @click="show()"
      >展示带初始配置的Toast</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleChangeOption()"
      >展示新配置的Toast</nut-button
    >
    <nut-button shape="square" type="primary" block @click="hide()"
      >隐藏新配置的Toast</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useToast } from 'taro-hooks';

const { show, hide } = useToast({ title: 'initial title' });

const handleChangeOption = () => {
  show({
    icon: 'error',
    title: '点击隐藏按钮进行隐藏',
    duration: 3000000,
  });
};
</script>
