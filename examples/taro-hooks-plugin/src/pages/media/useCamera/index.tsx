import React from 'react';
import { Camera } from '@tarojs/components';
import { useToast, useCamera, useImage } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

import './index.less';

export default () => {
  const [cameraContext, { zoom, start, stop, take }] = useCamera();
  const [, { preview, previewMedia }] = useImage();

  const { show } = useToast({
    title: 'useCamera',
    duration: 500,
    mask: true,
  });

  const handleStart = async () => {
    try {
      await start();
      show({ title: '开启录制成功' });
    } catch (e) {
      show({ title: '开启录制失败', icon: 'error' });
    }
  };

  const handleStop = async () => {
    try {
      const video = await stop();
      previewMedia({ sources: [{ url: video.tempVideoPath }] });
      show({ title: '关闭录制成功' });
    } catch (e) {
      show({ title: '关闭录制失败', icon: 'error' });
    }
  };

  const handleTake = async () => {
    try {
      const { tempImagePath } = await take();
      preview({ urls: [tempImagePath] });
      show({ title: '拍摄成功' });
    } catch (e) {
      show({ title: '拍摄失败', icon: 'error' });
    }
  };

  return (
    <DemoContent>
      <Camera id="demo-camera-id" />
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleStart()}
        shape="square"
      >
        开始录制
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleStop()}
        shape="square"
      >
        停止录制
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleTake()}
        shape="square"
      >
        拍照
      </Button>
    </DemoContent>
  );
};
