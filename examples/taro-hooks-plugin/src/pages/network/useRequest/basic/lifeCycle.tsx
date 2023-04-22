import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Input, Field, Progress } from '@taroify/core';

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
  const [state, setState] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [status, setStatus] = useState<string | undefined>();

  // edit username
  const { loading, run } = useRequest(editUsername, {
    manual: true,
    onBefore: (params) => {
      setProgress(0);
      // @ts-ignore
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

  return (
    <DemoContent title="Basic - 生命周期">
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
      <Progress percent={progress} />
    </DemoContent>
  );
};
