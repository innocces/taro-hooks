<template>
  <demo-content>
    <nut-cell v-if="!emptyInfo">暂无信息</nut-cell>
    <nut-cell-group v-else>
      <nut-cell
        v-for="(value, key) in accountInfo"
        :key="key"
        :title="'小程序 - ' + key"
        :desc="value"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useAccountInfo } from 'taro-hooks';

const accountInfo = useAccountInfo();

const emptyInfo = Object.keys(accountInfo)?.length;
</script>
