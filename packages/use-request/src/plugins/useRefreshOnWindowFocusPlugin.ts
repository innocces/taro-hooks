import { useDidShow, useDidHide } from '@tarojs/taro';
import { useEffect, useRef } from '@taro-hooks/core';
import { useUnmount } from '@taro-hooks/ahooks';
import type { Plugin } from '../types';
import limit from '../utils/limit';
import isOnline from '../utils/isOnline';

const listeners: any[] = [];

function subscribe(listener: () => void) {
  listeners.push(listener);
  return function unsubscribe() {
    const index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
}

const useRefreshOnWindowFocusPlugin: Plugin<any, any[]> = (
  fetchInstance,
  { refreshOnWindowFocus, focusTimespan = 5000 },
) => {
  const unsubscribeRef = useRef<() => void>();
  const visible = useRef<boolean>(true);

  const stopSubscribe = () => {
    unsubscribeRef.current?.();
  };

  const subscribeFocus = async () => {
    const online = await isOnline();
    if (visible.current || !online) return;
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  };

  useDidShow(() => {
    visible.current = true;
    subscribeFocus();
  });

  useDidHide(() => {
    visible.current = false;
    subscribeFocus();
  });

  useEffect(() => {
    if (refreshOnWindowFocus) {
      const limitRefresh = limit(
        fetchInstance.refresh.bind(fetchInstance),
        focusTimespan,
      );
      unsubscribeRef.current = subscribe(() => {
        limitRefresh();
      });
    }
    return () => {
      stopSubscribe();
    };
  }, [refreshOnWindowFocus, focusTimespan]);

  useUnmount(() => {
    stopSubscribe();
  });

  return {};
};

export default useRefreshOnWindowFocusPlugin;
