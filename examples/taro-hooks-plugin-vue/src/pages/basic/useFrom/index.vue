<template>
  <demo-content>
    <nut-cell title="来源页面" :sub-title="$filters.stringify(from)"></nut-cell>
  </demo-content>
</template>

<script setup lang="ts">
import { useFrom } from 'taro-hooks';

const from = useFrom();
</script>
