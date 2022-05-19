<template>
  <view class="index" @click="handleChangeMsg()">
    <text>{{ msg }}</text>
    <br />
    <text>{{ memoValue }}</text>
    <text>{{ refs.current }}</text>
    <H v-if="visible" />
  </view>
</template>

<script>
import { ref, reactive } from 'vue';
import H from './H';
import { useWatchEffect, useTaroMemo, useTaroRef } from '@tarojs/taro';
import './index.css';

export default {
  components: {
    H,
  },
  setup() {
    const msg = ref('Hello world');
    const visible = ref(false);
    const memoDep = ref(0);
    const token = reactive({ a: 1 });
    const refs = useTaroRef(visible);
    const handleChangeMsg = () => {
      msg.value = msg.value + Date.now();
      visible.value = !visible.value;
      if (visible.value) {
        memoDep.value = memoDep.value + 1;
        token.a++;
      }
    };
    useWatchEffect(() => {
      console.log('msg change', msg.value);

      return () => {
        console.log('component will unmount');
      };
    }, [msg]);

    const memoValue = useTaroMemo(() => {
      console.log('memoValue change', memoDep.value);
      return Date.now();
    }, [memoDep]);

    return {
      msg,
      handleChangeMsg,
      visible,
      memoValue,
      token,
      refs,
    };
  },
};
</script>
