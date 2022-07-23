<template>
  <block>
    <demo-content title="节流">
      <nut-row>
        <nut-input
          placeholder="Search Emails"
          @update:model-value="request.run($event)"
        />
      </nut-row>
      <view v-if="request.loading">Loading...</view>
      <template v-else>
        <view v-for="item in request.data" :key="item">{{ item }}</view>
      </template>
    </demo-content>
  </block>
</template>

<script>
import { useRequest } from 'taro-hooks';

import Mock from 'mockjs';

async function getEmail(search) {
  console.log('throttle getEmail', search);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock({ 'data|5': ['@email()'] }).data);
    }, 300);
  });
}

export default {
  setup() {
    const request = useRequest(getEmail, {
      throttleWait: 1000,
      manual: true,
    });

    return { request };
  },
};
</script>
