import React from 'react';
import { useScanCode, useModal } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const { scan, cameraScan } = useScanCode();
  const show = useModal({ mask: true, title: '扫码结果', showCancel: false });

  const handleScan = async (scanType?) => {
    let content = '';
    try {
      const res = await scan({ scanType });
      content = JSON.stringify(res);
    } catch (e) {
      content = e.errMsg || e.message;
    }
    show({ content });
  };

  const handleCameraScan = async () => {
    let content = '';
    try {
      const res = await cameraScan();
      content = JSON.stringify(res);
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
        onClick={() => handleScan()}
        shape="square"
      >
        普通扫码
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleCameraScan()}
        shape="square"
      >
        相机扫码
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleScan('qrCode')}
        shape="square"
      >
        扫二维码
      </Button>
    </DemoContent>
  );
};
