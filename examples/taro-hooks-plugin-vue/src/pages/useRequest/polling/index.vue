<template>
  <block>
    <demo-content title="轮询">
      <view>Username: {{ request.loading ? 'Loading...' : request.data }}</view>
      <nut-row justify="space-between">
        <nut-col :span="11">
          <nut-button
            :loading="request.loading"
            size="small"
            type="primary"
            shape="square"
            block
            @click="request.run()"
          >
            run
          </nut-button>
        </nut-col>
        <nut-col :span="11">
          <nut-button
            :loading="request.loading"
            size="small"
            type="danger"
            shape="square"
            block
            @click="request.cancel()"
          >
            stop
          </nut-button>
        </nut-col>
      </nut-row>
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
      pollingInterval: 1000,
      pollingWhenHidden: false,
    });

    return { request };
  },
};
</script>
