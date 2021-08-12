import React, { useCallback, useEffect, useState } from 'react';
import { AtNoticebar, AtList, AtListItem, AtButton } from 'taro-ui';

import DocPage from '@components/DocPage';

import { useLocation, useEnv, useModal } from 'taro-hooks';
import { ENV_TYPE, General } from '@tarojs/taro';

import './index.less';

export default () => {
  const [
    location,
    {
      getLocation,
      chooseLocation,
      openLocation,
      onLocationChange,
      offLocationChange,
      startLocationUpdate,
      startLocationUpdateBackground,
      stopLocationUpdate,
    },
  ] = useLocation({
    isHighAccuracy: true,
    altitude: true,
    type: 'gcj02',
  });
  const [listenStatus, changeListenStatus] = useState<boolean>();
  const [chooseLocationInfo, setChooseLocationInfo] = useState<object>();
  const env = useEnv();
  const [show] = useModal({ mask: true, title: '地理信息' });

  const handleGetLiocation = useCallback(async () => {
    const locationInfo = await getLocation();
    show({ content: JSON.stringify(locationInfo) });
  }, [getLocation, show]);

  const handleChooseLocation = useCallback(async () => {
    const chooseInfo = await chooseLocation();
    setChooseLocationInfo(chooseInfo);
    show({ content: JSON.stringify(chooseInfo) });
  }, [chooseLocation, show]);

  const handleStartLocatonUpdate = useCallback(() => {
    startLocationUpdate().finally((res: General.CallbackResult) => {
      show({
        content: res?.errMsg || '操作成功',
      });
    });
  }, [startLocationUpdate, show]);

  const handleStopLocatonUpdate = useCallback(() => {
    stopLocationUpdate().finally((res: General.CallbackResult) => {
      show({
        content: res?.errMsg || '操作成功',
      });
    });
  }, [stopLocationUpdate, show]);

  const handleStartLocationUpdateBackground = useCallback(() => {
    startLocationUpdateBackground().finally((res: General.CallbackResult) => {
      show({
        content: res?.errMsg || '操作成功',
      });
    });
  }, [startLocationUpdateBackground, show]);

  useEffect(() => {
    if (typeof listenStatus === 'boolean') {
      if (listenStatus) {
        onLocationChange(console.log);
      } else {
        offLocationChange(console.log);
      }
    }
  }, [listenStatus, onLocationChange, offLocationChange]);

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
        <AtButton
          disabled={!location || !chooseLocationInfo}
          onClick={() => openLocation(chooseLocationInfo)}
        >
          打开地图查看信息(先选择)
        </AtButton>
        <AtButton className="gap" onClick={() => changeListenStatus(true)}>
          监听地理信息变化
        </AtButton>
        <AtButton onClick={() => changeListenStatus(false)}>
          取消监听地理信息变化
        </AtButton>
        <AtButton
          className="gap"
          disabled={env === ENV_TYPE.WEB}
          onClick={handleStartLocatonUpdate}
        >
          开启前台接收位置
        </AtButton>
        <AtButton
          disabled={env === ENV_TYPE.WEB}
          onClick={handleStopLocatonUpdate}
        >
          停止前台接收位置
        </AtButton>
        <AtButton
          className="gap"
          disabled={env === ENV_TYPE.WEB}
          onClick={handleStartLocationUpdateBackground}
        >
          开启后台接收位置
        </AtButton>
      </DocPage>
    </>
  );
};
