import React from 'react';
import { useVibrate } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const { vibrate } = useVibrate();
  const { vibrate: vibrateInterval, clear } = useVibrate(true);

  return (
    <DemoContent>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => vibrate()}
        shape="square"
      >
        短震动触感按钮
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => vibrate(true)}
        shape="square"
      >
        长震动触感按钮
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => vibrateInterval()}
        shape="square"
      >
        持续短震动触感按钮
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => vibrateInterval(true)}
        shape="square"
      >
        持续长震动触感按钮
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => clear()}
        shape="square"
      >
        关闭持续震动
      </Button>
    </DemoContent>
  );
};
