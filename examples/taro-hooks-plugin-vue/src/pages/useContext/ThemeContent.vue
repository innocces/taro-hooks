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

<script>
import { useTaroContext } from '@tarojs/taro';
import { themeContext, userContext } from './index.vue';

export default {
  setup() {
    const currentThemeContext = useTaroContext(themeContext);
    const currentUserContext = useTaroContext(userContext);
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
  padding: 20px;
  margin-bottom: 10px;
  color: #222;
  border: 1px solid #222;
}
.content-box.dark {
  color: white;
  background: rgb(23, 32, 42);
}
.content-title {
  font-size: 40px;
}
.content-button {
  margin-top: 30px;
}
</style>
