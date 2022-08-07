<template>
  <demo-content>
    <nut-cell-group>
      <nut-cell
        v-for="(value, key) in launchOptions"
        :key="key"
        :title="key"
        :desc="value"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useLaunchOptions } from 'taro-hooks';

const launchOptions = useLaunchOptions();
</script>
