<template>
  <demo-content>
    <nut-cell
      v-for="(value, key) in globalData"
      :key="key"
      :title="key"
      :sub-title="$filters.stringify(value)"
      @click="handleClick(key)"
    ></nut-cell>
  </demo-content>
</template>

<script setup lang="ts">
import { useApp, useModal } from 'taro-hooks';
import { useEffect } from '@taro-hooks/core';
import Mock from 'mockjs';

type GlobalData = Record<'framework' | 'package' | 'basic', string>;

const { app, globalData, setGlobalData } = useApp<GlobalData>(true);
const show = useModal({
  title: '设置全局变量',
  content: '您是否要随机修改当前全局变量',
  mask: true,
});

useEffect(() => {
  const { window, pages } = app?.config ?? {};
  show({
    title: 'APP',
    content: `当前获取实例(${window?.navigationBarTitleText ?? ''}): 页面个数(${
      pages?.length ?? 0
    })`,
  });
}, []);

const handleClick = (key: keyof GlobalData) => {
  show().then(({ confirm }) => {
    if (confirm) {
      setGlobalData(key, Mock.Random.name());
    }
  });
};
</script>
