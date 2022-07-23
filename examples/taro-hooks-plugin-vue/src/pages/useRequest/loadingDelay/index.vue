<template>
  <block>
    <demo-content title="loading Delay">
      <nut-button
        :loading="withLoadingDelayAction.loading"
        size="small"
        type="primary"
        shape="square"
        block
        @click="trigger()"
      >
        run
      </nut-button>
      <view>Username: {{ action.loading ? 'Loading...' : action.data }}</view>
      <view
        >Username:
        {{
          withLoadingDelayAction.loading
            ? 'Loading...'
            : withLoadingDelayAction.data
        }}</view
      >
    </demo-content>
  </block>
</template>

<script>
import { useRequest } from 'taro-hooks';
import { escapeState } from '@taro-hooks/shared';

import Mock from 'mockjs';

function getUsername() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 200);
  });
}
export default {
  setup() {
    const action = useRequest(getUsername);
    const withLoadingDelayAction = useRequest(getUsername, {
      loadingDelay: 300,
    });

    const trigger = () => {
      escapeState(action).run();
      escapeState(withLoadingDelayAction).run();
    };

    return { action, withLoadingDelayAction, trigger };
  },
};
</script>
