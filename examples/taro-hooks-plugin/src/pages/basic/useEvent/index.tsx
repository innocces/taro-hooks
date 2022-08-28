import React from 'react';
import { useEvent, useModal } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const show = useModal({ title: 'useEvent', showCancel: false, mask: true });
  const { set, setOnce, off, clear, trigger } = useEvent('useEvent');

  const eventName = 'event';
  const eventOneceName = 'event-once';

  const listener = (params) => {
    show({ content: `事件触发成功: ${String(params)}` });
  };

  return (
    <DemoContent>
      <Button
        className="gap"
        block
        color="primary"
        onClick={() => set(eventName, listener)}
        shape="square"
      >
        设置监听
      </Button>
      <Button
        className="gap"
        block
        color="primary"
        onClick={() => trigger(eventName)}
        shape="square"
      >
        触发监听
      </Button>
      <Button
        className="gap"
        block
        color="primary"
        onClick={() => setOnce(eventOneceName, listener)}
        shape="square"
      >
        设置监听(仅触发一次)
      </Button>
      <Button
        className="gap"
        block
        color="primary"
        onClick={() => trigger(eventOneceName, 'once')}
        shape="square"
      >
        触发监听(仅触发一次)
      </Button>
      <Button
        className="gap"
        block
        color="primary"
        onClick={() => off(eventName)}
        shape="square"
      >
        移除监听
      </Button>
      <Button
        className="gap"
        block
        color="primary"
        onClick={() => clear()}
        shape="square"
      >
        清除所有监听
      </Button>
    </DemoContent>
  );
};
