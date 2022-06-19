import { useTaroRef } from '@tarojs/taro';
import type { DependencyList } from '../type';
import { depsAreSame } from '../utils';

export default function useCreation<T>(factory: () => T, deps: DependencyList) {
  const creation = useTaroRef(
    {
      deps,
      obj: undefined as undefined | T,
      initialized: false,
    },
    // @ts-ignore
    true,
  );
  if (
    creation.current.initialized === false ||
    !depsAreSame(creation.current.deps, deps)
  ) {
    creation.current.deps = deps;
    creation.current.obj = factory();
    creation.current.initialized = true;
  }
  return creation.current.obj as T;
}
