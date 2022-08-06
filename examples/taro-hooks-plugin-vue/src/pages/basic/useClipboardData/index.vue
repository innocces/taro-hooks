<template>
  <demo-content>
    <view>请打开F12查看console</view>
    <nut-cell
      v-for="(value, key) in SETTYPE"
      :key="key"
      :title="key"
      :sub-title="$filters.stringify(value)"
      @click="set(value)"
    ></nut-cell>
    <nut-button block @click="handleGet()">打印当前剪贴板</nut-button>
  </demo-content>
</template>

<script setup lang="ts">
import { useClipboardData } from 'taro-hooks';

const SETTYPE = {
  number: 1,
  boolean: true,
  object: { name: 'taro-hooks' },
  function: function taro() {},
  string: 'taro-hooks',
  undefined: undefined,
  null: null,
  date: new Date(),
};

const [clipboardData, { set, get }] = useClipboardData();

const handleGet = async () => {
  const clipboard = await get();
  console.log('当前剪贴板内容:', clipboardData, clipboard);
};
</script>
