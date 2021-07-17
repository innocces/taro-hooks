import React, { useCallback } from 'react';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useClipboardData } from 'taro-hooks';
import { showModal } from '@tarojs/taro';

export default () => {
  const [clipboardData, { set, get }] = useClipboardData();

  const getClipboardData = useCallback(() => {
    get().then((data: any) => {
      showModal({ content: data, title: '当前剪贴板内容' });
    });
  }, [get]);

  return (
    <>
      <DocPage title="useClipboardData 剪贴板" panelTitle="useClipboardData">
        <View>当前剪贴板内容: {clipboardData}</View>
        <AtButton
          customStyle={{ margin: '10px 0' }}
          onClick={() => set('taro hooks nice!')}
        >
          设置剪贴板
        </AtButton>
        <AtButton onClick={getClipboardData}>获取剪贴板</AtButton>
      </DocPage>
    </>
  );
};
