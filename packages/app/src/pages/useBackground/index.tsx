import React, { useCallback, useEffect } from 'react';
import { AtButton, AtNoticebar } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useBackground, useManualPullDownRefresh } from 'taro-hooks';
import mock from 'mockjs';

export default () => {
  const [start] = useManualPullDownRefresh();
  const [setBackgroundColor, setBackgroundTextStyle] = useBackground({
    textStyle: 'light',
    backgroundColor: '#bd5fff',
  });

  useEffect(() => {
    start(3000);
  }, [start]);

  const handleSetBackgroundColor = useCallback(() => {
    setBackgroundColor({
      backgroundColor: mock.mock('@color()'),
      backgroundColorTop: mock.mock('@color()'),
      backgroundColorBottom: mock.mock('@color()'),
    }).then(() => start(3000));
  }, [setBackgroundColor, start]);

  const handleSetBackgroundTextStyle = useCallback(
    (textStyle) => {
      setBackgroundTextStyle(textStyle).then(() => start(3000));
    },
    [setBackgroundTextStyle, start],
  );

  return (
    <>
      <AtNoticebar marquee>该hook不支持h5预览</AtNoticebar>
      <DocPage title="useBackground 窗口设置" panelTitle="useAccountInfo">
        <AtButton onClick={handleSetBackgroundColor}>设置窗口背景色</AtButton>
        <AtButton
          className="gap"
          onClick={() => handleSetBackgroundTextStyle('dark')}
        >
          设置下拉背景loading(dark)
        </AtButton>
        <AtButton onClick={() => handleSetBackgroundTextStyle('light')}>
          设置下拉背景loading(light)
        </AtButton>
      </DocPage>
    </>
  );
};
