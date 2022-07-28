<template>
  <block>
    <demo-content title="Basic - 参数管理">
      <nut-input
        :disabled="request.loading"
        v-model="state"
        placeholder="Please enter userId"
      >
        <template #button>
          <nut-button
            :loading="request.loading"
            size="small"
            type="primary"
            shape="square"
            @click="request.run(state)"
            >{{ request.loading ? 'Loading' : 'GetUserName' }}</nut-button
          >
        </template>
      </nut-input>
      <view>UserId: {{ request.params[0] }}</view>
      <view>UserName: {{ request.data }}</view>
    </demo-content>
  </block>
</template>

<script>
import { useTaroState } from '@tarojs/taro';
import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

function getUsername(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 1000);
  });
}

export default {
  setup() {
    const [state] = useTaroState('');
    const request = useRequest(getUsername, {
      defaultParams: ['1'],
    });

    return {
      request,
      state,
    };
  },
};
</script>
