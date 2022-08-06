import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { View } from '@tarojs/components';
import { Cell } from '@taroify/core';
import { useClipboardData } from 'taro-hooks';

const SETTYPE = {
  number: 1,
  boolean: true,
  object: { name: 'taro-hooks' },
  function: function taro() {},
  string: 'taro-hooks',
  undefined: undefined,
  null: null,
  date: new Date(),
};

export default () => {
  const [clipboardData, { set, get }] = useClipboardData();

  const handleGet = async () => {
    const clipboard = await get();
    console.log('当前剪贴板内容:', clipboardData, clipboard);
  };

  return (
    <DemoContent>
      <View>请打开F12查看console</View>
      <Cell.Group clickable>
        {Object.entries(SETTYPE).map(([key, value]) => (
          <Cell
            key={key}
            title={key}
            brief={JSON.stringify(value)}
            onClick={() => set(value)}
          ></Cell>
        ))}
      </Cell.Group>
      <Button block onClick={handleGet}>
        打印当前剪贴板
      </Button>
    </DemoContent>
  );
};
