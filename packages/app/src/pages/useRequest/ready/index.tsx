/**
 * desc: 只有当 `options.ready` 变为 true 时, 才会发起请求，基于该特性可以实现串行请求，依赖请求等。
 */
import React from 'react';
import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

function getUserId(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1011);
    }, 1000);
  });
}

function getUsername(id: number): Promise<string> {
  console.log('user id:', id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 1000);
  });
}

const ReadyRequest = () => {
  const userIdRequest = useRequest(getUserId);

  const usernameRequest = useRequest(() => getUsername(userIdRequest.data), {
    ready: !!userIdRequest.data,
  });

  return (
    <DocPage title="useRequest 请求" panelTitle="依赖请求">
      <View>
        UserId: {userIdRequest.loading ? 'loading' : userIdRequest.data}
      </View>
      <View>
        Username: {usernameRequest.loading ? 'loading' : usernameRequest.data}
      </View>
    </DocPage>
  );
};

export default ReadyRequest;
