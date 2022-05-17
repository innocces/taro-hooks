<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue';
import { useTaroEffect } from '@tarojs/taro';
import './index.css';

export default {
  setup() {
    const msg = ref('Hello world');
    console.log(useTaroEffect);
    return {
      msg,
    };
  },
};
</script>
