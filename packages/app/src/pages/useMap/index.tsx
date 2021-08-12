import React, { useCallback, useEffect, useState } from 'react';
import { AtNoticebar, AtButton } from 'taro-ui';

import DocPage from '@components/DocPage';

import { useMap, useLocation, useEnv, useModal } from 'taro-hooks';
import { Map, View } from '@tarojs/components';
import { ENV_TYPE } from '@tarojs/taro';

const markers = [
  {
    id: 0,
    latitude: 30.653186,
    longitude: 104.083735,
    title: '太古里marker',
    iconPath: '../../assets/icon/index-select.png',
  },
];

export default () => {
  const [locationInfo] = useLocation({ type: 'gcj02' });
  const [
    mapContext,
    {
      getCenterLocation,
      getRegion,
      getScale,
      getRotate,
      getSkew,
      includePoints,
      moveToLocation,
      translateMarker,
    },
  ] = useMap('useMap');
  const [show] = useModal({ mask: true, title: '地图信息' });
  const env = useEnv();

  const { longitude, latitude } = locationInfo || {};
  const supportMap = env && env !== ENV_TYPE.WEB;

  const handleGetCenterPosition = useCallback(async () => {
    const location = await getCenterLocation();
    show({ content: JSON.stringify(location) });
  }, [getCenterLocation, show]);

  const handleGetRegion = useCallback(async () => {
    const regin = await getRegion();
    show({ content: JSON.stringify(regin) });
  }, [getRegion, show]);

  const handleGetScale = useCallback(async () => {
    const scale = await getScale();
    show({ content: JSON.stringify(scale) });
  }, [getScale, show]);

  const handleGetSkew = useCallback(async () => {
    const skew = await getSkew();
    show({ content: JSON.stringify(skew) });
  }, [getSkew, show]);

  const handleGetRotate = useCallback(async () => {
    const rotate = await getRotate();
    show({ content: JSON.stringify(rotate) });
  }, [getRotate, show]);

  const handleIncludePoints = useCallback(async () => {
    const points = [
      { latitude: 30.653186, longitude: 104.083735 },
      { latitude: 30.655546, longitude: 104.0778 },
    ];
    const result = await includePoints(points);
    show({ content: JSON.stringify(result) });
  }, [includePoints, show]);

  const handleTranslateMarker = useCallback(async () => {
    await translateMarker({
      autoRotate: true,
      markerId: 0,
      rotate: 0,
      destination: { latitude: 30.653186, longitude: 104.083735 },
    });
    show({ content: 'translateMarker: ok' });
  }, [translateMarker, show]);

  return (
    <>
      <AtNoticebar marquee>useMap 仅可以在小程序环境中使用</AtNoticebar>
      <DocPage title="useMap 地图" panelTitle="useMap">
        {supportMap ? (
          <Map
            latitude={latitude}
            longitude={longitude}
            showLocation
            showScale
            showCompass
            id="useMap"
            markers={markers}
            className="demo"
            style={{ height: '600rpx' }}
          />
        ) : (
          <View className="demo">暂不支持Map组件</View>
        )}
        <AtButton
          className="gap"
          disabled={!supportMap}
          onClick={handleGetCenterPosition}
        >
          获取中心位置
        </AtButton>
        <AtButton disabled={!supportMap} onClick={handleGetRegion}>
          获取视野范围
        </AtButton>
        <AtButton
          className="gap"
          disabled={!supportMap}
          onClick={handleGetScale}
        >
          获取缩放级别
        </AtButton>
        <AtButton disabled={!supportMap} onClick={handleGetRotate}>
          获取旋转角
        </AtButton>
        <AtButton
          className="gap"
          disabled={!supportMap}
          onClick={handleGetSkew}
        >
          获取倾斜角
        </AtButton>
        <AtButton disabled={!supportMap} onClick={handleIncludePoints}>
          缩放视野展示所有经纬度
        </AtButton>
        <AtButton
          className="gap"
          disabled={!supportMap}
          onClick={() => moveToLocation()}
        >
          移至当前定位
        </AtButton>
        <AtButton disabled={!supportMap} onClick={handleTranslateMarker}>
          平移marker
        </AtButton>
      </DocPage>
    </>
  );
};
