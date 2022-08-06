import React from 'react';
import { useAlertBeforeUnload } from 'taro-hooks';

import { useDidShow } from '@tarojs/taro';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const { enable, disable } = useAlertBeforeUnload();

  useDidShow(() => {
    enable('您要离开此页面吗?');
  });

  return (
    <DemoContent>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => disable()}
        shape="square"
      >
        取消离开页面弹窗
      </Button>
    </DemoContent>
  );
};
