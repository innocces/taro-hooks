import React, { useCallback, useState } from 'react';
import { AtNoticebar, AtButton } from 'taro-ui';
import { Video } from '@tarojs/components';

import DocPage from '@components/DocPage';

import { useVideo, useEnv, useToast } from 'taro-hooks';
import { chooseVideo, ENV_TYPE, useReady } from '@tarojs/taro';

export default () => {
  const env = useEnv();
  const [show] = useToast({ mask: true });
  const [videoContext, { choose, save, create }] = useVideo({
    camera: 'back',
    sourceType: ['camera', 'album'],
  });
  const [videoResult, setVideoResult] =
    useState<chooseVideo.SuccessCallbackResult>();

  useReady(() => {
    if (env && env !== ENV_TYPE.WEB) {
      create('useVideoContext');
    }
  });

  const handleChooseVideo = useCallback(() => {
    choose({ maxDuration: 10 }).then(setVideoResult);
  }, [choose]);

  const handleSaveVideo = useCallback(
    (filePath) => {
      save(filePath)
        .then(() => {
          show({
            title: '保存成功',
          });
        })
        .catch(() => {
          show({
            icon: 'none',
            title: '保存失败',
          });
        });
    },
    [save, show],
  );

  return (
    <>
      <AtNoticebar marquee>当前hook不支持h5, 请移步小程序体验</AtNoticebar>
      <DocPage title="useVideo 视频" panelTitle="useVideo">
        <Video
          id="useVideoContext"
          className="demo"
          src={videoResult?.tempFilePath || ''}
        />
        <AtButton
          disabled={env === ENV_TYPE.WEB}
          className="gap"
          onClick={handleChooseVideo}
        >
          选择视频
        </AtButton>
        <AtButton
          disabled={!videoContext || !videoResult?.tempFilePath}
          onClick={() => videoContext.play()}
        >
          播放视频
        </AtButton>
        <AtButton
          className="gap"
          disabled={!videoContext || !videoResult?.tempFilePath}
          onClick={() => videoContext.pause()}
        >
          暂停视频
        </AtButton>
        <AtButton
          disabled={env === ENV_TYPE.WEB || !videoResult?.tempFilePath}
          onClick={() => handleSaveVideo(videoResult?.tempFilePath)}
        >
          保存视频
        </AtButton>
      </DocPage>
    </>
  );
};
