import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Radio, Cell } from '@taroify/core';
import { useTaroEffect, showToast } from '@tarojs/taro';
import { escapeState } from '@taro-hooks/shared';
import { useNetworkType } from 'taro-hooks';
// @ts-ignore
import { NETWORKTYPE } from '@root/public/constant';

export default () => {
  const networkType = useNetworkType();

  useTaroEffect(() => {
    showToast({
      title: `当前网络类型为: ${escapeState(networkType)}`,
      icon: 'none',
      mask: true,
    });
  }, [networkType]);

  return (
    <DemoContent>
      <Radio.Group value={escapeState(networkType)}>
        <Cell.Group clickable>
          {Object.entries(NETWORKTYPE).map(([key, value]) => (
            <Cell key={key} title={'网络类型: ' + value}>
              <Radio
                disabled={value !== escapeState(networkType)}
                name={value}
              />
            </Cell>
          ))}
        </Cell.Group>
      </Radio.Group>
    </DemoContent>
  );
};
