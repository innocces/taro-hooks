import {
  useTaroEffect,
  useTaroRef,
  useDidShow,
  useDidHide,
} from '@tarojs/taro';
import { useUnmount } from '@taro-hooks/ahooks';
import { escapeState } from '@taro-hooks/shared';
import { useVisible } from 'taro-hooks';
import type { Plugin } from '../types';
import limit from '../utils/limit';
import isOnline from '../utils/isOnline';

const listeners: any[] = [];

function subscribe(listener: () => void) {
  listeners.push(listener);
  return function unsubscribe() {
    const index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

const useRefreshOnWindowFocusPlugin: Plugin<any, any[]> = (
  fetchInstance,
  { refreshOnWindowFocus, focusTimespan = 5000 },
) => {
  const unsubscribeRef = useTaroRef<() => void>();
  const visible = useVisible();

  const stopSubscribe = () => {
    unsubscribeRef.current?.();
  };

  const subscribeFocus = async () => {
    const online = await isOnline();
    if (!escapeState(visible) || !online) return;
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  };

  useDidShow(() => {
    subscribeFocus();
  });

  useDidHide(() => {
    subscribeFocus();
  });

  useTaroEffect(() => {
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
  }, [refreshOnWindowFocus, focusTimespan, visible]);

  useUnmount(() => {
    stopSubscribe();
  });

  return {};
};

export default useRefreshOnWindowFocusPlugin;
