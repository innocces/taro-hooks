import { isFunction, isArray } from '@tarojs/shared';
import { log } from '@taro-hooks/shared';
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  watchEffect,
  watch,
  nextTick,
  reactive,
} from 'vue';

import type { Ref, UnwrapRef } from 'vue';

export type BasicStateAction<S> = ((state: S) => S) | S;
export type Dispatch<A> = (action: A) => void;

const noop = () => {};

/**
 * @see https://next-version-taro-hooks.vercel.app/
 * @version taro-hooks >= 2.0.0
 * @description deal sideEffect when deps change, like mounted, updated, unmounted
 * @param {() => (() => void) | void} create sideEffect function
 * @param {Array<unknown> | void | null} deps sideEffect deps
 * @returns {void}
 */
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

  watch(
    () => [...deps],
    () => {
      sideEffectFn.value = create();
    },
    // set deep true to watch all deps
    { deep: true },
  );
}

/**
 * @see https://next-version-taro-hooks.vercel.app/
 * @version taro-hooks >= 2.0.0
 * @description deal sideEffect when deps(auto recieve) change, like mounted, updated, unmounted
 * @param {() => (() => void) | void} create sideEffect function
 * @returns {void}
 */
function useWatchEffect(create: () => (() => void) | void): void {
  log('useWatchEffect always clean sideEffect when deps change,');

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

/**
 * @see https://next-version-taro-hooks.vercel.app/
 * @version taro-hooks >= 2.0.0
 * @description deal sideEffect when deps change, both dom update. like mounted, updated, unmounted
 * @param {() => (() => void) | void} create sideEffect function
 * @param {Array<unknown> | void | null} deps sideEffect deps
 * @returns {void}
 */
function useLayoutEffect(
  create: () => (() => void) | void,
  deps: Array<unknown> | void | null,
): void {
  log('vue.ver useLayoutEffect is use watch + nextTick to simulation.');

  if (!isFunction(create)) {
    throw new Error(
      'useLayoutEffect only accept a function as the first argument.',
    );
  }

  if (deps && !isArray(deps)) {
    throw new Error('useLayoutEffect second argument must be a array.');
  }

  let sideEffectFn: Ref<unknown> = ref(null);

  onMounted(() => {
    sideEffectFn.value = create();
  });

  onUnmounted(() => {
    isFunction(sideEffectFn.value) && sideEffectFn.value();
  });

  if (!deps) {
    log('useLayoutEffect deps is null. create will run every render');
    onUpdated(() => {
      nextTick(() => {
        sideEffectFn.value = create();
      });
    });
    return;
  }

  watch(
    () => [...deps],
    () => {
      nextTick(() => {
        sideEffectFn.value = create();
      });
    },
    // set deep true to watch all deps
    { deep: true },
  );
}

/**
 * @see https://next-version-taro-hooks.vercel.app/
 * @version taro-hooks >= 2.0.0
 * @description memo function when deps change
 * @param {function} callback function
 * @param {Array<unknown> | void | null} deps sideEffect deps
 * @returns {void}
 */
function useCallback<T>(callback: T, deps: Array<unknown> | void | null): T {
  log('vue.ver useCallback is use watch to simulation.');

  if (!isFunction(callback)) {
    throw new TypeError(
      'useCallback only accept a function as the first argument.',
    );
  }

  const callbackRef = ref(callback);

  if (deps) {
    watch(
      () => [...deps],
      () => {
        callbackRef.value = callback;
      },
      { deep: true },
    );
  }

  return callbackRef.value;
}

/**
 * @see https://next-version-taro-hooks.vercel.app/
 * @version taro-hooks >= 2.0.0
 * @description memo variable when deps change to recaculate it
 * @param {() => (() => void) | void} create sideEffect function
 * @param {Array<unknown> | void | null} deps sideEffect deps
 * @returns {T} memo variable
 */
function useMemo<T>(
  create: () => T,
  deps: Array<unknown> | void | null,
): Ref<T> {
  log('vue.ver useMemo is use watch to simulation.');

  if (!isFunction(create)) {
    throw new TypeError(
      'useMemo only accept a function as the first argument.',
    );
  }

  if (deps && !isArray(deps)) {
    throw new TypeError('useMemo second argument must be a array.');
  }

  const memoRef = ref(create()) as Ref<T>;

  if (deps) {
    watch(
      () => [...deps],
      () => {
        memoRef.value = create();
      },
      { deep: true },
    );
  }

  return reactive(memoRef);
}

/**
 * @see https://next-version-taro-hooks.vercel.app/
 * @version taro-hooks >= 2.0.0
 * @description a latest reactive value
 * @param {T} initialValue initialValue
 * @returns {T} ref of value
 */
function useRef<T>(initialValue: T): UnwrapRef<{
  current: T;
}> {
  log('vue.ver useRef is use reactive to simulation.');
  const reactiveRef = reactive({ current: initialValue });
  return reactiveRef;
}

export const useTaroEffect = useEffect;

export { useWatchEffect };

export const useTaroState = noop;

export const useTaroCallback = useCallback;

export const useTaroContext = noop;

export const useTaroReducer = noop;

export const useTaroRef = useRef;

export const useTaroMemo = useMemo;

export const useTaroLayoutEffect = useLayoutEffect;
