<template>
  <demo-content>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="vibrate()"
      >短震动触感按钮</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="vibrate(true)"
      >长震动触感按钮</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="vibrateInterval()"
      >持续短震动触感按钮</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="vibrateInterval(true)"
      >持续长震动触感按钮</nut-button
    >
    <nut-button shape="square" type="primary" class="gap" block @click="clear()"
      >关闭持续震动</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useVibrate } from 'taro-hooks';

const { vibrate } = useVibrate();
const { vibrate: vibrateInterval, clear } = useVibrate(true);
</script>
