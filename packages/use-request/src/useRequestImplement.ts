import {
  useLatest,
  useMount,
  useUnmount,
  useUpdate,
  useMemoizedFn,
} from '@taro-hooks/ahooks';
import { useTaroMemo } from '@tarojs/taro';
import { escapeState, FRAMEWORK } from '@taro-hooks/shared';

import Fetch from './Fetch';
import type { Options, Plugin, Result, Service } from './types';

function useRequestImplement<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams> = {},
  plugins: Plugin<TData, TParams>[] = [],
) {
  const { manual = false, ...rest } = options;

  const fetchOptions = {
    manual,
    ...rest,
  };

  const serviceRef = useLatest(service);

  const update = useUpdate();

  const fetchInstance = useTaroMemo(() => {
    const initState = plugins
      .map((p) => p?.onInit?.(fetchOptions))
      .filter(Boolean);

    const fetch = new Fetch<TData, TParams>(
      serviceRef,
      fetchOptions,
      update,
      Object.assign({}, ...initState),
    );

    return fetch;
  }, []);

  // react can not call hooks in other hooks. we use env to fix it
  if (FRAMEWORK === 'react') {
    fetchInstance.options = fetchOptions;
    // run all plugins hooks
    fetchInstance.pluginImpls = plugins.map((p) =>
      p(fetchInstance, fetchOptions),
    );
  } else if (FRAMEWORK === 'vue') {
    // TODO: maybe find a better way to hold reactive
    // @ts-ignore
    fetchInstance.value.options = fetchOptions;
    // run all plugins hooks
    // @ts-ignore
    fetchInstance.value.pluginImpls = plugins.map((p) =>
      // @ts-ignore
      p(fetchInstance.value, fetchOptions),
    );
  }

  useMount(() => {
    if (!manual) {
      // useCachePlugin can set fetchInstance.state.params from cache when init
      const instance = escapeState(fetchInstance);
      const params = instance.state.params || options.defaultParams || [];
      // @ts-ignore
      instance.run(...params);
    }
  });

  useUnmount(() => {
    escapeState(fetchInstance)?.cancel?.();
  });

  // due to vue reactive, need reduce single for useMemo
  // ugly
  const vueRefResult = useTaroMemo(
    () => ({
      loading: escapeState(fetchInstance).state.loading,
      data: escapeState(fetchInstance).state.data,
      error: escapeState(fetchInstance).state.error,
      params: escapeState(fetchInstance).state.params || [],
      cancel: escapeState(fetchInstance).cancel.bind(
        escapeState(fetchInstance),
      ),
      refresh: escapeState(fetchInstance).refresh.bind(
        escapeState(fetchInstance),
      ),
      refreshAsync: escapeState(fetchInstance).refreshAsync.bind(
        escapeState(fetchInstance),
      ),
      run: escapeState(fetchInstance).run.bind(escapeState(fetchInstance)),
      runAsync: escapeState(fetchInstance).runAsync.bind(
        escapeState(fetchInstance),
      ),
      mutate: escapeState(fetchInstance).mutate.bind(
        escapeState(fetchInstance),
      ),
    }),
    [fetchInstance],
  );

  if (FRAMEWORK === 'vue') {
    return vueRefResult as Result<TData, TParams>;
  }

  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance)),
    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),
    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),
    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),
    mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance)),
  } as Result<TData, TParams>;
}

export default useRequestImplement;
