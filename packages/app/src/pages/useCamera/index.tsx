import React, { useCallback, useEffect, useState } from 'react';
import {
  AtNoticebar,
  AtButton,
  AtList,
  AtListItem,
  AtFloatLayout,
  AtTag,
} from 'taro-ui';
import { Camera, Video, CoverView } from '@tarojs/components';

import DocPage from '@components/DocPage';

import { useCamera, useEnv, useToast, useImage } from 'taro-hooks';
import { ENV_TYPE, CameraContext } from '@tarojs/taro';

import './index.less';

export default () => {
  const env = useEnv();
  const [show] = useToast({ mask: true });
  const [
    cameraContext,
    { create, startRecord, stopRecord, takePhoto, onCameraFrame },
  ] = useCamera();
  const [_, { preview }] = useImage();
  const [isRecord, changeIsRecord] = useState<boolean>(false);
  const [cameraContextFrame, setCameraContextFrame] =
    useState<CameraContext.OnCameraFrameCallbackResult>();
  const [recordUrl, setRecordUrl] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleTimeoutCallback = useCallback(
    (info: CameraContext.StartRecordTimeoutCallbackResult) => {
      show({ title: '录制停止' });
      setRecordUrl(info.tempVideoPath);
      setOpen(true);
      changeIsRecord(false);
    },
    [show],
  );

  const handleStartRecord = useCallback(() => {
    startRecord(handleTimeoutCallback).then(() => {
      changeIsRecord(true);
    });
  }, [startRecord, handleTimeoutCallback]);

  const handleStopRecord = useCallback(() => {
    stopRecord().then(handleTimeoutCallback);
  }, [stopRecord, handleTimeoutCallback]);

  const handleTakePhoto = useCallback(() => {
    takePhoto().then(
      ({ tempImagePath }: CameraContext.TakePhotoSuccessCallbackResult) => {
        preview({ urls: [tempImagePath] });
      },
    );
  }, [takePhoto, preview]);

  useEffect(() => {
    if (cameraContext) {
      const listener = onCameraFrame(setCameraContextFrame);
      setTimeout(() => {
        listener.stop();
      }, 1000);

      return () => {
        listener && listener.stop();
      };
    }
  }, [cameraContext, onCameraFrame]);

  return (
    <>
      <AtNoticebar marquee>当前hook不支持h5, 请移步小程序体验</AtNoticebar>
      <DocPage title="useCamera 相机" panelTitle="useCamera">
        <CoverView className="record-tag">
          <AtTag circle active={isRecord} type={isRecord ? 'primary' : ''}>
            {isRecord ? '录制中' : '未录制'}
          </AtTag>
        </CoverView>
        <Camera className="demo" />
        {cameraContextFrame && (
          <AtList>
            {Object.entries(cameraContextFrame).map(([key, value]) => (
              <AtListItem
                key={key}
                title={key}
                note={typeof value === 'number' ? value : value.byteLength}
              />
            ))}
          </AtList>
        )}
        <AtButton
          disabled={(cameraContext && isRecord) || env === ENV_TYPE.WEB}
          className="gap"
          onClick={handleStartRecord}
        >
          开始录制
        </AtButton>
        <AtButton
          disabled={(cameraContext && !isRecord) || env === ENV_TYPE.WEB}
          onClick={handleStopRecord}
        >
          停止录制
        </AtButton>
        <AtButton
          className="gap"
          disabled={!cameraContext || env === ENV_TYPE.WEB}
          onClick={handleTakePhoto}
        >
          拍照
        </AtButton>
        <AtFloatLayout isOpened={open} onClose={() => setOpen(false)}>
          <Video
            autoplay={open}
            className="demo"
            style={{ height: 257 }}
            src={recordUrl}
            onEnded={() => setOpen(false)}
          />
        </AtFloatLayout>
      </DocPage>
    </>
  );
};
