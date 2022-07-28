<template>
  <demo-content>
    <nut-radiogroup v-model="env">
      <nut-radio
        v-for="(value, key) in ENV_TYPE"
        :key="key"
        :disabled="value !== env"
        :label="value"
        shape="button"
        >环境值: {{ value }}</nut-radio
      >
    </nut-radiogroup>
  </demo-content>
</template>

<script setup lang="ts">
import { ENV_TYPE, useTaroEffect, showToast } from '@tarojs/taro';
import { useEnv } from 'taro-hooks';

const env = useEnv();

useTaroEffect(() => {
  showToast({
    title: `当前环境: ${env}`,
    icon: 'none',
    mask: true,
  });
}, []);
</script>
