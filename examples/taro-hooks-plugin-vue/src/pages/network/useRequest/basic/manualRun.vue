<template>
  <block>
    <demo-content
      title="Basic - 手动触发"
      desc="在这个例子中，我们通过 run(username) 来修改用户名，通过 onSuccess 和 onError 来处理成功和失败"
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
            @click="request.run(state)"
            >{{ request.loading ? 'Loading' : 'Edit' }}</nut-button
          >
        </template>
      </nut-input>
    </demo-content>
  </block>
</template>

<script>
import { useTaroState, showToast } from '@tarojs/taro';
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
    const [state, setState] = useTaroState('');
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
