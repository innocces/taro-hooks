import React, { useCallback, useState } from 'react';
import { AtNoticebar, AtList, AtListItem, AtButton } from 'taro-ui';

import DocPage from '@components/DocPage';

import { useLocation, useEnv, useModal } from 'taro-hooks';
import { ENV_TYPE } from '@tarojs/taro';

import './index.less';

export default () => {
  const [location, { getLocation, chooseLocation }] = useLocation({
    isHighAccuracy: true,
    altitude: true,
  });
  const env = useEnv();
  const [show] = useModal({ mask: true, title: '地理信息' });

  const handleGetLiocation = useCallback(async () => {
    const locationInfo = await getLocation();
    show({ content: JSON.stringify(locationInfo) });
  }, [getLocation, show]);

  const handleChooseLocation = useCallback(async () => {
    const chooseInfo = await chooseLocation();
    show({ content: JSON.stringify(chooseInfo) });
  }, [chooseLocation, show]);

  return (
    <>
      <AtNoticebar marquee>
        当前hook自动监听页面状态变化。可尝试打开小程序设置或切换后台测试。
      </AtNoticebar>
      <DocPage title="useLocation 地理位置" panelTitle="useLocation">
        <AtList>
          {location &&
            Object.entries(location).map(([key, value]) => (
              <AtListItem key={key} title={key} note={value as string} />
            ))}
        </AtList>
        <AtButton className="gap" onClick={handleGetLiocation}>
          获取当前地理信息
        </AtButton>
        <AtButton onClick={handleChooseLocation}>选择地理信息</AtButton>
        <AtButton className="gap">监听地理信息变化</AtButton>
        <AtButton>取消监听地理信息变化</AtButton>
        <AtButton className="gap" disabled={env === ENV_TYPE.WEB}>
          开启前台接收位置
        </AtButton>
        <AtButton disabled={env === ENV_TYPE.WEB}>停止前台接收位置</AtButton>
        <AtButton className="gap" disabled={env === ENV_TYPE.WEB}>
          开启后台接收位置
        </AtButton>
      </DocPage>
    </>
  );
};
