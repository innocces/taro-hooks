<template>
  <demo-content>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="toggle()"
      >切换TabBar显示/隐藏</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="toggle(true)"
      >切换TabBar显示/隐藏(动画)</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleToggleRedDot()"
      >随机TabBar 红点 显示/隐藏</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleToggleBadge()"
      >随机TabBar badge 显示/隐藏</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleSetItem()"
      >随机设置TabBar Item</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleSetStyle()"
      >设置TabBar样式</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useTabBar } from 'taro-hooks';
import Mock from 'mockjs';

const { toggleRedDot, toggleBadge, setStyle, setItem, toggle } = useTabBar();

const handleSetStyle = () => {
  setStyle({
    color: Mock.Random.color(),
    selectedColor: Mock.Random.color(),
    backgroundColor: Mock.Random.color(),
  });
};

const handleSetItem = () => {
  setItem({ text: Mock.Random.city() }, Mock.Random.pick([0, 1]));
};

const handleToggleRedDot = () => {
  toggleRedDot(Mock.Random.pick([0, 1]));
};

const handleToggleBadge = () => {
  toggleBadge(Mock.Random.pick([0, 1]), Mock.Random.pick(['serro', undefined]));
};
</script>
