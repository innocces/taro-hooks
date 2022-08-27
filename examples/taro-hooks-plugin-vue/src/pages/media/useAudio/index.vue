<template>
  <demo-content>
    <nut-button shape="square" type="primary" class="gap" block @click="start()"
      >开始录制</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleStop()"
      >结束录制</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      :disabled="!audioSource?.tempFilePath"
      @click="play(audioSource?.tempFilePath)"
      >播放音频</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      :disabled="!audioSource?.tempFilePath"
      @click="audioContext?.stop?.()"
      >停止播放音频</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useTaroState } from '@tarojs/taro';
import { useToast, useRecord, useAudio } from 'taro-hooks';

const [audioSource, setAudioSource] =
  useTaroState<Taro.RecorderManager.OnStopCallbackResult>();

const [audioContext, { play }] = useAudio();
const [, { start, stop }] = useRecord();

const { show } = useToast({
  title: 'useVoice',
  duration: 500,
  mask: true,
});

const handleStop = async () => {
  try {
    show({ title: '正在停止', duration: 20000000 });
    const result = await stop();
    setAudioSource(result);

    show({ title: '停止录制成功' });
  } catch (e) {
    show({ title: '停止录制失败', icon: 'error' });
  }
};
</script>
