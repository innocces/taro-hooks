import React, { useEffect, useState } from 'react';

import { AtButton, AtNoticebar } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useNavigationBar, useEnv } from 'taro-hooks';
import { ENV_TYPE } from '@tarojs/taro';
import Mock from 'mockjs';

export default () => {
  const env = useEnv();
  const [disable, setDisable] = useState<boolean>(true);
  const [loading, { toggleLoading, setTitle, setColor, hideHomeButton }] =
    useNavigationBar({
      loading: true,
      title: Mock.mock('@name()'),
      backgroundColor: '@color()',
      frontColor: '#ffffff',
      animation: false,
    });
  useEffect(() => {
    setDisable(env === ENV_TYPE.WEB);
  }, [env]);

  return (
    <>
      {disable && <AtNoticebar marquee>该Hook部分不支持在h5端使用</AtNoticebar>}
      <DocPage title="useNavigationBar 导航栏" panelTitle="useNavigationBar">
        <AtButton disabled={disable} onClick={toggleLoading}>
          切换导航栏loading状态
        </AtButton>
        <AtButton
          className="gap"
          onClick={() => setTitle(Mock.mock('@name()'))}
        >
          设置导航栏标题
        </AtButton>
        <AtButton
          onClick={() =>
            setColor({
              backgroundColor: Mock.mock('@color()'),
              frontColor: '#ffffff',
              animation: true,
            })
          }
        >
          设置导航栏颜色
        </AtButton>
        <AtButton disabled={disable} className="gap" onClick={hideHomeButton}>
          隐藏返回首页按钮
        </AtButton>
      </DocPage>
    </>
  );
};
