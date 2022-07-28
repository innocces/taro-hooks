<template>
  <block>
    <demo-content title="缓存 & SWR - 删除缓存">
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
      <nut-row
        justify="center"
        v-for="cacheKey in cacheKeyList"
        :key="cacheKey"
      >
        <nut-button
          size="small"
          type="primary"
          shape="square"
          block
          @click="clear(cacheKey)"
        >
          clear {{ cacheKey }}
        </nut-button>
      </nut-row>
      <nut-row justify="center">
        <nut-button
          size="small"
          type="primary"
          shape="square"
          block
          @click="clear(['Article2', 'Article3'])"
        >
          clear Article2 and Article3
        </nut-button>
      </nut-row>
      <nut-row justify="center">
        <nut-button
          size="small"
          type="primary"
          shape="square"
          block
          @click="clear()"
        >
          clear all
        </nut-button>
      </nut-row>
      <template
        v-for="(request, index) in [request1, request2, request3]"
        :key="index"
      >
        <view>Article {{ index + 1 }}</view>
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
      </template>
    </demo-content>
  </block>
</template>

<script>
import { useRequest, clearCache } from 'taro-hooks';
import { showToast } from '@tarojs/taro';
import { useToggle } from '@taro-hooks/ahooks';
import { escapeState } from '@taro-hooks/shared';

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
    const [state, action] = useToggle(false);
    const cacheKeyList = ['Article1', 'Article2', 'Article3'];
    const request1 = useRequest(getArticle, {
      cacheKey: cacheKeyList[0],
    });
    const request2 = useRequest(getArticle, {
      cacheKey: cacheKeyList[1],
    });
    const request3 = useRequest(getArticle, {
      cacheKey: cacheKeyList[2],
    });

    const clear = (cacheKey) => {
      clearCache(cacheKey);
      const tips = Array.isArray(cacheKey) ? cacheKey.join('、') : cacheKey;
      showToast({
        title: `Clear ${tips ?? 'All'} finished`,
        icon: 'success',
        mask: true,
      });
    };

    const toggle = () => {
      // 为了明显一点, vue放在方法里去掉用
      if (!escapeState(state)) {
        escapeState(request1).run();
        escapeState(request2).run();
        escapeState(request3).run();
      }

      escapeState(action).toggle();
    };

    return { state, request1, request2, request3, cacheKeyList, clear, toggle };
  },
};
</script>
