import React from 'react';
import { useOnline } from 'taro-hooks';

import DemoContent from '@src/components/DemoContent';
import { Cell, Switch } from '@taroify/core';

export default () => {
  const online = useOnline();

  return (
    <DemoContent>
      <Cell.Group clickable>
        <Cell title="当前网络状态">
          <Switch disabled checked={online} />
        </Cell>
      </Cell.Group>
    </DemoContent>
  );
};
