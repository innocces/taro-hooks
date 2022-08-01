<template>
  <demo-content>
    <nut-cell
      v-for="(value, key) in windowInfo"
      :key="key"
      :title="key"
      :sub-title="$filters.stringify(value)"
    ></nut-cell>
  </demo-content>
</template>

<script setup lang="ts">
import { useWindowInfo } from 'taro-hooks';

const windowInfo = useWindowInfo();
</script>
