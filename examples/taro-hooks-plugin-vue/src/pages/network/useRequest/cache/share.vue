<template>
  <block>
    <demo-content title="缓存 & SWR - 数据共享">
      <template v-for="(request, index) in [request1, request2]" :key="index">
        <view>Article {{ index + 1 }}</view>
        <view v-if="!request.data && request.loading">Loading...</view>
        <template v-else>
          <view>
            Background loading:
            {{ request.loading ? 'true' : 'false' }}
          </view>
          <nut-row justify="center">
            <nut-button
              size="small"
              type="primary"
              shape="square"
              block
              @click="request.refresh()"
            >
              更新
            </nut-button>
          </nut-row>
          <view>Latest request time: {{ request.data?.time }}</view>
          <view>{{ request.data?.data }}</view>
        </template>
      </template>
    </demo-content>
  </block>
</template>

<script>
import { useRequest } from 'taro-hooks';

import Mock from 'mockjs';

async function getArticle() {
  console.log('cacheKey-share');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@paragraph()'),
        time: new Date().getTime(),
      });
    }, 3000);
  });
}

export default {
  setup() {
    const request1 = useRequest(getArticle, {
      cacheKey: 'cacheKey-share',
    });
    const request2 = useRequest(getArticle, {
      cacheKey: 'cacheKey-share',
    });

    return { request1, request2 };
  },
};
</script>
