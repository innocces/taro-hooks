import React, { useEffect, useState } from 'react';
import { AtNoticebar, AtButton, AtTag, AtFloatLayout } from 'taro-ui';

import DocPage from '@components/DocPage';

import { useRecord, useAudio, useEnv, useToast } from 'taro-hooks';
import { ENV_TYPE, RecorderManager } from '@tarojs/taro';

import './index.less';

const defaultStartOption = {
  duration: 60000,
};

export default () => {
  const env = useEnv();
  const [show] = useToast({ mask: true });
  const [
    recorderManager,
    recorderManagerStatus,
    {
      onError,
      onFrameRecorded,
      onInterruptionBegin,
      onInterruptionEnd,
      onPause,
      onResume,
      onStart,
      onStop,
      startRecord,
      stopRecord,
      pauseRecord,
      resumeRecord,
    },
  ] = useRecord();
  const [audioContext, audioSource, { play, stop, pause, setOption }] =
    useAudio({
      autoplay: true,
      loop: true,
      obeyMuteSwitch: false,
    });
  const [open, setOpen] = useState<boolean>(false);
  const [recordInfo, setRecordInfo] = useState<
    RecorderManager.OnStopCallbackResult | undefined
  >();

  useEffect(() => {
    if (recorderManager) {
      onError(({ errMsg }: RecorderManager.OnErrorCallbackResult) =>
        show({ title: errMsg, icon: 'fail' }),
      );
      onFrameRecorded(console.log);
      onInterruptionBegin(() => {
        show({ title: '录音因为受到系统占用而被中断' });
      });
      onInterruptionEnd(() => {
        show({ title: '录音中断结束' });
      });
      onPause(() => {
        show({ title: '录音暂停' });
      });
      onResume(() => {
        show({ title: '录音继续' });
      });
      onStart(() => {
        show({ title: '录音开始, 请记得说话' });
      });
      onStop((res: RecorderManager.OnStopCallbackResult) => {
        show({ title: '录音结束, 请确保非静音模式' });
        console.log(res);
        setOption({ obeyMuteSwitch: false });
        play(res.tempFilePath);
        setRecordInfo(res);
        setOpen(true);
      });

      return () => {
        stop();
      };
    }
  }, [
    recorderManager,
    onError,
    show,
    onFrameRecorded,
    onInterruptionBegin,
    onInterruptionEnd,
    onPause,
    onResume,
    onStart,
    onStop,
    startRecord,
    stopRecord,
    pauseRecord,
    resumeRecord,
    play,
    stop,
    setOption,
  ]);

  return (
    <>
      <AtNoticebar marquee>
        当前hook不支持h5, 请移步小程序体验。且录音和音频共用.
        静音会导致音频无法正常播放
      </AtNoticebar>
      <DocPage
        title="useAudio&useRecord 音频相关"
        panelTitle="useAudio&useRecord"
      >
        <AtTag circle active type="primary">
          当前状态: {recorderManagerStatus || '无'}
        </AtTag>
        <AtButton
          disabled={!recorderManager || env === ENV_TYPE.WEB}
          className="gap"
          onClick={() => startRecord(defaultStartOption)}
        >
          开始录制
        </AtButton>
        <AtButton
          disabled={!recorderManager && env === ENV_TYPE.WEB}
          onClick={() => stopRecord()}
        >
          停止录制
        </AtButton>
        <AtButton
          className="gap"
          disabled={!recorderManager || env === ENV_TYPE.WEB}
          onClick={() => pauseRecord()}
        >
          暂停录制
        </AtButton>
        <AtButton
          disabled={!recorderManager || env === ENV_TYPE.WEB}
          onClick={() => resumeRecord()}
        >
          继续录制
        </AtButton>
        <AtFloatLayout isOpened={open} onClose={() => setOpen(false)}>
          <AtTag circle active type="primary">
            录音时长为: {recordInfo?.duration}ms
          </AtTag>
          <AtButton
            disabled={!audioContext || env === ENV_TYPE.WEB}
            onClick={() => play()}
            className="gap"
          >
            播放音频
          </AtButton>
          <AtButton
            disabled={!audioContext && env === ENV_TYPE.WEB}
            onClick={() => stop()}
          >
            停止播放
          </AtButton>
          <AtButton
            className="gap"
            disabled={!audioContext || env === ENV_TYPE.WEB}
            onClick={() => pause()}
          >
            暂停播放
          </AtButton>
        </AtFloatLayout>
      </DocPage>
    </>
  );
};
