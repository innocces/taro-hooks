import React from 'react';
import { useLoading } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const { show, hide } = useLoading({ title: 'initial title' });

  const handleChangeOption = () => {
    show({
      title: '点击隐藏按钮进行隐藏',
    });
  };

  return (
    <DemoContent>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => show()}
        shape="square"
      >
        展示带初始配置的Loading
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleChangeOption}
        shape="square"
      >
        展示新配置的Loading
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={hide}
        shape="square"
      >
        隐藏新配置的Loading
      </Button>
    </DemoContent>
  );
};
