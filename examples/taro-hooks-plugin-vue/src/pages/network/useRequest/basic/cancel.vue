<template>
  <block>
    <demo-content title="Basic - 取消请求">
      <nut-input
        :disabled="request.loading"
        v-model="state"
        placeholder="Please enter username"
      >
      </nut-input>

      <nut-row :gutter="10">
        <nut-col :span="12">
          <nut-button
            :loading="request.loading"
            :block="true"
            size="small"
            type="primary"
            shape="square"
            @click="request.run(state)"
          >
            {{ request.loading ? 'Loading' : 'Edit' }}
          </nut-button>
        </nut-col>
        <nut-col :span="12">
          <nut-button
            size="small"
            type="danger"
            shape="square"
            block
            @click="request.cancel()"
            >Cancel</nut-button
          >
        </nut-col>
      </nut-row>
    </demo-content>
  </block>
</template>

<script>
import { showToast } from '@tarojs/taro';
import { useState } from '@taro-hooks/core';
import { useRequest } from 'taro-hooks';

function editUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject(new Error('Failed to modify username'));
      }
    }, 1000);
  });
}
export default {
  setup() {
    const [state, setState] = useState('');
    const request = useRequest(editUsername, {
      manual: true,
      onSuccess: (result, params) => {
        setState('');
        showToast({
          title: `The username was changed to "${params[0]}" !`,
          icon: 'success',
        });
      },
      onError: (error) => {
        showToast({ title: error.message, icon: 'error' });
      },
    });

    return {
      request,
      state,
    };
  },
};
</script>
