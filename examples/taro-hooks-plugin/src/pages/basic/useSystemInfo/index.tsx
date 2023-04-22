import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Cell } from '@taroify/core';
import { useSystemInfo } from 'taro-hooks';

export default () => {
  const systemInfo = useSystemInfo();

  return (
    <DemoContent>
      <Cell.Group clickable>
        {Object.entries(systemInfo!).map(([key, value]) => (
          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
        ))}
      </Cell.Group>
    </DemoContent>
  );
};
