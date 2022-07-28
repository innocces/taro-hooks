<template>
  <block>
    <demo-content title="缓存 & SWR - 参数缓存">
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
          <nut-input
            placeholder="keyword"
            @update:model-value="setKeyword($event)"
          >
            <template #button>
              <nut-button
                :loading="request.loading"
                size="small"
                type="primary"
                shape="square"
                @click="request.run(keyword)"
                >Get</nut-button
              >
            </template>
          </nut-input>
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

import Mock from 'mockjs';

async function getArticle(keyword) {
  console.log('cacheKey-demo', keyword);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@paragraph()'),
        time: new Date().getTime(),
      });
    }, 1000);
  });
}

export default {
  setup() {
    const [state, action] = useToggle(false);
    const request = useRequest(getArticle, {
      cacheKey: 'cacheKey-demo',
    });
    const [keyword, setKeyword] = useTaroState(
      escapeState(request).params[0] || '',
    );

    const toggle = () => {
      // 为了明显一点, vue放在方法里去掉用
      if (!escapeState(state)) {
        escapeState(request).run();
      }

      escapeState(action).toggle();
    };

    return { state, toggle, request, keyword, setKeyword };
  },
};
</script>
