<template>
  <demo-content>
    <nut-button shape="square" type="primary" class="gap" block @click="show()"
      >展示带初始配置的ActionSheet</nut-button
    >
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleChangeOption()"
      >展示新配置的ActionSheet</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { useActionSheet, useToast } from 'taro-hooks';
import { escapeState } from '@taro-hooks/shared';
import { useEffect } from '@taro-hooks/core';

const { show, tapItem } = useActionSheet({ itemList: ['A', 'B', 'C'] });
const { show: showToast } = useToast({ duration: 2000, mask: true });

useEffect(() => {
  if (escapeState(tapItem)) {
    const { tapIndex, tapItem: item } = escapeState(tapItem);
    showToast({ title: `${tapIndex}/${item}` });
  }
}, [tapItem]);

const handleChangeOption = () => {
  show({
    itemColor: '#C5D9E8',
    itemList: ['taro', 'hooks', 'taro-hooks'],
  });
};
</script>
