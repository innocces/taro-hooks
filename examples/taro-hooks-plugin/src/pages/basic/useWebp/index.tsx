import React from 'react';
import { useWebp } from 'taro-hooks';

import DemoContent from '@src/components/DemoContent';
import { Cell, Switch } from '@taroify/core';

export default () => {
  const canIUseWebP = useWebp();

  return (
    <DemoContent>
      <Cell.Group clickable>
        <Cell title="是否可用WebP">
          <Switch disabled checked={canIUseWebP} />
        </Cell>
      </Cell.Group>
    </DemoContent>
  );
};
