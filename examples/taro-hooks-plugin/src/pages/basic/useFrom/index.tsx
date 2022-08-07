import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Cell } from '@taroify/core';
import { useFrom } from 'taro-hooks';

export default () => {
  const from = useFrom();

  return (
    <DemoContent>
      <Cell.Group clickable>
        <Cell title="来源页面" brief={JSON.stringify(from)}></Cell>
      </Cell.Group>
    </DemoContent>
  );
};
