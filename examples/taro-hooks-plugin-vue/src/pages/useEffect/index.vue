<template>
  <block>
    <demo-content title="1. without sideEffect">
      <nut-button shape="square" type="primary" block @click="handleClick()">{{
        count
      }}</nut-button>
    </demo-content>

    <demo-content title="2. with sideEffect">
      <view class="control-input">{{
        isOnline === null ? 'Loading...' : isOnline ? 'Online' : 'Offline'
      }}</view>
    </demo-content>
  </block>
</template>

<script lang="ts">
import { showToast } from '@tarojs/taro';
import { useState, useEffect } from '@taro-hooks/core';
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
    const [count, setCount] = useState(0);
    function handleClick() {
      setCount(escapeState(count) + 1);
    }

    useEffect(() => {
      showToast({
        title: 'You clicked' + escapeState(count) + 'times',
        duration: 2000,
      });
    }, [count]);

    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
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
