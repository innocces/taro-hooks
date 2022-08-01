import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Cell } from '@taroify/core';
import { useDeviceInfo } from 'taro-hooks';

export default () => {
  const deviceInfo = useDeviceInfo();

  return (
    <DemoContent>
      <Cell.Group clickable>
        {Object.entries(deviceInfo).map(([key, value]) => (
          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
        ))}
      </Cell.Group>
    </DemoContent>
  );
};
