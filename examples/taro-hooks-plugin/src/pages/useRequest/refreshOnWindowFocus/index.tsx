import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Field } from '@taroify/core';

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
  const { data, loading } = useRequest(getUsername, {
    refreshOnWindowFocus: true,
  });

  return (
    <DemoContent title="屏幕聚焦重新请求">
      <Field align="start">Username: {loading ? 'Loading' : data}</Field>
    </DemoContent>
  );
};
