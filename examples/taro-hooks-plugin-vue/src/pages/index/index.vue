<template>
  <view class="index">
    <text>{{ msg }}</text>
    <nut-button type="primary" @click="test($event)">123</nut-button>
  </view>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('Hello world');

    return {
      msg,
      test: console.log,
    };
  },
};
</script>
