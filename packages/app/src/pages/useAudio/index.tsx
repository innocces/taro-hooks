import React, { useEffect, useState } from 'react';
import { AtNoticebar, AtButton, AtTag } from 'taro-ui';
import { Audio } from '@tarojs/components';

import DocPage from '@components/DocPage';

import { useAudio, useEnv, useToast } from 'taro-hooks';
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
  ] = useAudio();
  const [open, setOpen] = useState<boolean>(false);
  const [recordInfo, setRecordInfo] = useState<
    RecorderManager.OnStopCallbackResult | undefined
  >();

  useEffect(() => {
    if (recorderManager) {
      console.log(recorderManager);
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
        show({ title: '录音开始' });
      });
      onStop((res: RecorderManager.OnStopCallbackResult) => {
        show({ title: '录音结束' });
        setRecordInfo(res);
        setOpen(true);
      });
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
  ]);

  return (
    <>
      <AtNoticebar marquee>当前hook不支持h5, 请移步小程序体验</AtNoticebar>
      <DocPage title="useAudio 录音" panelTitle="useAudio">
        <AtTag circle active type="primary">
          当前状态: {recorderManagerStatus || '无'}
        </AtTag>
        {recordInfo?.tempFilePath && open && (
          <Audio
            src={recordInfo?.tempFilePath}
            controls
            onEnded={() => setOpen(false)}
          />
        )}
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
      </DocPage>
    </>
  );
};
