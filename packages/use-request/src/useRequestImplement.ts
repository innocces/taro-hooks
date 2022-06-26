import { useLatest, useMount, useUnmount, useUpdate } from '@taro-hooks/ahooks';
import { useTaroMemo, useTaroRef } from '@tarojs/taro';
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
    fetch.pluginImpls = plugins.map((p) => p(fetch, fetchOptions));

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
    escapeState(fetchInstance)?.cancel?.();
  });

  // due to vue reactive, need reduce single for useMemo
  // ugly
  const refResult = useTaroMemo(
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

  return refResult as Result<TData, TParams>;
}

export default useRequestImplement;
