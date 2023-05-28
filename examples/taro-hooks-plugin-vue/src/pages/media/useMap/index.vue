<template>
  <demo-content>
    <map
      class="gap"
      :id="mapId"
      :show-location="true"
      :show-scale="true"
      :show-compass="true"
      :latitude="mapInfo?.center?.latitude"
      :longitude="mapInfo?.center?.longitude"
      :markers="markers"
    ></map>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleInclude()"
      >展示指定经纬</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="moveTo()"
      >移至当前定位</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleTranslate()"
      >平移marker</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="toggleMarkers([0])"
      >移除所有marker</nut-button
    >
    <nut-cell-group title="地图信息">
      <nut-cell
        v-for="(value, key) in mapInfo"
        :key="key"
        :title="key"
        :sub-title="$filters.stringify(value)"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useState, useEffect } from '@taro-hooks/core';
import { escapeState } from '@taro-hooks/shared';
import { useModal, useMap } from 'taro-hooks';

const mapId = 'demo-map-id';
const points = [
  { latitude: 30.653186, longitude: 104.083735 },
  { latitude: 30.655546, longitude: 104.0778 },
];
const markers = [
  {
    id: 0,
    title: '太古里marker',
    iconPath: require('../../../assets/tabbar/NO.0001.png'),
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
const [mapInfo, setMapInfo] = useState({});

const handleGetInfo = async () => {
  try {
    const result = await get();
    setMapInfo(result);
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

useEffect(() => {
  if (escapeState(mapContext)) {
    handleGetInfo();
    toggleMarkers(markers, true);
  }
}, [mapContext]);

const show = useModal({
  title: 'useMap',
  showCancel: false,
  mask: true,
});
</script>

<style>
#demo-map-id {
  position: relative;
  left: auto;
  top: auto;
  width: 100%;
  height: 200px;
}
</style>
