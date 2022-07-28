<template>
  <block>
    <demo-content title="Basic - 刷新（重复上一次请求）" desc="刷新用户名称">
      <view v-if="request.loading"> loading... </view>
      <template v-else>
        <view v-if="request.error"> error: {{ request.error.message }} </view>
        <view v-else> Username: {{ request.data }} </view>
      </template>
      <nut-button
        :loading="request.loading"
        size="small"
        type="primary"
        shape="square"
        @click="request.refresh()"
        >{{ request.loading ? 'Loading' : 'Refresh' }}</nut-button
      >
    </demo-content>
  </block>
</template>

<script>
import { useTaroEffect } from '@tarojs/taro';
import { useRequest } from 'taro-hooks';
import { escapeState } from '@taro-hooks/shared';

import Mock from 'mockjs';

function getUsername(id) {
  console.log('use-request-refresh-id', id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 1000);
  });
}
export default {
  setup() {
    const request = useRequest((id) => getUsername(id), {
      manual: true,
    });

    useTaroEffect(() => {
      escapeState(request).run(1);
    }, []);

    return { request };
  },
};
</script>
