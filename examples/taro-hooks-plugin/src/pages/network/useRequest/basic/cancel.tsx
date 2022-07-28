import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Input, Field, Flex } from '@taroify/core';

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

  const { loading, run, cancel } = useRequest(editUsername, {
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
    <DemoContent title="Basic - 取消请求">
      <Field align="center">
        <Input
          onChange={(e) => setState(e.detail.value)}
          value={state}
          placeholder="Please enter username"
        />
      </Field>
      <Flex gutter={10}>
        <Flex.Item span={12}>
          <Button
            disabled={loading}
            loading={loading}
            color="primary"
            size="small"
            block
            onClick={() => run(state)}
          >
            {loading ? 'Loading' : 'Edit'}
          </Button>
        </Flex.Item>
        <Flex.Item span={12}>
          <Button block color="danger" size="small" onClick={() => cancel()}>
            Cancel
          </Button>
        </Flex.Item>
      </Flex>
    </DemoContent>
  );
};
