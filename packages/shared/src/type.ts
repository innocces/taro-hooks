export type DependencyList = ReadonlyArray<any>;

export interface MutableRefObject<T> {
  current: T;
}

declare const RefSymbol: unique symbol;

/**
 * copy from https://github.com/vuejs/core/blob/main/packages/reactivity/src/ref.ts
 */
export interface Ref<T = any> {
  value: T;
  /**
   * Type differentiator only.
   * We need this to be in public d.ts but don't want it to show up in IDE
   * autocomplete, so we use a private Symbol instead.
   */
  [RefSymbol]: true;
}
