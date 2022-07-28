<template>
  <view class="demo-content">
    <view class="demo-content-title">{{ title || params.title }}</view>
    <view class="demo-content-desc">{{ desc }}</view>
    <view class="demo-content-wrapper">
      <slot />
    </view>
  </view>
</template>

<script>
import { useTaroRef, useRouter } from '@tarojs/taro';
export default {
  name: 'DemoContent',
  props: {
    title: String,
    desc: String,
  },
  setup() {
    const demoRef = useTaroRef();
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
