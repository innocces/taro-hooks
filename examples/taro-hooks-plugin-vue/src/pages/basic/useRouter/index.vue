<template>
  <demo-content>
    <nut-cell
      title="来源页面"
      :sub-title="$filters.stringify(routerInfo?.from?.route)"
    ></nut-cell>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="switchTab('pages/about/index')"
      >跳转TabBar</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="relaunch('/pages/network/useRequest/index')"
    >
      重新打开一个页面</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="redirect('/pages/network/useOnline/index')"
    >
      重定向页面</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="
        navigate('/pages/wechat/useLaunchOptions/index', { from: 'useRouter' })
      "
    >
      跳转页面</nut-button
    >
    <nut-button shape="square" type="primary" class="gap" block @click="back()">
      返回上一页</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="
        navigate(
          '/pages/index/index',
          { appId: 'wxce815e33b0e06cf5', extraData: { from: 'taro-hooks' } },
          true,
        )
      "
    >
      跳转小程序</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="
        navigate(
          '/pages/index/index',
          { appId: 'wxce815e33b0e06cf5', extraData: { from: 'taro-hooks' } },
          true,
          true,
        )
      "
    >
      半屏打开小程序</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="back({}, true)"
    >
      返回小程序</nut-button
    >
    <nut-button shape="square" type="primary" class="gap" block @click="exit()">
      退出小程序</nut-button
    >
    <nut-cell
      title="当前页面"
      :sub-title="$filters.stringify(routerInfo)"
    ></nut-cell>
  </demo-content>
</template>

<script setup lang="ts">
import { useRouter } from 'taro-hooks';

const [routerInfo, { navigate, switchTab, relaunch, redirect, back, exit }] =
  useRouter();
</script>
