import { isFunction, isArray, isObject } from '@tarojs/shared';
import { log, INJECTKEY } from '@taro-hooks/shared';
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  watchEffect,
  watch,
  nextTick,
  reactive,
  unref,
  inject,
  provide,
  h,
  toRefs,
} from 'vue';

import type {
  Ref,
  ToRefs,
  UnwrapRef,
  VNode,
  RendererNode,
  RendererElement,
  ComponentOptions,
} from 'vue';

export type BasicStateAction<S> = ((state: S) => S) | S;
export type Dispatch<A> = (action: A) => void;

/**
 * @see https://next-version-taro-hooks.vercel.app/docs/quick/vue-useage
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
 * @see https://next-version-taro-hooks.vercel.app/docs/quick/vue-useage
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
 * @see https://next-version-taro-hooks.vercel.app/docs/quick/vue-useage
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
 * @see https://next-version-taro-hooks.vercel.app/docs/quick/vue-useage
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
 * @see https://next-version-taro-hooks.vercel.app/docs/quick/vue-useage
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
 * @see https://next-version-taro-hooks.vercel.app/docs/quick/vue-useage
 * @version taro-hooks >= 2.0.0
 * @description a latest reactive value
 * @param {T} initialValue initialValue
 * @param {boolean} toRefTmpl need ref active
 * @returns {T} ref of value
 */
function useRef<T>(
  initialValue: T,
  toRefTmpl?: boolean,
): ToRefs<{
  current: UnwrapRef<T>;
}> {
  log('vue.ver useRef is use reactive to simulation.');

  const reactiveRef = reactive({ current: initialValue });

  // @ts-ignore
  return toRefTmpl ? toRefs(reactiveRef) : reactiveRef;
}

/**
 * @see https://next-version-taro-hooks.vercel.app/docs/quick/vue-useage
 * @version taro-hooks >= 2.0.0
 * @description lets you add a state variable to your component
 * @param {unknown} initialState initialState
 * @returns {[state, dispatch]} state and dispatch
 */
function useState<S>(
  initialState: (() => S) | S,
): [Ref<S>, Dispatch<BasicStateAction<S>>] {
  log('vue.ver useState is use customRef to simulation.');

  let state = initialState;
  if (isFunction(initialState)) {
    state = initialState();
  }

  const reactiveState = ref(state) as Ref<S>;

  const dispatchAction = (actionOrState: ((prevState: S) => S) | S) => {
    if (isFunction(actionOrState)) {
      reactiveState.value = actionOrState(reactiveState.value);
    } else {
      reactiveState.value = actionOrState;
    }
  };

  return [reactiveState, dispatchAction];
}

/**
 * @see https://next-version-taro-hooks.vercel.app/docs/quick/vue-useage
 * @version taro-hooks >= 2.0.0
 * @description lets you add a reducer to your component.
 * @param {(initState, action) => S} reducer
 * @param {unknown} initialArg initialArg
 * @returns {[state, dispatch]} state and dispatch
 */
function useReducer<S, A>(
  reducer: (initState: S, action: A) => S,
  initialArg: S,
  init?: (initialArg: S) => S,
): [Ref<S>, Dispatch<A>] {
  if (!isFunction(reducer)) {
    throw new TypeError(
      'useReducer only accept a function as the first argument.',
    );
  }

  if (!isObject(initialArg)) {
    log('recommand the initialArg is object');
  }

  let initialState = initialArg;

  // tirgger init
  if (isFunction(init)) {
    initialState = init(initialState);
  }

  const state = ref(initialState) as Ref<S>;

  const dispatch = (action: A) => {
    state.value = reducer(unref(state), action);
  };

  return [reactive(state), dispatch];
}

export interface IProviderProps<T = Record<string, any>> {
  value?: T;
}
export type VueContext<T> = {
  $$inject: T;
  Provider: VNode<RendererNode, RendererElement, IProviderProps<T>>;
  Consumer: VNode;
};

/**
 * @see https://next-version-taro-hooks.vercel.app/docs/quick/vue-useage
 * @version taro-hooks >= 2.0.0
 * @description vue.ver createContext
 * @param {T} defaultValue init or defaultValue
 * @returns {VueContext<T>} vue context
 */
function createContext<T = Record<string, any>>(
  defaultValue: T,
): VueContext<T> {
  const ProviderElement: ComponentOptions<IProviderProps<T>> = {
    name: '$$Provider',
    props: {
      value: Object,
    },
    setup(props, context) {
      const provideValue = ref(
        props?.value ?? context?.attrs?.value ?? defaultValue,
      );
      const prevProvider = inject(INJECTKEY, ref({}));
      watchEffect(() => {
        // fetch prev provide value
        provideValue.value = {
          ...(prevProvider.value as object),

          ...((props?.value ??
            context?.attrs?.value ??
            defaultValue) as object),
        };
      });

      // props.value => attrs.value => defaultValue
      provide(INJECTKEY, provideValue);
    },
    render() {
      return this.$slots.default();
    },
  };
  return {
    [INJECTKEY]: defaultValue,
    Provider: h(ProviderElement),
    Consumer: h({
      render() {
        return this.$slots.default();
      },
    }),
  };
}

/**
 * @see https://next-version-taro-hooks.vercel.app/docs/quick/vue-useage
 * @version taro-hooks >= 2.0.0
 * @description  lets you read and subscribe to context from your component
 * @param {VueContext<T>} Context
 * @returns {T} context
 */
function useContext<T>(Context: VueContext<T>): T {
  if (!isObject(Context) || !Context.$$inject) {
    throw new TypeError(
      'useContext only accept a context as the first argument.',
    );
  }

  return inject(INJECTKEY) as T;
}

export const useTaroEffect = useEffect;

export { useWatchEffect };

export const useTaroState = useState;

export const useTaroCallback = useCallback;

export const useTaroContext = useContext;

export const useTaroReducer = useReducer;

export const useTaroRef = useRef;

export const useTaroMemo = useMemo;

export const useTaroLayoutEffect = useLayoutEffect;

export const taroCreateContext = createContext;
