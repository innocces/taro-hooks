/**
 * title: 基础用法
 * desc: 频繁调用 run，但只会每隔 500ms 执行一次相关函数。
 */
import React, { useState } from 'react';
import { AtButton } from 'taro-ui';
import { View } from '@tarojs/components';

import DocPage from '@components/DocPage';

import { useThrottleFn } from 'taro-hooks';

export default () => {
  const [value, setValue] = useState(0);
  const { run } = useThrottleFn(
    () => {
      setValue(value + 1);
    },
    { wait: 500 },
  );

  return (
    <DocPage title="useThrottleFn 节流函数" panelTitle="useThrottleFn">
      <View style={{ marginBottom: 16 }}>Clicked count: {value}</View>
      <AtButton onClick={run}>Click fast!</AtButton>
    </DocPage>
  );
};
