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

    console.log(demoRef);

    return {
      demoRef,
    };
  },
};
</script>

<style>
.demo-content {
  padding: 17px;
  background: white;
}

.demo-content-title {
  margin: 30px auto 10px;
  font-size: 28px;
  color: #909ca4;
  font-weight: 400;
}

.demo-content-title:first-child {
  margin-top: 0;
}

.demo-content-wrapper {
  font-size: 28px;
  font-weight: 400;
}
</style>
