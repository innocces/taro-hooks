import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Input, Field } from '@taroify/core';

import { showToast } from '@tarojs/taro';
import { useState } from '@taro-hooks/core';
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
  const [state, setState] = useState('');

  const { loading, runAsync } = useRequest(editUsername, {
    manual: true,
  });

  const onClick = async () => {
    try {
      await runAsync(state);
      setState('');
      showToast({
        title: `The username was changed to "${state}" !`,
        icon: 'success',
      });
    } catch (error) {
      showToast({ title: error.message, icon: 'error' });
    }
  };

  return (
    <DemoContent
      title="Basic - 手动触发"
      desc="在这个例子中，我们通过 runAsync(username) 来修改用户名，此时必须通过 catch 来自行处理异常。"
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
          onClick={onClick}
        >
          {loading ? 'Loading' : 'Edit'}
        </Button>
      </Field>
    </DemoContent>
  );
};
