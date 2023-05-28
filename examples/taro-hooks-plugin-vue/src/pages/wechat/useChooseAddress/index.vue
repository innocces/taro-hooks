<template>
  <demo-content>
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="handleChoose()"
      >获取收货地址</nut-button
    >
    <nut-cell-group title="地址信息">
      <nut-cell
        v-for="(value, key) in address"
        :key="key"
        :title="key"
        :desc="value"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useState } from '@taro-hooks/core';
import { useChooseAddress, useModal } from 'taro-hooks';

const choose = useChooseAddress();
const show = useModal({ mask: true, title: '获取结果', showCancel: false });
const [address, setAddress] =
  useState<Taro.chooseAddress.SuccessCallbackResult>();

const handleChoose = async () => {
  let content = '获取成功';
  try {
    const result = await choose();
    setAddress(result);
  } catch (e) {
    content = e.errMsg || e.message;
  }
  show({ content });
};
</script>
