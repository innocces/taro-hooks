/**
 * desc: 通过 `options.fetchKey` ，可以将请求进行分类，每一类的请求都有独立的状态，你可以在 `fetches` 中找到所有的请求。
 */
import React from 'react';
import { useRequest } from 'taro-hooks';
import Taro from '@tarojs/taro';

import { AtMessage, AtButton } from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

type Result = { success: boolean };

export function deleteUser(userId: string): Promise<Result> {
  console.log(userId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

const ConcurrentRequest = () => {
  const { run, fetches } = useRequest(deleteUser, {
    manual: true,
    fetchKey: (id: string) => id,
    onSuccess: (result: Result, params: string[]) => {
      if (result.success) {
        Taro.atMessage({ message: `Disabled user ${params[0]}` });
      }
    },
  });

  const users = [
    { id: '1', username: 'A' },
    { id: '2', username: 'B' },
    { id: '3', username: 'C' },
  ];

  return (
    <DocPage title="useRequest 请求" panelTitle="并行请求">
      <AtMessage />
      <View>You can click all buttons, each request has its own status.</View>
      {users.map(({ id, username }) => (
        <AtButton
          key={id}
          type="primary"
          loading={fetches[id]?.loading}
          onClick={() => run(id)}
          disabled={fetches[id]?.loading}
          customStyle={{ marginTop: '10px' }}
        >
          {fetches[id]?.loading ? 'loading' : `delete ${username}`}
        </AtButton>
      ))}
    </DocPage>
  );
};

export default ConcurrentRequest;
