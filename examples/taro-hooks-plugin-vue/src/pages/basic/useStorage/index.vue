<template>
  <demo-content>
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="handleAdd()"
      >随机设置缓存!</nut-button
    >
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="handleGet()"
      >随机获取缓存!</nut-button
    >
    <nut-button
      class="gap"
      shape="square"
      type="danger"
      block
      @click="handleRemove()"
      >随机移除缓存!</nut-button
    >
    <nut-cell-group title="当前缓存个数">
      <nut-cell
        title="缓存占用"
        :sub-title="String(storageInfo.currentSize)"
      ></nut-cell>
      <nut-cell
        title="缓存限制"
        :sub-title="String(storageInfo.limitSize)"
      ></nut-cell>
      <nut-cell
        title="当前缓存数量"
        :sub-title="String(storageInfo.keys?.length)"
      ></nut-cell>
      <nut-cell title="分别为:"></nut-cell>
      <nut-cell
        v-for="(value, key) in storageInfo.storage"
        :key="key"
        :title="key"
        :sub-title="$filters.stringify(value)"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useStorage, useToast } from 'taro-hooks';
import { escapeState } from '@taro-hooks/shared';
import Mock from 'mockjs';

const [storageInfo, { set, get, remove }] = useStorage();
const { show } = useToast({ mask: true, title: '操作成功' });

const handleAdd = () => {
  set<string>(Mock.Random.word(), Mock.Random.name()).then(() => {
    show();
  });
};

const generateKey = () => {
  const randomIndex = Math.max(
    Math.ceil(Math.random() * escapeState(storageInfo).keys.length),
    escapeState(storageInfo).keys.length - 1,
  );
  return escapeState(storageInfo).keys[randomIndex];
};

const handleGet = () => {
  get<string>(generateKey()).then((res) => {
    show({ title: res ?? '获取失败' });
  });
};

const handleRemove = () => {
  remove(generateKey()).then(() => show());
};
</script>
