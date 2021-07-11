/**
 * desc: 只有当 `options.ready` 变为 true 时, 才会发起请求，基于该特性可以实现串行请求，依赖请求等。
 */
import React from 'react';
import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

import { View } from '@tarojs/components';
import { AtActivityIndicator } from 'taro-ui';
import DocPage from '@components/DocPage';

import 'taro-ui/dist/style/components/loading.scss';

function getUsername(): Promise<string> {
  const userInfo = Mock.mock('@name()');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userInfo);
    }, 1000);
  });
}

const RefreshOnWindowFocusRequest = () => {
  const { data, loading } = useRequest(getUsername, {
    refreshOnWindowFocus: true,
  });

  return (
    <DocPage title="useRequest 请求" panelTitle="屏幕聚焦重新请求">
      <View>
        You can try to click elsewhere and click back to try. (Or hide the page
        and show it again)
      </View>
      <AtActivityIndicator
        mode="center"
        isOpened={loading}
      ></AtActivityIndicator>
      <View>Username: {data}</View>
    </DocPage>
  );
};

export default RefreshOnWindowFocusRequest;
