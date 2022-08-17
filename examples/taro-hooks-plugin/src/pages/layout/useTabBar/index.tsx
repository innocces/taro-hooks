import React from 'react';
import { useTabBar } from 'taro-hooks';
import Mock from 'mockjs';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const { toggleRedDot, toggleBadge, setStyle, setItem, toggle } = useTabBar();

  const handleSetStyle = () => {
    setStyle({
      color: Mock.Random.color(),
      selectedColor: Mock.Random.color(),
      backgroundColor: Mock.Random.color(),
    });
  };

  const handleSetItem = () => {
    setItem({ text: Mock.Random.city() }, Mock.Random.pick([0, 1]));
  };

  const handleToggleRedDot = () => {
    toggleRedDot(Mock.Random.pick([0, 1]));
  };

  const handleToggleBadge = () => {
    toggleBadge(
      Mock.Random.pick([0, 1]),
      Mock.Random.pick(['serro', undefined]),
    );
  };

  return (
    <DemoContent>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => toggle()}
        shape="square"
      >
        切换TabBar显示/隐藏
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => toggle(true)}
        shape="square"
      >
        切换TabBar显示/隐藏(动画)
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleToggleRedDot()}
        shape="square"
      >
        随机TabBar 红点 显示/隐藏
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleToggleBadge()}
        shape="square"
      >
        随机TabBar badge 显示/隐藏
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleSetItem()}
        shape="square"
      >
        随机设置TabBar Item
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleSetStyle()}
        shape="square"
      >
        设置TabBar样式
      </Button>
    </DemoContent>
  );
};
