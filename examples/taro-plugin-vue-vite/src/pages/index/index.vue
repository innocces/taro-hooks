<template>
  <view class="wrapper">
    <image class="logo" :src="Icon" />
    <text class="title">为Taro而设计的Hooks Library</text>
    <text class="desc">
      目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks!
      并结合ahook适配Taro!
    </text>
    <view class="list">
      <text class="label">运行环境</text>
      <text class="note">{{ env }}</text>
    </view>
    <button class="button" @tap="setTitle('Taro Hooks Nice!')">设置标题</button>
    <button class="button" @tap="handleModal()">使用Modal</button>
  </view>
</template>

<script setup>
import { useEnv, useNavigationBar, useModal, useToast } from 'taro-hooks';
import Icon from '@root/public/image/hook.png';

const env = useEnv();
const { setTitle } = useNavigationBar({ title: 'Taro Hooks' });
const showModal = useModal({
  title: 'Taro Hooks Canary!',
  showCancel: false,
  confirmColor: '#8c2de9',
  confirmtext: '支持一下',
});
const { show } = useToast({ mask: true });

const handleModal = () => {
  showModal({ content: '不如给一个star⭐️!' }).then(() => {
    show({ title: '点击了支持!' });
  });
};
</script>

<style>
page {
  background-color: white;
  padding: 14px;
  box-sizing: border-box;
  color: #333;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.logo {
  display: block;
  width: 270px;
  height: 270px;
  margin: 0 auto;
}

.title,
.desc {
  text-align: center;
  font-size: 32px;
}

.desc {
  margin: 20px 0;
  font-size: 28px;
  color: rgba(0, 0, 0, 0.85);
}

.list {
  padding: 24px 0;
  font-size: 32px;
  display: flex;
  align-items: center;
  border-color: rgba(51, 51, 51, 0.1);
  border-style: solid;
  border-width: 1px 0 1px 0;
}

.list:not(:first-child) {
  border-top-width: 0;
}

.label {
  flex: 0.4;
}

.button {
  display: block;
  width: 100%;
  background-color: transparent;
  border-radius: 2px;
  margin-top: 20px;
}
</style>
