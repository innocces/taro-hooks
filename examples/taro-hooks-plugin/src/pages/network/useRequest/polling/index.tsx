import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Flex, Field } from '@taroify/core';

import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  console.log('polling getUsername');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 1000);
  });
}

export default () => {
  const { data, loading, run, cancel } = useRequest(getUsername, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
  });

  return (
    <DemoContent title="轮询">
      <Field align="start">Username: {loading ? 'Loading' : data}</Field>
      <Flex align="center" gutter={10}>
        <Flex.Item span={12}>
          <Button
            loading={loading}
            color="primary"
            size="small"
            block
            onClick={run}
          >
            start
          </Button>
        </Flex.Item>
        <Flex.Item span={12}>
          <Button color="danger" size="small" block onClick={cancel}>
            stop
          </Button>
        </Flex.Item>
      </Flex>
    </DemoContent>
  );
};
