/**
 * title: 基础用法
 * desc: 频繁调用 run，但只会在所有点击完成 500ms 后执行一次相关函数
 */
import React, { useState } from 'react';
import { AtButton } from 'taro-ui';
import { View } from '@tarojs/components';

import DocPage from '@components/DocPage';

import { useDebounceFn } from 'taro-hooks';

export default () => {
  const [value, setValue] = useState(0);
  const { run } = useDebounceFn(
    () => {
      setValue(value + 1);
    },
    {
      wait: 500,
    },
  );

  return (
    <DocPage title="useDebounceFn 防抖函数" panelTitle="useDebounceFn">
      <View style={{ marginBottom: 16 }}>Clicked count: {value}</View>
      <AtButton onClick={run}>Click fast!</AtButton>
    </DocPage>
  );
};
