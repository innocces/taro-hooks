import React from 'react';
import { useAccountInfo } from 'taro-hooks';

import DemoContent from '@src/components/DemoContent';
import { Cell } from '@taroify/core';

export default () => {
  const accountInfo = useAccountInfo();

  return (
    <DemoContent>
      {Object.keys(accountInfo).length ? (
        <Cell.Group clickable>
          {Object.entries(accountInfo).map(([key, value]) => (
            <Cell key={key} title={'小程序 - ' + key}>
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
