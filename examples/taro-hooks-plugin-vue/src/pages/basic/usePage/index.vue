<template>
  <demo-content>
    <nut-cell title="路由栈长度" :sub-title="stackLength"></nut-cell>
    <nut-cell
      title="当前页面信息"
      :sub-title="$filters.stringify(pageInstance)"
    ></nut-cell>
  </demo-content>
</template>

<script setup lang="ts">
import { usePage } from 'taro-hooks';

const [stackLength, { pageInstance = {} }] = usePage();
</script>
