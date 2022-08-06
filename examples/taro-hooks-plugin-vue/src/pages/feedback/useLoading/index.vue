<template>
  <demo-content>
    <nut-button shape="square" type="primary" class="gap" block @click="show()"
      >展示带初始配置的Loading</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleChangeOption()"
      >展示新配置的Loading</nut-button
    >
    <nut-button shape="square" type="primary" block @click="hide()"
      >隐藏新配置的Loading</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useLoading } from 'taro-hooks';

const { show, hide } = useLoading({ title: 'initial title' });

const handleChangeOption = () => {
  show({
    title: '点击隐藏按钮进行隐藏',
  });
};
</script>
