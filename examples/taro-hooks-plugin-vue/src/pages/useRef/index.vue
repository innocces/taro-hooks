<template>
  <view>
    <view>1. click counter</view>
    <button @click="handleClick()">Click me!</button>
    <view>2. a stop watch</view>
    <view>{{
      startTime != null && now != null ? (now - startTime) / 1000 : 0
    }}</view>
    <button @click="handleStart()">Start</button>
    <button @click="handleStop()">Stop</button>
  </view>
</template>

<script>
import { useTaroRef, useTaroState, showToast } from '@tarojs/taro';

export default {
  setup() {
    const ref = useTaroRef(0);
    function handleClick() {
      ref.current = ref.current + 1;
      showToast({
        title: 'You clicked' + ref.current + 'times',
        duration: 2000,
      });
    }

    const [startTime, setStartTime] = useTaroState(null);
    const [now, setNow] = useTaroState(null);
    const intervalRef = useTaroRef(null);

    function handleStart() {
      setStartTime(Date.now());
      setNow(Date.now());

      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setNow(Date.now());
      }, 10);
    }

    function handleStop() {
      clearInterval(intervalRef.current);
    }

    return {
      handleClick,
      handleStart,
      handleStop,
      startTime,
      now,
    };
  },
};
</script>
