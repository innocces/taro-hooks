<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue';
import './index.less';
export default {
  setup() {
    const msg = ref('Hello world');
    return {
      msg,
    };
  },
};
</script>
