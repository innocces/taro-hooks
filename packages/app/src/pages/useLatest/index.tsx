/**
 * title: 基础用法
 * desc: useLatest 返回的永远是最新值
 */
import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';

import DocPage from '@components/DocPage';
import { useLatest } from 'taro-hooks';

export default () => {
  const [count, setCount] = useState(0);

  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <DocPage title="useLatest 使用最新值" panelTitle="useLatest">
      <View>count: {count}</View>
    </DocPage>
  );
};
