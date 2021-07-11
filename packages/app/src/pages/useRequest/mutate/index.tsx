/**
 * desc: 你可以通过 `mutate` ，直接修改 `data` 。 `mutate` 函数参数可以为 `newData` 或 `(oldData)=> newData` 。
 */
import React, { useState } from 'react';
import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

import { AtInput, AtButton } from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

import 'taro-ui/dist/style/components/icon.scss';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 1000);
  });
}

const MutateRequest = () => {
  const [state, setState] = useState('');
  const { data, mutate, loading } = useRequest(getUsername, {
    onSuccess: (result: string) => {
      setState(result);
    },
  });

  return (
    <DocPage title="useRequest 请求" panelTitle="突变">
      <View>username: {data}</View>
      <AtInput
        name="username"
        onChange={(e) => setState(e as string)}
        value={state}
        placeholder="Please enter username"
      />
      <AtButton type="primary" loading={loading} onClick={() => mutate(state)}>
        {loading ? 'loading' : 'Edit'}
      </AtButton>
    </DocPage>
  );
};

export default MutateRequest;
