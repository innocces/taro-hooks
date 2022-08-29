<template>
  <demo-content>
    <nut-cell-group title="适配器">
      <nut-cell
        v-for="(value, key) in adapter ?? {}"
        :key="key"
        :title="key"
        :sub-title="$filters.stringify(value)"
      ></nut-cell>
    </nut-cell-group>
    <nut-divider>设备</nut-divider>
    <nut-cell-group
      v-for="(item, key) in devices"
      :key="key"
      :title="item.name"
    >
      <nut-cell
        v-for="(value, itemKey) in item"
        :key="itemKey"
        :title="itemKey"
        :sub-title="$filters.stringify(value)"
      ></nut-cell>
    </nut-cell-group>
    <nut-divider>连接设备</nut-divider>
    <nut-cell-group
      v-for="(item, key) in connectedDevices"
      :key="key"
      :title="item.name"
    >
      <nut-cell
        v-for="(value, itemKey) in item"
        :key="itemKey"
        :title="itemKey"
        :sub-title="$filters.stringify(value)"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useBluetooth } from 'taro-hooks';

const [{ devices, connectedDevices, adapter }] = useBluetooth();
</script>
