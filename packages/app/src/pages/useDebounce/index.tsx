/**
 * title: 基础用法
 * desc: DebouncedValue 只会在输入结束 500ms 后变化。
 */
import React, { useState } from 'react';
import { AtInput } from 'taro-ui';
import { View } from '@tarojs/components';

import DocPage from '@components/DocPage';

import { useDebounce } from 'taro-hooks';

export default () => {
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <DocPage title="useDebounce 防抖值" panelTitle="useDebounce">
      <AtInput
        name="useDebounce"
        value={value}
        onChange={(e) => setValue(e as string)}
        placeholder="Typed value"
      />
      <View style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</View>
    </DocPage>
  );
};
