import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Cell } from '@taroify/core';
import { useWindowInfo } from 'taro-hooks';

export default () => {
  const windowInfo = useWindowInfo();

  return (
    <DemoContent>
      <Cell.Group clickable>
        {Object.entries(windowInfo).map(([key, value]) => (
          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
        ))}
      </Cell.Group>
    </DemoContent>
  );
};
