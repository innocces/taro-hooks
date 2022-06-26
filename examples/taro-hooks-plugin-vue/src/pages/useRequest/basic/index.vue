<template>
  <block>
    <demo-content title="Basic - 默认用法" desc="读取用户名称">
      <view v-if="request.loading"> loading... </view>
      <template v-else>
        <view v-if="request.error"> error: {{ request.error.message }} </view>
        <view v-else> Username: {{ request.data }} </view>
      </template>
    </demo-content>
  </block>
</template>

<script>
import { useRequest } from 'taro-hooks';

import Mock from 'mockjs';

function getUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(Mock.mock('@name()'));
      } else {
        reject(new Error('Failed to get username'));
      }
    }, 1000);
  });
}
export default {
  setup() {
    const request = useRequest(getUsername);

    return { request };
  },
};
</script>
