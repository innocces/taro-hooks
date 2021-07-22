import React from 'react';
import { AtButton } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useVibrate } from 'taro-hooks';

export default () => {
  const [vibrateAction] = useVibrate();
  const [vibrateIntervalAction, stopVibrateAction] = useVibrate(true);

  return (
    <DocPage title="useVibrate 震动反馈" panelTitle="useVibrate">
      <AtButton onClick={() => vibrateAction()}>短震动触感按钮</AtButton>
      <AtButton className="gap" onClick={() => vibrateAction(true)}>
        长震动触感按钮
      </AtButton>
      <AtButton onClick={() => vibrateIntervalAction()}>
        持续短震动触感按钮
      </AtButton>
      <AtButton
        className="gap"
        onClick={() => {
          stopVibrateAction();
          vibrateIntervalAction(true);
        }}
      >
        持续长震动触感按钮
      </AtButton>
      <AtButton onClick={() => stopVibrateAction()}>关闭持续震动</AtButton>
    </DocPage>
  );
};
