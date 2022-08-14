<template>
  <demo-content>
    <nut-row type="flex" gutter="8" align="center" justify="center">
      <nut-col span="4"
        ><nut-avatar
          size="large"
          :icon="userInfo?.userInfo?.avatarUrl"
        ></nut-avatar
      ></nut-col>
      <nut-col span="20">
        <nut-row type="flex" flex-wrap="wrap" align="center" justify="center">
          <nut-col>昵称: {{ userInfo?.userInfo?.nickName }}</nut-col>
          <nut-col>性别: {{ userInfo?.userInfo?.gender }}</nut-col>
        </nut-row>
      </nut-col>
    </nut-row>
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="handleGetUserInfo()"
      >获取用户信息</nut-button
    >
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @tap="getUserProfile({ lang: 'zh_CN', desc: '仅作为小程序展示使用' })"
      >获取用户信息(包含敏感信息)</nut-button
    >
    <nut-cell-group title="用户信息">
      <nut-cell
        v-for="(value, key) in { ...(userInfo?.userInfo ?? {}), ...userInfo }"
        :key="key"
        :title="key"
        :sub-title="$filters.stringify(value)"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useUserInfo, useLogin, useModal } from 'taro-hooks';

const [userInfo = {}, { getUserInfo, getUserProfile }] = useUserInfo();
const { login } = useLogin();

const show = useModal({ mask: true, title: '获取结果', showCancel: false });

const handleGetUserInfo = async () => {
  let content = '获取成功';
  try {
    await login(true);
    await getUserInfo({ lang: 'zh_CN', withCredentials: true });
  } catch (e) {
    content = e.errMsg || e.message;
  }
  show({ content });
};
</script>
