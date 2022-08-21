import React from 'react';
import { Map } from '@tarojs/components';
import { useTaroState, useTaroEffect, useReady } from '@tarojs/taro';
import { escapeState } from '@taro-hooks/shared';
import { useModal, useMap } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button, Cell } from '@taroify/core';

import Icon from '../../../assets/tabbar/NO.0001.png';

import './index.less';

export default () => {
  const mapId = 'demo-map-id';
  const points = [
    { latitude: 30.653186, longitude: 104.083735 },
    { latitude: 30.655546, longitude: 104.0778 },
  ];
  const markers = [
    {
      id: 0,
      title: '太古里marker',
      iconPath: Icon,
      width: 50,
      height: 50,
      ...points[1],
    },
  ];

  const translateInfo = {
    autoRotate: true,
    moveWithRotate: true,
    markerId: 0,
    rotate: 0,
    destination: points[0],
  };

  const [mapContext, { get, include, moveTo, translate, toggleMarkers }] =
    useMap(mapId);
  const [mapInfo, setMapInfo] = useTaroState({});

  const handleGetInfo = async () => {
    try {
      const result = await get();
      console.log('result', result);
      setMapInfo(result);
      toggleMarkers(markers, true);
    } catch (e) {
      show({ content: '获取中心位置失败' });
    }
  };

  const handleInclude = async () => {
    try {
      await include(points);
      show({ content: '设置经纬成功' });
    } catch (e) {
      show({ content: '设置经纬失败' });
    }
  };

  const handleTranslate = async () => {
    try {
      // may clear by user
      await toggleMarkers(markers, true);
      moveTo(points[0]);
      await translate(translateInfo);
      show({ content: '平移marker成功' });
    } catch (e) {
      show({ content: '平移marker失败' });
    }
  };

  const show = useModal({
    title: 'useMap',
    showCancel: false,
    mask: true,
  });

  return (
    <DemoContent>
      <Map
        id={mapId}
        className="gap"
        showLocation
        showCompass
        showScale
        markers={markers}
        latitude={mapInfo?.center?.latitude}
        longitude={mapInfo?.center?.longitude}
      />
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleGetInfo()}
        shape="square"
      >
        获取信息
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleInclude()}
        shape="square"
      >
        展示指定经纬
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => moveTo()}
        shape="square"
      >
        移至当前定位
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleTranslate()}
        shape="square"
      >
        平移marker
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => toggleMarkers([0])}
        shape="square"
      >
        移除所有marker
      </Button>
      <Cell.Group title="地图信息">
        {Object.entries(mapInfo ?? {}).map(([key, value]) => (
          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
        ))}
      </Cell.Group>
    </DemoContent>
  );
};
