const noop = () => {};
import { ref, onMounted, onUpdated, onUnmounted, watchEffect } from 'vue';

function useEffect(
  create: () => (() => void) | void,
  deps: Array<unknown> | void | null,
): void {}

export const useTaroEffect = useEffect;

export const useTaroState = noop;

export const useTaroCallback = noop;

export const useTaroContext = noop;

export const useTaroReducer = noop;

export const useTaroRef = noop;

export const useTaroMemo = noop;

export const useTaroLayoutEffect = noop;
