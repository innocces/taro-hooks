import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Field } from '@taroify/core';

import { useRequest } from 'taro-hooks';
import { useToggle } from '@taro-hooks/ahooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 1000);
  });
}

export default () => {
  const [ready, { toggle }] = useToggle(false);

  const { data, loading, run } = useRequest(getUsername, {
    ready,
    manual: true,
  });

  return (
    <DemoContent title="Ready - 手动模式">
      <Field align="start">Ready: {JSON.stringify(ready)}</Field>
      <Field align="center">
        <Button
          loading={loading}
          color="primary"
          size="small"
          block
          onClick={toggle}
        >
          Toggle Ready
        </Button>
      </Field>
      <Field align="start">Username: {loading ? 'Loading' : data}</Field>
      <Field align="center">
        <Button
          loading={loading}
          color="primary"
          size="small"
          block
          onClick={run}
        >
          run
        </Button>
      </Field>
    </DemoContent>
  );
};
