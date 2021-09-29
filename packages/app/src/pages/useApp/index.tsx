import React, { useCallback, useEffect } from 'react';
import { AtList, AtListItem, AtMessage, AtNoticebar } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useModal, useApp } from 'taro-hooks';

import MOCK from 'mockjs';

export default () => {
  const [appInstance, globalData, setGlobalData] = useApp(true);
  const [show] = useModal({
    title: 'useApp',
    content: '您是否要随机修改当前全局变量',
    mask: true,
  });

  useEffect(() => {
    show({
      content: `当前获取示例(${
        appInstance?.config?.window?.navigationBarTitleText || ''
      }): 页面个数(${appInstance?.config?.pages.length || 0})`,
    });
  }, [show, appInstance]);

  const handleItemClick = useCallback(
    (key: string) => {
      show().then((res: any) => {
        if (res.confirm) {
          setGlobalData(key, MOCK.mock('@name()'));
        }
      });
    },
    [setGlobalData, show],
  );

  return (
    <>
      <AtNoticebar marquee>
        文档中的用例非完整应用, 可查看h5 或 小程序 demo 查看效果
      </AtNoticebar>
      <AtMessage />
      <DocPage title="useApp 应用实例" panelTitle="useApp">
        <AtList>
          {Object.entries(globalData).map(([key, value]) => (
            <AtListItem
              onClick={() => handleItemClick(key)}
              key={key}
              title={key}
              note={JSON.stringify(value)}
            />
          ))}
        </AtList>
      </DocPage>
    </>
  );
};
