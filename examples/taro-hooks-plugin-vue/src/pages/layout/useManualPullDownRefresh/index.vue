<template>
  <demo-content>
    <nut-button shape="square" type="primary" class="gap" block @click="start()"
      >开始下拉刷新</nut-button
    >
    <nut-button shape="square" type="primary" class="gap" block @click="stop()"
      >结束下拉刷新</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="start(2000)"
      >开始下拉刷新2S后停止</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useManualPullDownRefresh, useBackground } from 'taro-hooks';
import Mock from 'mockjs';

useBackground({ textStyle: 'dark', backgroundColor: Mock.Random.color() });

const [start, stop] = useManualPullDownRefresh();
</script>
