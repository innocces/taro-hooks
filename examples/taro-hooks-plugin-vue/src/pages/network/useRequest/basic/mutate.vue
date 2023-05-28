<template>
  <block>
    <demo-content title="Basic - 立即变更数据" desc="修改用户名称">
      <view>Username: {{ getUserNameRequest.data }}</view>
      <nut-input
        :disabled="editUserNameRequest.loading"
        v-model="state"
        placeholder="Please enter username"
      >
        <template #button>
          <nut-button
            :loading="editUserNameRequest.loading"
            size="small"
            type="primary"
            shape="square"
            @click="onChange()"
            >{{ editUserNameRequest.loading ? 'Loading' : 'Edit' }}</nut-button
          >
        </template>
      </nut-input>
    </demo-content>
  </block>
</template>

<script>
import { showToast } from '@tarojs/taro';
import { useRef, useState } from '@taro-hooks/core';
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
    // store last username
    const lastRef = useRef();

    const [state, setState] = useState('');

    // get username
    const getUserNameRequest = useRequest(getUsername);

    // edit username
    const editUserNameRequest = useRequest(editUsername, {
      manual: true,
      onSuccess: (result, params) => {
        setState('');
        showToast({
          icon: 'success',
          title: `The username was changed to "${params[0]}" !`,
        });
      },
      onError: (error) => {
        showToast({
          icon: 'error',
          title: error.message,
        });
        const { mutate } = escapeState(getUserNameRequest);
        mutate(lastRef.current);
      },
    });

    const onChange = () => {
      const { data, mutate } = escapeState(getUserNameRequest);
      const { run } = escapeState(editUserNameRequest);
      const username = escapeState(state);
      lastRef.current = data;
      mutate(username);
      run(username);
    };

    return { getUserNameRequest, editUserNameRequest, state, onChange };
  },
};
</script>
