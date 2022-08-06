<template>
  <demo-content>
    <nut-button shape="square" type="primary" class="gap" block @click="show()"
      >展示带初始配置的Modal</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleChangeOption()"
      >展示新配置的Modal</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useModal } from 'taro-hooks';

const show = useModal({ title: 'initial title', content: 'initial content' });

const handleChangeOption = () => {
  show({
    title: 'taro-hooks-next',
    content: '你相信光么!',
    showCancel: false,
    confirmText: '当然!',
  });
};
</script>
