import React from 'react';
import { useBrightness } from 'taro-hooks';

import DemoContent from '@src/components/DemoContent';
import { Cell, Progress, Slider } from '@taroify/core';

export default () => {
  const [brightness, setBrightness] = useBrightness();

  return (
    <DemoContent>
      <Cell.Group clickable>
        <Cell
          title="当前亮度"
          brief={<Progress percent={(brightness || 0) * 100} />}
        >
          {brightness}
        </Cell>
        <Cell
          title="设置亮度"
          brief={
            <Slider
              min={0}
              max={1}
              step={0.1}
              defaultValue={brightness || 0}
              onChange={setBrightness}
            />
          }
        ></Cell>
      </Cell.Group>
    </DemoContent>
  );
};
