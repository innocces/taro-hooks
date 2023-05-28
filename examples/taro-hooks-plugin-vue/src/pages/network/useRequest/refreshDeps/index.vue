<template>
  <demo-content title="依赖刷新">
    <view>School: {{ request.loading ? 'Loading...' : request.data }}</view>
    <nut-row justify="center">
      <nut-button
        :loading="request.loading"
        size="small"
        type="primary"
        shape="square"
        block
        @click="setOpen(true)"
      >
        userId: {{ userId }}(click me!)
      </nut-button>
    </nut-row>
    <nut-actionsheet
      v-model:visible="open"
      :menu-items="menuItems"
      @choose="handleChoose($event)"
    ></nut-actionsheet>
  </demo-content>
</template>

<script>
import { useRequest } from 'taro-hooks';
import { useState } from '@taro-hooks/core';
import { escapeState } from '@taro-hooks/shared';

const userSchool = (id) => {
  switch (id) {
    case '1':
      return 'Tsinghua University';
    case '2':
      return 'Beijing University';
    case '3':
      return 'Zhejiang University';
    default:
      return '';
  }
};

async function getUserSchool(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userSchool(userId));
    }, 1000);
  });
}

export default {
  setup() {
    const menuItems = [
      { value: '1', name: 'user 1' },
      { value: '2', name: 'user 2' },
      { value: '3', name: 'user 3' },
    ];
    const [userId, setUserId] = useState('1');
    const [open, setOpen] = useState(false);
    const request = useRequest(() => getUserSchool(escapeState(userId)), {
      refreshDeps: [userId],
    });

    const handleChoose = (item) => {
      setUserId(item.value);
      setOpen(false);
    };

    return { request, userId, open, handleChoose, menuItems, setOpen };
  },
};
</script>
