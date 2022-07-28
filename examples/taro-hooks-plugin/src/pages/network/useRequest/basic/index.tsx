import React from 'react';
import { View } from '@tarojs/components';
import DemoContent from '@src/components/DemoContent';

import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(Mock.mock('@name()'));
      } else {
        reject(new Error('Failed to get username'));
      }
    }, 1000);
  });
}

export default () => {
  const { data, error, loading } = useRequest(getUsername);

  return (
    <DemoContent title="Basic - 默认用法" desc="读取用户名称">
      {error ? (
        <View>{error.message}</View>
      ) : loading ? (
        <View>loading...</View>
      ) : (
        <View>Username: {data}</View>
      )}
    </DemoContent>
  );
};
