/**
 * title: 基础用法
 * desc: 在组件卸载时，执行函数。
 */
import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { AtMessage, AtButton } from 'taro-ui';
import Taro from '@tarojs/taro';

import DocPage from '@components/DocPage';
import { useUnmount } from 'taro-hooks';

const MyComponent = () => {
  useUnmount(() => {
    Taro.atMessage({
      type: 'info',
      message: 'unmount',
    });
  });

  return <View className="gap">Hello World!</View>;
};

export default () => {
  const [state, toggle] = useState(true);

  return (
    <DocPage title="useUnmount 组件卸载时执行" panelTitle="useUnmount">
      <AtMessage />
      <AtButton type="primary" onClick={() => toggle(!state)}>
        {state ? 'unmount' : 'mount'}
      </AtButton>
      {state && <MyComponent />}
    </DocPage>
  );
};
