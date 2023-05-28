<template>
  <block>
    <demo-content title="错误重试">
      <nut-input
        :disabled="request.loading"
        v-model="state"
        placeholder="Please enter username"
      >
        <template #button>
          <nut-button
            :loading="request.loading"
            size="small"
            type="primary"
            shape="square"
            @click="request.run(state)"
            >{{ request.loading ? 'Loading' : 'Edit' }}</nut-button
          >
        </template>
      </nut-input>
    </demo-content>
  </block>
</template>

<script>
import { showToast } from '@tarojs/taro';
import { useState } from '@taro-hooks/core';
import { useRequest } from 'taro-hooks';

function editUsername(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Failed to modify username'));
    }, 1000);
  });
}

export default {
  setup() {
    const [state] = useState('');
    const request = useRequest(editUsername, {
      retryCount: 3,
      manual: true,
      onError: (error) => {
        showToast({
          title: error.message,
          icon: 'error',
          mask: true,
        });
      },
    });

    return {
      request,
      state,
    };
  },
};
</script>
