<template>
  <demo-content>
    <video :id="videoId" :src="videoInfo?.tempFilePath"></video>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleChoose()"
      >选择视频</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleVideoAction('play')"
      >播放视频</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleVideoAction('pause')"
      >暂停视频</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleCompress()"
      >压缩视频(小程序独有)</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="open(videoInfo?.tempFilePath)"
      >打开视频编辑器(小程序独有)</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="save(videoInfo?.tempFilePath)"
      >保存视频</nut-button
    >
    <nut-cell-group title="视频信息">
      <nut-cell
        v-for="(value, key) in videoSummary ?? {}"
        :key="key"
        :title="key"
        :sub-title="$filters.stringify(value)"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { ENV_TYPE } from '@tarojs/taro';
import { useState } from '@taro-hooks/core';
import { escapeState } from '@taro-hooks/shared';
import { useToast, useVideo, useEnv } from 'taro-hooks';

const videoId = 'demo-video-id';
const env = useEnv();
const [videoInfo, setVideoInfo] =
  useState<Taro.chooseVideo.SuccessCallbackResult>();
const [videoSummary, setVideoSummary] =
  useState<Taro.getVideoInfo.SuccessCallbackResult>();

const [videoContext, { choose, chooseMedia, open, save, compress, get }] =
  useVideo(videoId, {
    camera: 'back',
    sourceType: ['camera', 'album'],
  });

const { show } = useToast({
  title: 'initial title',
  duration: 500,
  mask: true,
});

const handleChoose = async () => {
  try {
    const result = await choose();
    setVideoInfo(result);

    if (env === ENV_TYPE.WEAPP) {
      const summary = await get(result.tempFilePath);
      setVideoSummary(summary);
    }
  } catch (e) {
    show({ title: '获取视频或信息失败', icon: 'error' });
  }
};

const handleVideoAction = (action) => {
  console.log(videoContext);
  escapeState(videoContext)?.[action]?.();
};

const handleCompress = async () => {
  try {
    const { size } = await compress({ src: videoInfo?.tempFilePath });
    show({ title: `压缩: ${size}/${videoInfo?.size}` });
  } catch (e) {
    show({ title: '压缩失败', icon: 'error' });
  }
};
</script>

<style>
#demo-video-id {
  position: relative;
  left: auto;
  top: auto;
  width: 100%;
  height: 200px;
}
</style>
