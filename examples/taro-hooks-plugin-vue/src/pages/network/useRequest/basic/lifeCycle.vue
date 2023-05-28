<template>
  <block>
    <demo-content title="Basic - 生命周期">
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
      <nut-progress
        :percentage="progress"
        :text-inside="!status?.length"
        :status="status?.length ? 'icon' : 'text'"
        :icon-name="status"
        icon-color="#a773ed"
      ></nut-progress>
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
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState();
    const request = useRequest(editUsername, {
      manual: true,
      onBefore: (params) => {
        setProgress(0);
        setStatus();
        showToast({
          icon: 'none',
          title: `Start Request: ${params[0]}`,
        });
      },
      onSuccess: (result, params) => {
        setState('');
        setStatus('heart-fill');
        showToast({
          icon: 'success',
          title: `The username was changed to "${params[0]}" !`,
        });
      },
      onError: (error) => {
        setStatus('del2');
        showToast({
          icon: 'error',
          title: error.message,
        });
      },
      onFinally: (params, result, error) => {
        setProgress(100);
      },
    });

    return { request, state, progress, status };
  },
};
</script>
