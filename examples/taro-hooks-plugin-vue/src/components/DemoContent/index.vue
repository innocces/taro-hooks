<template>
  <block>
    <nut-noticebar
      v-show="params.onlyMini === '1'"
      text="该hook仅可在小程序使用"
      :scrollable="true"
    ></nut-noticebar>
    <view class="demo-content">
      <view class="demo-content-title">{{ title || params.title }}</view>
      <view class="demo-content-desc">{{ desc }}</view>
      <view class="demo-content-wrapper">
        <slot />
      </view>
    </view>
  </block>
</template>

<script>
import { useRouter } from '@tarojs/taro';
import { useRef } from '@taro-hooks/core';
export default {
  name: 'DemoContent',
  props: {
    title: String,
    desc: String,
  },
  setup() {
    const demoRef = useRef();
    const { params = {} } = useRouter();

    function transferParams(params) {
      return Object.fromEntries(
        Object.entries(params).map(([key, value]) => [
          key,
          decodeURIComponent(value),
        ]),
      );
    }

    return {
      params: transferParams(params),
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
  font-weight: 600;
}

.demo-content-desc {
  margin: 0 auto 5px;
  font-size: 12px;
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
