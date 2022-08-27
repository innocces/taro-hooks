import React from 'react';
import { useTaroState } from '@tarojs/taro';
import { useToast, useRecord, useAudio } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const [audioSource, setAudioSource] =
    useTaroState<Taro.RecorderManager.OnStopCallbackResult>();

  const [audioContext, { play }] = useAudio();
  const [, { start, stop }] = useRecord();

  const { show } = useToast({
    title: 'useVoice',
    duration: 500,
    mask: true,
  });

  const handleStop = async () => {
    try {
      show({ title: '正在停止', duration: 20000000 });
      const result = await stop();
      setAudioSource(result);

      show({ title: '停止录制成功' });
    } catch (e) {
      show({ title: '停止录制失败', icon: 'error' });
    }
  };

  return (
    <DemoContent>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => start()}
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
        结束录制
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        disabled={!audioSource?.tempFilePath}
        onClick={() => play(audioSource?.tempFilePath)}
        shape="square"
      >
        播放音频
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        disabled={!audioSource?.tempFilePath}
        onClick={() => audioContext?.stop?.()}
        shape="square"
      >
        停止播放音频
      </Button>
    </DemoContent>
  );
};
