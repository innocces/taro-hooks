<template>
  <demo-content>
    <nut-cell-group>
      <nut-cell title="是否可用WebP">
        <template v-slot:link>
          <nut-switch disable :model-value="canIUseWebP" />
        </template>
      </nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useWebp } from 'taro-hooks';

const canIUseWebP = useWebp();
</script>
