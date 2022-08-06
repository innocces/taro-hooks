<template>
  <demo-content>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="toggleLoading()"
      >切换导航栏Loading状态</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleSetTitle()"
      >设置导航栏标题</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleSetColor()"
      >设置导航栏颜色</nut-button
    >
    <nut-button shape="square" type="primary" block @click="hideButton()"
      >隐藏返回首页按钮</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useNavigationBar } from 'taro-hooks';
import Mock from 'mockjs';

const { setTitle, hideButton, toggleLoading, setColor } = useNavigationBar({
  title: 'Taro-Hooks',
});

const handleSetTitle = () => {
  setTitle(Mock.Random.name());
};

const handleSetColor = () => {
  setColor({
    backgroundColor: Mock.Random.color(),
    frontColor: '#ffffff',
  });
};
</script>
