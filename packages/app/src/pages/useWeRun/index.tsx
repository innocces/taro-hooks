import React, { useCallback } from 'react';
import { AtButton } from 'taro-ui';

import DocPage from '@components/DocPage';

import { useModal, useWeRun, useLogin } from 'taro-hooks';

export default () => {
  const [show] = useModal({ mask: true, title: '获取结果', showCancel: false });
  const [getWeRunData, shareToWeRun] = useWeRun();
  const [login] = useLogin();

  const handleGetWeRunData = useCallback(async () => {
    let content = '获取成功!';
    try {
      await login(true);
      const data = await getWeRunData();
      if (!data) {
        content = '获取失败';
      } else {
        content = JSON.stringify(data);
      }
    } catch (e) {
      content = '获取失败';
    }
    show({ content });
  }, [getWeRunData, show, login]);

  const handleShareToWeRun = useCallback(async () => {
    let content = '获取成功!';
    try {
      await login(true);
      const recordList = [
        { typeId: 1003, time: 200, calorie: 100 },
        { typeId: 3005, time: 300, calorie: 1000, distance: 1000 },
        { typeId: 4003, calorie: 1000, number: 100 },
      ];
      const data = await shareToWeRun(recordList);
      if (!data) {
        content = '获取失败';
      }
    } catch (e) {
      console.log(e);
      content = '获取失败';
    }
    show({ content });
  }, [shareToWeRun, show, login]);

  return (
    <DocPage title="useWeRun 微信运动" panelTitle="useWeRun">
      <AtButton onClick={handleGetWeRunData}>获取微信运动步数</AtButton>
      <AtButton className="gap" onClick={handleShareToWeRun}>
        分享数据至微信运动
      </AtButton>
    </DocPage>
  );
};
