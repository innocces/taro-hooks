<template>
  <block>
    <demo-content title="Ready - 手动模式">
      <view>Ready: {{ JSON.stringify(ready) }}</view>
      <nut-row justify="center">
        <nut-button
          :loading="request.loading"
          size="small"
          type="primary"
          shape="square"
          block
          @click="action.toggle()"
        >
          Toggle Ready
        </nut-button>
      </nut-row>
      <view>Username: {{ request.loading ? 'Loading...' : request.data }}</view>
      <nut-row justify="center">
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
      </nut-row>
    </demo-content>
  </block>
</template>

<script>
import { useRequest } from 'taro-hooks';
import { useToggle } from '@taro-hooks/ahooks';

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
    const [ready, action] = useToggle(false);

    const request = useRequest(getUsername, {
      ready,
      manual: true,
    });

    return { request, ready, action };
  },
};
</script>
