<template>
  <demo-content>
    <nut-cell v-if="!emptyInfo">暂无信息</nut-cell>
    <template v-else>
      <nut-cell-group
        v-for="(value, key) in accountInfo"
        :title="'小程序 - ' + key"
        :key="key"
      >
        <nut-cell
          v-if="typeof value === 'string'"
          :title="'小程序 - ' + key"
          :desc="value"
        ></nut-cell>
        <nut-cell
          v-else
          v-for="(subValue, subKey) in value"
          :key="subKey"
          :title="'小程序 - ' + subKey"
          :desc="subValue"
        ></nut-cell>
      </nut-cell-group>
    </template>
  </demo-content>
</template>

<script setup lang="ts">
import { useAccountInfo } from 'taro-hooks';

const accountInfo = useAccountInfo();

const emptyInfo = Object.keys(accountInfo)?.length;
</script>
