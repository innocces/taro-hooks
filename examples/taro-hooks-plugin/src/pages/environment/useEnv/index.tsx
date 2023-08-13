import React from 'react';
import { ENV_TYPE, showToast } from '@tarojs/taro';
import { useEffect } from '@taro-hooks/core';

import DemoContent from '@src/components/DemoContent';
import { Radio, Cell } from '@taroify/core';

export default () => {
  const env = useEnv();

  useEffect(() => {
    showToast({
      title: `当前环境: ${env}`,
      icon: 'none',
      mask: true,
    });
  }, []);

  return (
    <DemoContent>
      <Radio.Group value={env}>
        <Cell.Group clickable>
          {Object.entries(ENV_TYPE).map(([key, value]) => (
            <Cell key={key} title={'环境值: ' + value}>
              <Radio disabled={value !== env} name={value} />
            </Cell>
          ))}
        </Cell.Group>
      </Radio.Group>
    </DemoContent>
  );
};
