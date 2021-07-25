import React, { useCallback } from 'react';
import { AtButton, AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useMotion, useModal } from 'taro-hooks';

export default () => {
  const [motionInfo, { stop, start, addListener, removeListener }] =
    useMotion(true);
  const [show] = useModal({
    title: 'useMotion listen',
    showCancel: false,
    confirmText: '监听成功',
  });

  const customListen = useCallback(
    (motion) => {
      removeListener(customListen);
      show({
        content: JSON.stringify(motion),
      });
    },
    [show, removeListener],
  );

  return (
    <DocPage title="useMotion 设备方向" panelTitle="useMotion">
      <AtButton onClick={() => addListener(customListen)}>
        增加一次监听并取消
      </AtButton>
      <AtButton className="gap" onClick={() => stop()}>
        停止所有
      </AtButton>
      <AtList>
        {Object.entries(motionInfo).map(([key, value]) => (
          <AtListItem title={key} key={key} note={value as string} />
        ))}
      </AtList>
    </DocPage>
  );
};
