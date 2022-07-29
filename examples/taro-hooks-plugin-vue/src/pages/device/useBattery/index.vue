<template>
  <demo-content>
    <nut-cell-group>
      <nut-cell title="充电与否">
        <template v-slot:link>
          <nut-switch disable :model-value="batteryInfo.isCharging" />
        </template>
      </nut-cell>
      <nut-cell title="电量">
        <nut-progress :percentage="batteryInfo.level" />
      </nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useBattery } from 'taro-hooks';

const batteryInfo = useBattery();
</script>
