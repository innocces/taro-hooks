<template>
  <demo-content>
    <nut-cell v-if="!emptyInfo">暂无信息</nut-cell>
    <nut-cell-group v-else>
      <nut-cell
        v-for="(value, key) in rect"
        :key="key"
        :title="'位置 - ' + key"
        :desc="$filters.stringify(value)"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useMenuButtonBoundingClientRect } from 'taro-hooks';

const rect = useMenuButtonBoundingClientRect();

const emptyInfo = Object.keys(rect)?.length;
</script>
