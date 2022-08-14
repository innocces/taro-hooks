import React from 'react';
import { useWeRun, useModal, useLogin } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const { login } = useLogin();
  const { get, share } = useWeRun();
  const show = useModal({ mask: true, title: '设置结果', showCancel: false });

  const handleGet = async () => {
    let content = '';
    try {
      await login(true);
      const result = await get();
      content = JSON.stringify(result);
    } catch (e) {
      content = e.errMsg || e.message;
    }
    show({ content });
  };

  const handleShare = async () => {
    let content = '';
    try {
      await login(true);
      const recordList = [
        { typeId: 1000, time: 200, calorie: 100 },
        { typeId: 3000, time: 300, calorie: 1000, distance: 1000 },
        { typeId: 4000, calorie: 1000, number: 100 },
      ];
      const result = await share(recordList);
      content = JSON.stringify(result);
    } catch (e) {
      content = e.errMsg || e.message;
    }
    show({ content });
  };

  return (
    <DemoContent>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleGet}
        shape="square"
      >
        获取微信运动步数
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleShare}
        shape="square"
      >
        分享数据至微信运动
      </Button>
    </DemoContent>
  );
};
