<template>
  <demo-content>
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="handleChoose()"
      >获取发票信息</nut-button
    >
    <nut-button
      class="gap"
      shape="square"
      type="primary"
      block
      @click="handleChooseTitle()"
      >获取发票抬头信息</nut-button
    >
    <nut-cell-group title="发票信息">
      <nut-cell
        v-for="(value, key) in invoice"
        :key="key"
        :title="key"
        :desc="value"
      ></nut-cell>
    </nut-cell-group>
  </demo-content>
</template>

<script setup lang="ts">
import { useState } from '@taro-hooks/core';

import { useInvoice, useModal } from 'taro-hooks';

const { choose, chooseTitle } = useInvoice();
const show = useModal({ mask: true, title: '获取结果', showCancel: false });
const [invoice, setInvoice] =
  useState<Taro.chooseInvoice.SuccessCallbackResult>();

const handleChoose = async () => {
  let content = '获取成功';
  try {
    const result = await choose();
    setInvoice(result);
  } catch (e) {
    content = e.errMsg || e.message;
  }
  show({ content });
};

const handleChooseTitle = async () => {
  let content = '获取成功';
  try {
    const result = await chooseTitle();
    setInvoice(result);
  } catch (e) {
    content = e.errMsg || e.message;
  }
  show({ content });
};
</script>
