import { useRef } from '@taro-hooks/core';
import { escapeState } from '@taro-hooks/shared';
import type { DependencyList } from '../type';
import { depsAreSame } from '../utils';

export default function useCreation<T>(factory: () => T, deps: DependencyList) {
  const creation = useRef(
    {
      deps,
      obj: undefined as undefined | T,
      initialized: false,
    },
    // @ts-ignore
    true,
  );
  if (
    escapeState(creation.current).initialized === false ||
    !depsAreSame(escapeState(creation.current).deps, deps)
  ) {
    creation.current = {
      deps,
      obj: factory(),
      initialized: true,
    };
  }
  return escapeState(creation.current).obj as T;
}
