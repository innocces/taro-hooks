import React from 'react';
import { useAccountInfo } from 'taro-hooks';

import DemoContent from '@src/components/DemoContent';
import { Cell } from '@taroify/core';

export default () => {
  const accountInfo = useAccountInfo();

  return (
    <DemoContent>
      {Object.keys(accountInfo).length ? (
        Object.entries(accountInfo).map(([key, value]) => {
          return (
            <Cell.Group clickable title={key} key={key}>
              {typeof value === 'string' ? (
                <Cell key={key} title={'小程序 - ' + key}>
                  {value}
                </Cell>
              ) : (
                Object.entries(value as {}).map(([subKey, subValue]) => (
                  <Cell key={subKey} title={'小程序 - ' + subKey}>
                    {subValue}
                  </Cell>
                ))
              )}
            </Cell.Group>
          );
        })
      ) : (
        <Cell>暂无信息</Cell>
      )}
    </DemoContent>
  );
};
