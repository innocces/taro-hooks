import React from 'react';
import { useMenuButtonBoundingClientRect } from 'taro-hooks';

import DemoContent from '@src/components/DemoContent';
import { Cell } from '@taroify/core';

export default () => {
  const rect = useMenuButtonBoundingClientRect();

  return (
    <DemoContent>
      {Object.keys(rect).length ? (
        <Cell.Group clickable>
          {Object.entries(rect).map(([key, value]) => (
            <Cell key={key} title={'位置 - ' + key}>
              {value}
            </Cell>
          ))}
        </Cell.Group>
      ) : (
        <Cell>暂无信息</Cell>
      )}
    </DemoContent>
  );
};
