import React from 'react';
import { useModal } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const show = useModal({ title: 'initial title', content: 'initial content' });

  const handleChangeOption = () => {
    show({
      title: 'taro-hooks-next',
      content: '你相信光么!',
      showCancel: false,
      confirmText: '当然!',
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
        展示带初始配置的Modal
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleChangeOption}
        shape="square"
      >
        展示新配置的Modal
      </Button>
    </DemoContent>
  );
};
