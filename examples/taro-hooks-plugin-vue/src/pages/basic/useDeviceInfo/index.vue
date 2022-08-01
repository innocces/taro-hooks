<template>
  <demo-content>
    <nut-cell
      v-for="(value, key) in deviceInfo"
      :key="key"
      :title="key"
      :sub-title="$filters.stringify(value)"
    ></nut-cell>
  </demo-content>
</template>

<script setup lang="ts">
import { useDeviceInfo } from 'taro-hooks';

const deviceInfo = useDeviceInfo();
</script>
