import { isFunction, isArray } from '@tarojs/shared';
import { log } from '@taro-hooks/shared';
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  watchEffect,
  watch,
} from 'vue';

import type { Ref } from 'vue';

const noop = () => {};

function useEffect(
  create: () => (() => void) | void,
  deps: Array<unknown> | void | null,
): void {
  log(
    'vue.ver useEffect is use watch to simulation.',
    'if u want use watchEffect ver. use useWatchEffect instead.',
  );

  if (!isFunction(create)) {
    throw new Error('useEffect only accept a function as the first argument.');
  }

  if (deps && !isArray(deps)) {
    throw new Error('useEffect second argument must be a array.');
  }

  let sideEffectFn: Ref<unknown> = ref(null);

  onMounted(() => {
    sideEffectFn.value = create();
  });

  onUnmounted(() => {
    isFunction(sideEffectFn.value) && sideEffectFn.value();
  });

  if (!deps) {
    log('useEffect deps is null. create will run every render');
    onUpdated(() => {
      sideEffectFn.value = create();
    });
    return;
  }

  watch(deps, () => {
    sideEffectFn.value = create();
  });
}

function useWatchEffect(create: () => (() => void) | void): void {
  if (!isFunction(create)) {
    throw new Error(
      'useWatchEffect only accept a function as the first argument. \n the flush option is default as post',
    );
  }

  watchEffect(
    (onInvalidate) => {
      const sideEffectFn = create();
      if (sideEffectFn) {
        onInvalidate(() => {
          sideEffectFn();
        });
      }
    },
    {
      flush: 'post',
    },
  );
}

export const useTaroEffect = useEffect;

export { useWatchEffect };

export const useTaroState = noop;

export const useTaroCallback = noop;

export const useTaroContext = noop;

export const useTaroReducer = noop;

export const useTaroRef = noop;

export const useTaroMemo = noop;

export const useTaroLayoutEffect = noop;
