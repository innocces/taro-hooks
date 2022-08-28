<template>
  <demo-content>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="set(eventName, listener)"
      >设置监听</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      block
      class="gap"
      @click="trigger(eventName)"
      >触发监听</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      block
      class="gap"
      @click="setOnce(eventOneceName, listener)"
      >设置监听(仅触发一次)</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      block
      class="gap"
      @click="trigger(eventOneceName, 'once')"
      >触发监听(仅触发一次)</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      block
      class="gap"
      @click="off(eventName)"
      >移除监听</nut-button
    >
    <nut-button shape="square" type="primary" block class="gap" @click="clear()"
      >清除所有监听</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useEvent, useModal } from 'taro-hooks';

const show = useModal({ title: 'useEvent', showCancel: false, mask: true });
const { set, setOnce, off, clear, trigger } = useEvent('useEvent');

const eventName = 'event';
const eventOneceName = 'event-once';

const listener = (params) => {
  show({ content: `事件触发成功: ${String(params)}` });
};
</script>
