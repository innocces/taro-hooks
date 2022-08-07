import React from 'react';
import { useLaunchOptions } from 'taro-hooks';

import DemoContent from '@src/components/DemoContent';
import { Cell } from '@taroify/core';

export default () => {
  const launchOptions = useLaunchOptions();

  return (
    <DemoContent>
      {Object.keys(launchOptions).length ? (
        <Cell.Group clickable>
          {Object.entries(launchOptions).map(([key, value]) => (
            <Cell key={key} title={key}>
              {JSON.stringify(value)}
            </Cell>
          ))}
        </Cell.Group>
      ) : (
        <Cell>暂无信息</Cell>
      )}
    </DemoContent>
  );
};
