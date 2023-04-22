import React from 'react';
import { View } from '@tarojs/components';
import DemoContent from '@src/components/DemoContent';
import { Button, Input, Field } from '@taroify/core';

import { showToast } from '@tarojs/taro';
import { useRef, useState } from '@taro-hooks/core';
import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 1000);
  });
}

function editUsername(username: string): Promise<void> {
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

export default () => {
  // store last username
  const lastRef = useRef<string>();

  const [state, setState] = useState('');

  // get username
  const { data: username, mutate } = useRequest(getUsername);

  // edit username
  const { run: edit, loading } = useRequest(editUsername, {
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
      mutate(lastRef.current);
    },
  });

  const onChange = () => {
    lastRef.current = username;
    mutate(state);
    edit(state);
  };

  return (
    <DemoContent title="Basic - 立即变更数据" desc="修改用户名称">
      <View>Username: {username}</View>
      <Field align="center">
        <Input
          onChange={(e) => setState(e.detail.value)}
          value={state}
          placeholder="Please enter username"
        />
        <Button
          disabled={loading}
          loading={loading}
          color="primary"
          size="small"
          onClick={onChange}
        >
          {loading ? 'Loading' : 'Edit'}
        </Button>
      </Field>
    </DemoContent>
  );
};
