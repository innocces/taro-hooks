<template>
  <block>
    <demo-content title="缓存 & SWR - 自定义缓存">
      <nut-row justify="center">
        <nut-button
          size="small"
          type="primary"
          shape="square"
          block
          @click="toggle()"
        >
          show / hidden
        </nut-button>
      </nut-row>
      <block v-show="state">
        <view v-if="!request.data && request.loading">Loading...</view>
        <template v-else>
          <view>
            Background loading:
            {{ request.loading ? 'true' : 'false' }}
          </view>
          <view>Latest request time: {{ request.data?.time }}</view>
          <view>{{ request.data?.data }}</view>
        </template>
      </block>
    </demo-content>
  </block>
</template>

<script>
import { useRequest } from 'taro-hooks';
import { escapeState } from '@taro-hooks/shared';
import { useToggle } from '@taro-hooks/ahooks';
import { setStorageSync, getStorageSync } from '@tarojs/taro';

import Mock from 'mockjs';

async function getArticle() {
  console.log('cacheKey');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@paragraph()'),
        time: new Date().getTime(),
      });
    }, 1000);
  });
}

const cacheKey = 'setCache-demo';

export default {
  setup() {
    const [state, action] = useToggle(false);
    const request = useRequest(getArticle, {
      cacheKey,
      setCache: (responseData) =>
        setStorageSync(cacheKey, JSON.stringify(responseData)),
      getCache: () => JSON.parse(getStorageSync(cacheKey) || '{}'),
    });

    const toggle = () => {
      // 为了明显一点, vue放在方法里去掉用
      if (!escapeState(state)) {
        escapeState(request).run();
      }

      escapeState(action).toggle();
    };

    return { state, toggle, request };
  },
};
</script>
