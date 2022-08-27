<template>
  <demo-content>
    <camera id="demo-camera-id"></camera>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleStart()"
      >开始录制</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleStop()"
      >停止录制</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleTake()"
      >拍照</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useToast, useCamera, useImage } from 'taro-hooks';

const [cameraContext, { zoom, start, stop, take }] = useCamera();
const [, { preview, previewMedia }] = useImage();

const { show } = useToast({
  title: 'useCamera',
  duration: 500,
  mask: true,
});

const handleStart = async () => {
  try {
    await start();
    show({ title: '开启录制成功' });
  } catch (e) {
    show({ title: '开启录制失败', icon: 'error' });
  }
};

const handleStop = async () => {
  try {
    const video = await stop();
    previewMedia({ sources: [{ url: video.tempVideoPath }] });
    show({ title: '关闭录制成功' });
  } catch (e) {
    show({ title: '关闭录制失败', icon: 'error' });
  }
};

const handleTake = async () => {
  try {
    const { tempImagePath } = await take();
    preview({ urls: [tempImagePath] });
    show({ title: '拍摄成功' });
  } catch (e) {
    show({ title: '拍摄失败', icon: 'error' });
  }
};
</script>

<style>
#demo-camera-id {
  position: relative;
  left: auto;
  top: auto;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
}
</style>
