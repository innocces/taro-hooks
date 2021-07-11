/**
 * desc: 通过设置 `options.throttleInterval` ，则进入节流模式。此时如果频繁触发 `run` ，则会以节流策略进行请求。
 */
import React, { useState, useEffect } from 'react';
import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

import { AtInput, AtList, AtListItem } from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

async function getEmail(search: string): Promise<string[]> {
  console.log(search);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock({ 'data|5': ['@email()'] }).data);
    }, 300);
  });
}

const ThrottleRequest = () => {
  const { data, loading, run } = useRequest(getEmail, {
    throttleInterval: 500,
    manual: true,
  });

  const [value, setValue] = useState<string>();

  useEffect(() => {
    value && run(value);
  }, [value, run]);

  return (
    <DocPage title="useRequest 请求" panelTitle="节流">
      <View>Enter quickly to see the effect</View>
      <AtInput
        name="email"
        value={value}
        onChange={(e) => setValue(e as string)}
        placeholder="Select Emails"
      />
      {loading ? (
        <View>loading...</View>
      ) : (
        <AtList>
          {data && data.map((i: string) => <AtListItem key={i} title={i} />)}
        </AtList>
      )}
    </DocPage>
  );
};

export default ThrottleRequest;
