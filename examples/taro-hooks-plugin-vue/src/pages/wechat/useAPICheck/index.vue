<template>
  <demo-content>
    <nut-button shape="square" type="primary" class="gap" block @click="show()"
      >选择示例API测试</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useTaroEffect } from '@tarojs/taro';
import { escapeState } from '@taro-hooks/shared';
import { useAPICheck, useActionSheet, useToast } from 'taro-hooks';

const selection = [
  'getSystemInfoSync.return.screenWidth',
  'showToast.object.image',
  'onCompassChange.callback.direction',
  'request.object.method.GET',
  'live-player',
  'button.open-type.contact',
];

const { tapItem, show } = useActionSheet({
  alertText: '示例API',
  itemList: selection,
});
const [canIUse, setAPI] = useAPICheck(selection[0]);
const { show: showToast } = useToast({ title: selection[0] });

useTaroEffect(() => {
  const currentTapItem = escapeState(tapItem);
  if (currentTapItem) {
    setAPI(currentTapItem.tapItem);
  }
}, [tapItem]);

useTaroEffect(() => {
  const currentTapItem = escapeState(tapItem);
  const currentCanIUse = escapeState(canIUse);
  if (currentTapItem) {
    showToast({
      title: currentTapItem.tapItem,
      icon: currentCanIUse ? 'success' : 'error',
    });
  }
}, [tapItem, canIUse]);
</script>
