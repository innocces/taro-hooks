/**
 * title: 基础用法
 * desc: ThrottledValue 每隔 500ms 变化一次。
 */
import React, { useState } from 'react';
import { AtInput } from 'taro-ui';
import { View } from '@tarojs/components';

import DocPage from '@components/DocPage';

import { useThrottle } from 'taro-hooks';

export default () => {
  const [value, setValue] = useState<string>();
  const throttledValue = useThrottle(value, { wait: 500 });

  return (
    <DocPage title="useThrottle 节流值" panelTitle="useThrottle">
      <AtInput
        name="useDebounce"
        value={value}
        onChange={(e) => setValue(e as string)}
        placeholder="Typed value"
      />
      <View style={{ marginTop: 16 }}>DebouncedValue: {throttledValue}</View>
    </DocPage>
  );
};
