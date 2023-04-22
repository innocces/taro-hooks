import React from 'react';
import { View } from '@tarojs/components';
import DemoContent from '@src/components/DemoContent';
import { Button, Input, Field } from '@taroify/core';

import { useState } from '@taro-hooks/core';
import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 1000);
  });
}

export default () => {
  const [state, setState] = useState('');

  // get username
  const {
    data: username,
    run,
    params,
    loading,
  } = useRequest(getUsername, {
    defaultParams: ['1'],
  });

  const onChange = () => {
    run(state);
  };

  return (
    <DemoContent title="Basic - 参数管理">
      <Field align="center">
        <Input
          onChange={(e) => setState(e.detail.value)}
          value={state}
          placeholder="Please enter userId"
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
      <View>UserId: {params?.[0]}</View>
      <View>Username: {username}</View>
    </DemoContent>
  );
};
