/**
 * desc: 在这个例子中， useRequest 接收了一个异步函数 `getUsername` ，在组件初次加载时， 自动触发该函数执行。同时 useRequest 会自动管理异步请求的 `loading` , `data` , `error` 等状态。
 */
import React from 'react';
import Mock from 'mockjs';
import { useRequest } from 'taro-hooks';

import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 兼容小程序写法
      resolve(Mock.mock('@name()'));
    }, 1000);
  });
}

const DefaultRequest = () => {
  const { data, error, loading } = useRequest(getUsername);
  return (
    <DocPage title="useRequest 请求" panelTitle="默认请求">
      {error ? (
        <View>failed to load</View>
      ) : loading ? (
        'loading...'
      ) : (
        <View>Username: {data}</View>
      )}
    </DocPage>
  );
};

export default DefaultRequest;
