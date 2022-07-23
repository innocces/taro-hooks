<template>
  <block>
    <demo-content title="屏幕聚焦重新请求">
      <view>
        Username: {{ request.loading ? 'Loading...' : request.data }}</view
      >
    </demo-content>
  </block>
</template>

<script>
import { useRequest } from 'taro-hooks';

import Mock from 'mockjs';

function getUsername() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 1000);
  });
}
export default {
  setup() {
    const request = useRequest(getUsername, {
      refreshOnWindowFocus: true,
    });

    return { request };
  },
};
</script>
