<template>
  <block>
    <demo-content
      title="Basic - 手动触发"
      desc="在这个例子中，我们通过 runAsync(username) 来修改用户名，此时必须通过 catch 来自行处理异常。"
    >
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
            @click="handleRunAsync()"
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
import { escapeState } from '@taro-hooks/shared';

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
    });

    const handleRunAsync = async () => {
      const { runAsync } = escapeState(request);
      const username = escapeState(state);
      try {
        await runAsync(username);
        setState('');
        showToast({
          title: `The username was changed to "${username}" !`,
          icon: 'success',
        });
      } catch (error) {
        showToast({ title: error.message, icon: 'error' });
      }
    };

    return {
      request,
      state,
      handleRunAsync,
    };
  },
};
</script>
