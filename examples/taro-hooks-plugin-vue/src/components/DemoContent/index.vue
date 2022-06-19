<template>
  <view class="demo-content">
    <view class="demo-content-title">{{ title }}</view>
    <view class="demo-content-wrapper">
      <slot />
    </view>
  </view>
</template>

<script>
import { useTaroRef } from '@tarojs/taro';
export default {
  name: 'DemoContent',
  props: {
    title: String,
  },
  setup() {
    const demoRef = useTaroRef();

    console.log(demoRef.current);

    return {
      demoRef,
    };
  },
};
</script>

<style>
.demo-content {
  padding: 8px;
  background: white;
}

.demo-content-title {
  margin: 15px auto 5px;
  font-size: 14px;
  color: #909ca4;
  font-weight: 400;
}

.demo-content-title:first-child {
  margin-top: 0;
}

.demo-content-wrapper {
  font-size: 14px;
  font-weight: 400;
}
</style>
