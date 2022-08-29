import React from 'react';
import { useBluetooth } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Cell, Divider } from '@taroify/core';

export default () => {
  const [{ devices, connectedDevices, adapter }] = useBluetooth();

  return (
    <DemoContent>
      <Cell.Group title="适配器">
        {Object.entries(adapter ?? {}).map(([key, value]) => (
          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
        ))}
      </Cell.Group>
      <Divider>设备</Divider>
      {devices.map((item, key) => (
        <Cell.Group title={item.name} key={key}>
          {Object.entries(item).map(([itemKey, value]) => (
            <Cell
              key={itemKey}
              title={itemKey}
              brief={JSON.stringify(value)}
            ></Cell>
          ))}
        </Cell.Group>
      ))}
      <Divider>连接设备</Divider>
      {connectedDevices.map((item, key) => (
        <Cell.Group title={item.name} key={key}>
          {Object.entries(item).map(([itemKey, value]) => (
            <Cell
              key={itemKey}
              title={itemKey}
              brief={JSON.stringify(value)}
            ></Cell>
          ))}
        </Cell.Group>
      ))}
    </DemoContent>
  );
};
