import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Input, Field } from '@taroify/core';

import { showToast, useTaroState } from '@tarojs/taro';
import { useRequest } from 'taro-hooks';

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
  const [state, setState] = useTaroState('');

  const { loading, run } = useRequest(editUsername, {
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

  return (
    <DemoContent
      title="Basic - 手动触发"
      desc="在这个例子中，我们通过 run(username) 来修改用户名，通过 onSuccess 和 onError 来处理成功和失败"
    >
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
          onClick={() => run(state)}
        >
          {loading ? 'Loading' : 'Edit'}
        </Button>
      </Field>
    </DemoContent>
  );
};
