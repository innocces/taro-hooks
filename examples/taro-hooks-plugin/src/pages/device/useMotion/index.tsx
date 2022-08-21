import React from 'react';
import { useModal, useMotion } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button, Cell } from '@taroify/core';

export default () => {
  const [motion, { start, stop, add, off }] = useMotion(true);

  console.log(motion);

  const show = useModal({
    title: 'useMotion',
    showCancel: false,
    mask: true,
  });

  const customListen = (result) => {
    show({
      content: JSON.stringify(result),
    });
    off(customListen);
  };

  const handleListen = async () => {
    try {
      await add(customListen);
    } catch (e) {
      show({ content: '监听失败' });
    }
  };

  return (
    <DemoContent>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleListen()}
        shape="square"
      >
        增加一次监听并取消
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => stop()}
        shape="square"
      >
        停止所有
      </Button>
      <Cell.Group title="方向信息">
        {Object.entries(motion).map(([key, value]) => (
          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
        ))}
      </Cell.Group>
    </DemoContent>
  );
};
