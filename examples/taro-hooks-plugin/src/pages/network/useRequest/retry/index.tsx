import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Field, Input } from '@taroify/core';

import { useRequest } from 'taro-hooks';
import { showToast } from '@tarojs/taro';
import { useState } from '@taro-hooks/core';

function editUsername(username: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Failed to modify username'));
    }, 1000);
  });
}

export default () => {
  const [state, setState] = useState('');
  const { loading, run } = useRequest(editUsername, {
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

  return (
    <DemoContent title="错误重试">
      <Field align="center">
        <Input
          onChange={(e) => setState(e.detail.value)}
          value={state}
          placeholder="Please enter username"
        />
        <Button
          loading={loading}
          color="primary"
          size="small"
          onClick={() => run(state)}
        >
          {loading ? 'Loading' : 'Edit'}
        </Button>
      </Field>
    </DemoContent>
  );
};
