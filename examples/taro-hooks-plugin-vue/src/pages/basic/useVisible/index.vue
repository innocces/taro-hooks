<template>
  <demo-content>
    <nut-steps direction="vertical" :current="subscribeList.length">
      <nut-step
        v-for="{ timestamp, status } in subscribeList"
        :key="timestamp"
        :title="timestamp + ''"
        :content="'当前状态为:' + status"
        :icon="status ? 'star-fill-n' : 'star-n'"
      ></nut-step>
    </nut-steps>
  </demo-content>
</template>

<script setup lang="ts">
import { useEffect, useState } from '@taro-hooks/core';
import { useVisible } from 'taro-hooks';
import { escapeState } from '@taro-hooks/shared';

const visible = useVisible();
type Item = { timestamp: number; status: boolean };
const [subscribeList, setSubscribeList] = useState<Item[]>([]);

useEffect(() => {
  const currentList = escapeState(subscribeList);
  setSubscribeList([
    ...currentList,
    { timestamp: Date.now(), status: escapeState(visible) },
  ]);
}, [visible]);
</script>
