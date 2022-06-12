<template>
  <block>
    <demo-content title="1. click counter">
      <nut-button shape="square" type="primary" block @click="handleClick()"
        >Click me!</nut-button
      >
    </demo-content>

    <demo-content title="1. click counter">
      <view class="control-input">{{
        startTime != null && now != null ? (now - startTime) / 1000 : 0
      }}</view>
      <nut-row type="flex" :gutter="4">
        <nut-col
          ><nut-button shape="square" type="info" block @click="handleStart()"
            >Start!</nut-button
          ></nut-col
        >
        <nut-col
          ><nut-button shape="square" type="primary" block @click="handleStop()"
            >Stop!</nut-button
          ></nut-col
        >
      </nut-row>
    </demo-content>
  </block>
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
