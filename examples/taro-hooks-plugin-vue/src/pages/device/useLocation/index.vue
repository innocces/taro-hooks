<template>
  <demo-content>
    <nut-cell-group title="位置信息">
      <nut-cell
        v-for="(value, index) in locationInfo"
        :key="index"
        :title="index"
        :sub-title="$filters.stringify(value)"
      >
      </nut-cell>
    </nut-cell-group>
    <nut-button shape="square" type="primary" class="gap" block @click="get()"
      >获取当前位置</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleChoose()"
      >选择地理位置</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleChoosePOI()"
      >选择POI位置</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleOpen()"
      >查看位置</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleToggle()"
      >切换前台接受地理</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleToggleListener()"
      >切换监听地理位置</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useTaroState, useTaroEffect, useTaroRef } from '@tarojs/taro';
import { escapeState } from '@taro-hooks/shared';
import { useLocation, useModal } from 'taro-hooks';

const [locationInfo, setLocationInfo] = useTaroState({});
const updateStatus = useTaroRef<boolean>(false);
const listenStatus = useTaroRef<boolean>(false);

const show = useModal({ title: 'useLocation', mask: true, showCancel: false });

const [location, { get, choose, choosePOI, open, toggleUpdate, on, off }] =
  useLocation({
    isHighAccuracy: true,
    altitude: true,
    type: 'gcj02',
  });

useTaroEffect(() => {
  setLocationInfo(escapeState(location));
}, [location]);

const handleChoose = async () => {
  try {
    const chooseInfo = await choose();
    setLocationInfo(chooseInfo);
    show({ content: JSON.stringify(chooseInfo) });
  } catch (e) {
    show({ content: '获取位置失败' });
  }
};

const handleChoosePOI = async () => {
  try {
    const chooseInfo = await choosePOI();
    show({ content: JSON.stringify(chooseInfo) });
  } catch (e) {
    show({ content: '获取POI失败' });
  }
};

const handleOpen = () => {
  open({
    latitude: escapeState(locationInfo).latitude,
    longitude: escapeState(locationInfo).longitude,
  });
};

const handleToggle = async () => {
  try {
    await toggleUpdate(!updateStatus.current);
    show({
      content: (updateStatus.current ? '关闭' : '打开') + '前台接收成功',
    });
    updateStatus.current = !updateStatus.current;
  } catch (e) {
    show({
      content: (updateStatus.current ? '关闭' : '打开') + '前台接收失败',
    });
  }
};

const listener = (result) => {
  setLocationInfo(result);
};

const handleToggleListener = async () => {
  try {
    const method = listenStatus.current ? off : on;
    await method(listener);
    show({ content: (listenStatus.current ? '关闭' : '打开') + '监听成功' });
    listenStatus.current = !listenStatus.current;
  } catch (e) {
    show({ content: (listenStatus.current ? '关闭' : '打开') + '监听失败' });
  }
};
</script>
