<template>
  <demo-content>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="disable()"
      >取消离开页面弹窗</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useAlertBeforeUnload } from 'taro-hooks';

import { useDidShow } from '@tarojs/taro';

const { enable, disable } = useAlertBeforeUnload();

useDidShow(() => {
  enable('您要离开此页面吗?');
});
</script>
