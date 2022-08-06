import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Cell } from '@taroify/core';
import { usePage } from 'taro-hooks';

export default () => {
  const [stackLength, { pageInstance = {} }] = usePage();

  return (
    <DemoContent>
      <Cell.Group clickable>
        <Cell title="路由栈长度" brief={stackLength}></Cell>
        <Cell title="当前页面信息" brief={JSON.stringify(pageInstance)}></Cell>
      </Cell.Group>
    </DemoContent>
  );
};
