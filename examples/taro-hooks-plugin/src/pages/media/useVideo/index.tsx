import React from 'react';
import { useTaroState, ENV_TYPE } from '@tarojs/taro';
import { Video } from '@tarojs/components';
import { escapeState } from '@taro-hooks/shared';
import { useToast, useVideo, useEnv } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button, Cell } from '@taroify/core';

import './index.less';

export default () => {
  const videoId = 'demo-video-id';
  const env = useEnv();
  const [videoInfo, setVideoInfo] =
    useTaroState<Taro.chooseVideo.SuccessCallbackResult>();
  const [videoSummary, setVideoSummary] =
    useTaroState<Taro.getVideoInfo.SuccessCallbackResult>();

  const [videoContext, { choose, chooseMedia, open, save, compress, get }] =
    useVideo(videoId, {
      camera: 'back',
      sourceType: ['camera', 'album'],
    });

  const { show } = useToast({
    title: 'initial title',
    duration: 500,
    mask: true,
  });

  const handleChoose = async () => {
    try {
      const result = await choose();
      setVideoInfo(result);

      if (env === ENV_TYPE.WEAPP) {
        const summary = await get(result.tempFilePath);
        setVideoSummary(summary);
      }
    } catch (e) {
      show({ title: '获取视频或信息失败', icon: 'error' });
    }
  };

  const handleVideoAction = (action) => {
    console.log(videoContext);
    escapeState(videoContext)?.[action]?.();
  };

  const handleCompress = async () => {
    try {
      const { size } = await compress({ src: videoInfo?.tempFilePath });
      show({ title: `压缩: ${size}/${videoInfo?.size}` });
    } catch (e) {
      show({ title: '压缩失败', icon: 'error' });
    }
  };

  return (
    <DemoContent>
      <Video id={videoId} src={videoInfo?.tempFilePath ?? ''} />
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleChoose()}
        shape="square"
      >
        选择视频
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleVideoAction('play')}
        shape="square"
      >
        播放视频
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleVideoAction('pause')}
        shape="square"
      >
        暂停视频
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleCompress()}
        shape="square"
      >
        压缩视频(小程序独有)
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => open(videoInfo?.tempFilePath)}
        shape="square"
      >
        打开视频编辑器(小程序独有)
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => save(videoInfo?.tempFilePath)}
        shape="square"
      >
        保存视频
      </Button>
      <Cell.Group title="视频信息">
        {Object.entries(videoSummary ?? {}).map(([key, value]) => (
          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
        ))}
      </Cell.Group>
    </DemoContent>
  );
};
