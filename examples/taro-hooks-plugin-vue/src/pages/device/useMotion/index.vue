<template>
  <demo-content>
    <nut-button
      shape="square"
      type="primary"
      class="gap"
      block
      @click="handleListen()"
      >增加一次监听并取消</nut-button
    >
    <nut-button shape="square" type="primary" class="gap" block @click="stop()"
      >停止所有</nut-button
    >

    <nut-cell-group title="方向信息">
      <nut-cell
        v-for="(value, key) in motion"
        :key="key"
        :title="key"
        :sub-title="$filters.stringify(value)"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useModal, useMotion } from 'taro-hooks';

const [motion, { start, stop, add, off }] = useMotion(true);

console.log(motion);

const show = useModal({
  title: 'useMotion',
  showCancel: false,
  mask: true,
});

const customListen = (result) => {
  show({
    content: JSON.stringify(result),
  });
  off(customListen);
};

const handleListen = async () => {
  try {
    await add(customListen);
  } catch (e) {
    show({ content: '监听失败' });
  }
};
</script>
