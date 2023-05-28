<template>
  <demo-content>
    <nut-swiper height="200" class="demo-swiper gap">
      <nut-swiper-item
        v-for="(url, index) in fileInfo?.tempFilePaths"
        :key="index"
      >
        <image class="demo-swiper-item" :src="url"></image>
      </nut-swiper-item>
    </nut-swiper>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="choose()"
      >选择图片</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="preview({ urls: fileInfo?.tempFilePaths })"
      >预览照片</nut-button
    >
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="save(fileInfo?.tempFilePaths?.[0])"
      >保存照片</nut-button
    >
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="handleGetFileInfo()"
      >获取图片信息</nut-button
    >
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="choose({}, true)"
      >获取会话文件(仅小程序)</nut-button
    >
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="edit(fileInfo?.tempFilePaths?.[0])"
      >编辑图片(仅小程序)</nut-button
    >
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="
        previewMedia({ sources: [{ url: fileInfo?.tempFilePaths?.[0] }] })
      "
      >预览媒体(仅小程序)</nut-button
    >
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="handleCompress()"
      >压缩图片</nut-button
    >
    <nut-cell-group title="图片信息">
      <nut-cell
        v-for="(value, key) in imageInfo"
        :key="key"
        :title="key"
        :sub-title="$filters.stringify(value)"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useState } from '@taro-hooks/core';
import { escapeState } from '@taro-hooks/shared';
import { useToast, useImage } from 'taro-hooks';

const { show } = useToast({ title: 'useImage', mask: true });
const [imageInfo, setImageInfo] =
  useState<Taro.getImageInfo.SuccessCallbackResult>();
const [fileInfo, { choose, compress, get, preview, previewMedia, save, edit }] =
  useImage({
    count: 15,
  });

const handleGetFileInfo = async () => {
  try {
    const info = await get(escapeState(fileInfo)?.tempFilePaths?.[0]);
    setImageInfo(info);
  } catch (e) {
    show({
      title: '获取信息失败',
      icon: 'error',
    });
  }
};

const handleCompress = async () => {
  try {
    const info = await compress(escapeState(fileInfo)?.tempFilePaths?.[0]);
    setImageInfo(info);
  } catch (e) {
    show({
      title: '压缩失败',
      icon: 'error',
    });
  }
};
</script>

<style>
.demo-swiper,
.demo-swiper-item {
  height: 200px;
}
.nut-swiper-item {
  text-align: center;
}
</style>
