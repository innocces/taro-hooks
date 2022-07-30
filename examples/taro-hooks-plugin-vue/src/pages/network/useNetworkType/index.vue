<template>
  <demo-content>
    <nut-radiogroup v-model="networkType">
      <nut-radio
        v-for="(value, key) in NETWORKTYPE"
        :key="key"
        :disabled="value !== networkType"
        :label="value"
        shape="button"
        >网络类型: {{ value }}</nut-radio
      >
    </nut-radiogroup>
  </demo-content>
</template>

<script setup lang="ts">
import { useTaroEffect, showToast } from '@tarojs/taro';
import { useNetworkType } from 'taro-hooks';
import { escapeState } from '@taro-hooks/shared';
// @ts-ignore
import { NETWORKTYPE } from '@root/public/constant';

const networkType = useNetworkType();

useTaroEffect(() => {
  showToast({
    title: `当前网络类型为: ${escapeState(networkType)}`,
    icon: 'none',
    mask: true,
  });
}, [networkType]);
</script>
