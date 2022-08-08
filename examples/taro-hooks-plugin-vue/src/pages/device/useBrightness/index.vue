<template>
  <demo-content>
    <nut-cell-group>
      <nut-cell title="当前亮度">
        <nut-progress :percentage="(brightness || 0) * 100" />
      </nut-cell>
      <nut-cell title="设置亮度">
        <nut-range
          :min="0"
          :max="1"
          :step="0.1"
          v-model="rangeBrightness"
          @change="setBrightness($event)"
        ></nut-range>
      </nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useBrightness } from 'taro-hooks';
import { useTaroState } from '@tarojs/taro';

const [rangeBrightness] = useTaroState<string>();

const [brightness, setBrightness] = useBrightness();
</script>
