import React from 'react';
import { useBattery } from 'taro-hooks';

import DemoContent from '@src/components/DemoContent';
import { Cell, Progress, Switch } from '@taroify/core';

export default () => {
  const batteryInfo = useBattery();

  return (
    <DemoContent>
      <Cell.Group clickable>
        <Cell title="充电与否">
          <Switch disabled checked={batteryInfo?.isCharging} />
        </Cell>
        <Cell title="电量" brief={<Progress percent={batteryInfo?.level} />}>
          {batteryInfo?.level}
        </Cell>
      </Cell.Group>
    </DemoContent>
  );
};
