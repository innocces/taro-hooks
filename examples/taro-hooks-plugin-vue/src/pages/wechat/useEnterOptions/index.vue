<template>
  <demo-content>
    <nut-cell-group>
      <nut-cell
        v-for="(value, key) in enterOptions"
        :key="key"
        :title="key"
        :desc="value"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useEnterOptions } from 'taro-hooks';

const enterOptions = useEnterOptions();
</script>
