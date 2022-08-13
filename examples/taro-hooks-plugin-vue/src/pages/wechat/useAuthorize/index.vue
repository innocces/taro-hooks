<template>
  <demo-content>
    <nut-cell v-if="!emptyInfo">暂无信息</nut-cell>
    <template v-else v-for="auth in [authSetting, subscriptionsSetting]">
      <nut-cell-group
        v-for="(value, key) in auth"
        :title="'授权 - ' + key"
        :key="key"
      >
        <nut-cell
          v-if="['string', 'boolean'].includes(typeof value)"
          :title="'授权 - ' + key"
          :desc="String(value)"
        ></nut-cell>
        <nut-cell
          v-else
          v-for="(subValue, subKey) in value"
          :key="subKey"
          :title="'授权 - ' + subKey"
          :desc="String(subValue)"
        ></nut-cell>
      </nut-cell-group>
    </template>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="open(true)"
      >打开设置</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleAuth()"
      >授权</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useAuthorize, useModal } from 'taro-hooks';

const show = useModal({ title: '授权结果', mask: true, showCancel: false });

const { authSetting, subscriptionsSetting, authorize, open } =
  useAuthorize(true);

const emptyInfo = Object.keys(authSetting)?.length;

const handleAuth = async () => {
  let content = '授权成功';
  try {
    await authorize('scope.userInfo');
  } catch (e) {
    content = '授权失败';
  }
  show({ content });
};
</script>
