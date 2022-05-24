<template>
  <view class="index" @click="handleChangeMsg()">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue';
import { useTaroEffect, useTaroContext } from '@tarojs/taro';
import context from './context';
import './index.css';

export default {
  setup() {
    const selfContext = useTaroContext(context);
    console.log(selfContext);
    const msg = ref('Hello world');
    const handleChangeMsg = () => {
      msg.value = msg.value + Date.now();
    };
    useTaroEffect(() => {
      console.log('msg change', msg.value);

      return () => {
        console.log('component H will unmount');
      };
    }, [msg]);
    return {
      msg,
      handleChangeMsg,
    };
  },
};
</script>
