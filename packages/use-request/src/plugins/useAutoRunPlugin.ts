import { useRef } from '@taro-hooks/core';
import { useUpdateEffect } from '@taro-hooks/ahooks';
import { escapeState, FRAMEWORK } from '@taro-hooks/shared';
import type { Plugin } from '../types';

// support refreshDeps & ready
const useAutoRunPlugin: Plugin<any, any[]> = (
  fetchInstance,
  {
    manual,
    ready = true,
    defaultParams = [],
    refreshDeps = [],
    refreshDepsAction,
  },
) => {
  const hasAutoRun = useRef(false);
  hasAutoRun.current = false;

  useUpdateEffect(() => {
    if (!manual && escapeState(ready)) {
      hasAutoRun.current = true;
      fetchInstance.run(...defaultParams);
    }
  }, [ready]);

  useUpdateEffect(() => {
    if (hasAutoRun.current) {
      return;
    }

    if (!manual) {
      hasAutoRun.current = true;
      if (refreshDepsAction) {
        refreshDepsAction();
      } else {
        // due to vue not run every time for plugins. so remark hasAutoRun be folse
        fetchInstance.refresh();
        if (FRAMEWORK === 'vue') {
          hasAutoRun.current = false;
        }
      }
    }
  }, [...refreshDeps]);

  return {
    onBefore: () => {
      if (!escapeState(ready)) {
        return {
          stopNow: true,
        };
      }
    },
  };
};

useAutoRunPlugin.onInit = ({ ready = true, manual }) => {
  return {
    loading: !manual && escapeState(ready),
  };
};

export default useAutoRunPlugin;
