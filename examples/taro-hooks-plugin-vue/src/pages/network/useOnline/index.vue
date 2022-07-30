<template>
  <demo-content>
    <nut-cell-group>
      <nut-cell title="当前网络状态">
        <template v-slot:link>
          <nut-switch disable :model-value="online" />
        </template>
      </nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useOnline } from 'taro-hooks';

const online = useOnline();
</script>
