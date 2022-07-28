import React from 'react';
import { useTaroEffect, useTaroState } from '@tarojs/taro';
import { useVisible } from 'taro-hooks';
import { escapeState } from '@taro-hooks/shared';
import DemoContent from '@src/components/DemoContent';
import { View } from '@tarojs/components';
import { Steps } from '@taroify/core';
import { StarOutlined, Star } from '@taroify/icons';

type Item = { timestamp: number; status: boolean };
export default () => {
  const visible = useVisible();

  const [subscribeList, setSubscribeList] = useTaroState<Item[]>([]);

  useTaroEffect(() => {
    const currentList = escapeState(subscribeList);
    setSubscribeList([
      ...currentList,
      { timestamp: Date.now(), status: escapeState(visible) },
    ]);
  }, [visible]);

  return (
    <DemoContent>
      <Steps value={subscribeList.length - 1} direction="vertical">
        {subscribeList.map(({ timestamp, status }) => (
          <Steps.Step
            key={timestamp}
            icon={status ? <Star /> : <StarOutlined />}
          >
            <View>{timestamp}</View>
            <View>当前状态为: {String(status)}</View>
          </Steps.Step>
        ))}
      </Steps>
    </DemoContent>
  );
};
