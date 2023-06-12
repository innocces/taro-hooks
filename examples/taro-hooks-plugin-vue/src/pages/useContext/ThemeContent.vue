<template>
  <view class="content-box" :class="theme?.theme">
    <view class="content-title">Welcome</view>
    <view v-if="user?.user?.name">You logged in as {{ user?.user?.name }}</view>
    <nut-button
      v-else
      shape="square"
      type="primary"
      @click="user?.setUser?.({ name: 'Advika' })"
    >
      Log in Advika
    </nut-button>
  </view>
</template>

<script lang="ts">
import { useContext } from '@taro-hooks/core';
import { themeContext, userContext } from './context';

export default {
  setup() {
    const currentThemeContext = useContext(themeContext);
    const currentUserContext = useContext(userContext);
    return {
      theme: currentThemeContext,
      user: currentUserContext,
    };
  },
};
</script>

<style>
.content-box {
  background: white;
  padding: 10px;
  margin-bottom: 5px;
  color: #222;
  border: 1px solid #222;
}
.content-box.dark {
  color: white;
  background: rgb(23, 32, 42);
}
.content-title {
  font-size: 20px;
}
.content-button {
  margin-top: 15px;
}
</style>
