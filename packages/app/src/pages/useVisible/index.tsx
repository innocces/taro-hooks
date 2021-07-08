import React, { useEffect, useState, useContext } from 'react';
import { AtNoticebar, AtTimeline } from 'taro-ui';
import { AtTimelineProps } from 'taro-ui/types/timeline';

import DocPage from '@components/DocPage';

import { useVisible } from 'taro-hooks';

import 'taro-ui/dist/style/components/icon.scss';

export default () => {
  const visible = useVisible();
  const [statusStack, setStatusStack] = useState<AtTimelineProps['items']>([]);

  useEffect(() => {
    setStatusStack((prevStack) => [
      ...prevStack,
      {
        title: visible ? '页面显示' : '页面隐藏',
        content: ['时间: ' + Date.now()],
        color: visible ? 'green' : 'red',
        icon: visible ? 'clock' : 'blocked',
      },
    ]);
  }, [visible]);

  return (
    <>
      <AtNoticebar marquee>
        当前hook自动监听页面状态变化。可尝试打开小程序设置或切换后台测试。
      </AtNoticebar>
      <DocPage title="useVisible 页面状态" panelTitle="useVisible">
        <AtTimeline items={statusStack} />
      </DocPage>
    </>
  );
};
