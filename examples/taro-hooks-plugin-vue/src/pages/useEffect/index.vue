<template>
  <view>
    <view>1. without sideEffect</view>
    <button @click="handleClick()">{{ count }}</button>
    <view>2. with sideEffect</view>
    <view>{{
      isOnline === null ? 'Loading...' : isOnline ? 'Online' : 'Offline'
    }}</view>
  </view>
</template>

<script>
import { useTaroState, useTaroEffect, showToast } from '@tarojs/taro';
import { escapeState } from '@taro-hooks/shared';

const subsQueue = {};

async function subscribeToFriendStatus(id, statusChange) {
  if (subsQueue[id]) {
    console.warn('alert: already subscribed to friend status', id);
    return;
  }
  subsQueue[id] = setInterval(
    () => statusChange(Boolean(Math.random() > 0.5)),
    1000,
  );
}

async function unsubscribeFromFriendStatus(id) {
  if (!subsQueue[id]) {
    console.warn('alert: not subscribed to friend status', id);
    return;
  }
  clearInterval(subsQueue[id]);
  delete subsQueue[id];
}

const chatAPI = {
  subscribeToFriendStatus,
  unsubscribeFromFriendStatus,
};

export default {
  setup() {
    const [count, setCount] = useTaroState(0);
    function handleClick() {
      setCount(escapeState(count) + 1);
    }

    useTaroEffect(() => {
      showToast({
        title: 'You clicked' + escapeState(count) + 'times',
        duration: 2000,
      });
    }, [count]);

    const [isOnline, setIsOnline] = useTaroState(null);

    useTaroEffect(() => {
      chatAPI.subscribeToFriendStatus(1, setIsOnline);

      return function cleanup() {
        chatAPI.unsubscribeFromFriendStatus(1);
      };
    }, [isOnline]);

    return {
      handleClick,
      count,
      isOnline,
    };
  },
};
</script>
