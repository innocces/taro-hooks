import React from 'react';
import { useNavigationBar } from 'taro-hooks';
import Mock from 'mockjs';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const { setTitle, hideButton, toggleLoading, setColor } = useNavigationBar({
    title: 'Taro-Hooks',
  });

  const handleSetTitle = () => {
    setTitle(Mock.Random.name());
  };

  const handleSetColor = () => {
    setColor({
      backgroundColor: Mock.Random.color(),
      frontColor: '#ffffff',
    });
  };

  return (
    <DemoContent>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => toggleLoading()}
        shape="square"
      >
        切换导航栏Loading状态
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleSetTitle}
        shape="square"
      >
        设置导航栏标题
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleSetColor}
        shape="square"
      >
        设置导航栏颜色
      </Button>
      <Button block color="primary" onClick={() => hideButton()} shape="square">
        隐藏返回首页按钮
      </Button>
    </DemoContent>
  );
};
