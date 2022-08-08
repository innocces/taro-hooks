import React from 'react';
import { useTopBarText, useModal } from 'taro-hooks';
import Mock from 'mockjs';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const set = useTopBarText('taro-hooks');
  const show = useModal({ mask: true, title: '设置结果', showCancel: false });

  const handleClick = async () => {
    let content = '';
    try {
      const { errMsg } = await set(Mock.Random.name());
      content = errMsg;
    } catch (e) {
      content = e.errMsg || e.message;
    }
    show({ content });
  };

  return (
    <DemoContent>
      <Button block color="primary" onClick={handleClick} shape="square">
        设置置顶栏文字内容
      </Button>
    </DemoContent>
  );
};
