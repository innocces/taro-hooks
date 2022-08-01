<template>
  <demo-content>
    <nut-cell
      v-for="(value, key) in systemInfo"
      :key="key"
      :title="key"
      :sub-title="$filters.stringify(value)"
    ></nut-cell>
  </demo-content>
</template>

<script setup lang="ts">
import { useSystemInfo } from 'taro-hooks';

const systemInfo = useSystemInfo();
</script>
