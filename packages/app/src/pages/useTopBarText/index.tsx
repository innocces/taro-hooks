import React, { useCallback } from 'react';
import { AtNoticebar, AtButton } from 'taro-ui';
import DocPage from '@components/DocPage';

import Mock from 'mockjs';
import { useTopBarText, useModal } from 'taro-hooks';
import { General } from '@tarojs/taro';

export default () => {
  const [show] = useModal({ mask: true, title: '设置结果', showCancel: false });
  const [set] = useTopBarText('taro-hooks');

  const handleSetTopBarText = useCallback(async () => {
    try {
      const result = await set(Mock.mock('@name()'));
      show({ content: result.errMsg });
    } catch (e) {
      show({ content: (e as General.CallbackResult).errMsg });
    }
  }, [show, set]);

  return (
    <>
      <AtNoticebar marquee>
        该hook仅小程序使用. 请将小程序置顶查看效果
      </AtNoticebar>
      <DocPage title="useTopBarText 置顶文字" panelTitle="useTopBarText">
        <AtButton onClick={handleSetTopBarText}>设置置顶栏文字内容</AtButton>
      </DocPage>
    </>
  );
};
