import React from 'react';
import { AtButton, AtNoticebar } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useManualPullDownRefresh, useBackground } from 'taro-hooks';

export default () => {
  const [start, stop] = useManualPullDownRefresh();
  useBackground({ backgroundColor: '#bd5fff', textStyle: 'dark' });
  return (
    <>
      <AtNoticebar marquee>该hook不支持h5预览</AtNoticebar>
      <DocPage
        title="useManualPullDownRefresh 手动下拉刷新"
        panelTitle="useManualPullDownRefresh"
      >
        <AtButton onClick={() => start()}>开始下拉刷新</AtButton>
        <AtButton className="gap" onClick={() => stop()}>
          结束下拉刷新
        </AtButton>
        <AtButton onClick={() => start(2000)}>开始下拉刷新2S后停止</AtButton>
      </DocPage>
    </>
  );
};
