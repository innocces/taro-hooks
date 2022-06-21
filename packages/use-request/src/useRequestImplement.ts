import {
  useCreation,
  useLatest,
  useMemoizedFn,
  useMount,
  useUnmount,
  useUpdate,
} from '@taro-hooks/ahooks';
import { useTaroMemo } from '@tarojs/taro';
import { escapeState } from '@taro-hooks/shared';

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
    fetch.options = fetchOptions;
    // run all plugins hooks
    fetch.pluginImpls = plugins.map((p) => p(fetchInstance, fetchOptions));

    return fetch;
  }, []);

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
    escapeState(fetchInstance).cancel();
  });

  // due to vue reactive, need reduce single for useMemo
  const loading = useTaroMemo(() => {
    return escapeState(fetchInstance).state.loading;
  }, [fetchInstance]);
  const data = useTaroMemo(() => {
    return escapeState(fetchInstance).state.data;
  }, [fetchInstance]);
  const error = useTaroMemo(() => {
    return escapeState(fetchInstance).state.error;
  }, [fetchInstance]);
  const params = useTaroMemo(() => {
    return escapeState(fetchInstance).state.params || [];
  }, [fetchInstance]);

  console.log('useRequestImplement', fetchInstance);

  return {
    loading,
    data,
    error,
    params,
    // cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance)),
    // refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),
    // refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),
    // run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),
    // runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),
    // mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance)),
  } as Result<TData, TParams>;
}

export default useRequestImplement;
