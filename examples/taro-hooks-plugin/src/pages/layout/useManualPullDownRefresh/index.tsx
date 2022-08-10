import React from 'react';
import { useManualPullDownRefresh, useBackground } from 'taro-hooks';
import Mock from 'mockjs';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const [start, stop] = useManualPullDownRefresh();
  useBackground({ textStyle: 'dark', backgroundColor: Mock.Random.color() });

  return (
    <DemoContent>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => start()}
        shape="square"
      >
        开始下拉刷新
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={stop}
        shape="square"
      >
        结束下拉刷新
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => start(2000)}
        shape="square"
      >
        开始下拉刷新2S后停止
      </Button>
    </DemoContent>
  );
};
