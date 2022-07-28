import { useTaroRef } from '@tarojs/taro';
import { useUpdateEffect } from '@taro-hooks/ahooks';
import { escapeState } from '@taro-hooks/shared';
import { useVisible } from 'taro-hooks';
import type { Plugin, Timeout } from '../types';
import subscribeReVisible from '../utils/subscribeReVisible';

const usePollingPlugin: Plugin<any, any[]> = (
  fetchInstance,
  { pollingInterval, pollingWhenHidden = true },
) => {
  const timerRef = useTaroRef<Timeout>();
  const unsubscribeRef = useTaroRef<() => void>();
  const documentVisible = useVisible();
  const unsubscribeReVisible = subscribeReVisible(() => {
    if (!pollingWhenHidden && !escapeState(documentVisible)) {
      fetchInstance.refresh();
    }
  });

  const stopPolling = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    unsubscribeRef.current?.();
  };

  useUpdateEffect(() => {
    if (!pollingInterval) {
      stopPolling();
    }
  }, [pollingInterval]);

  if (!pollingInterval) {
    return {};
  }

  return {
    onBefore: () => {
      stopPolling();
    },
    onFinally: () => {
      // if pollingWhenHidden = false && document is hidden, then stop polling and subscribe revisable
      if (!pollingWhenHidden && !escapeState(documentVisible)) {
        unsubscribeRef.current = unsubscribeReVisible;
        return;
      }

      timerRef.current = setTimeout(() => {
        fetchInstance.refresh();
      }, pollingInterval);
    },
    onCancel: () => {
      stopPolling();
    },
  };
};

export default usePollingPlugin;
