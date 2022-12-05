export default function (
  str: string,
  runtime = '@taro-hooks/plugin-react/dist/runtime',
): string {
  const realRuntime =
    typeof runtime === 'string'
      ? runtime
      : '@taro-hooks/plugin-react/dist/runtime';
  return `import {
    useTaroState,
    useTaroEffect,
    useTaroRef,
    useTaroReducer,
    useTaroCallback,
    useTaroMemo,
    useTaroLayoutEffect,
    useTaroContext,
    useWatchEffect,
    taroCreateContext
  } from '${realRuntime}';
  ${str}

  taro.useTaroState = useTaroState;
  taro.useTaroEffect = useTaroEffect;
  taro.useTaroRef = useTaroRef;
  taro.useTaroReducer = useTaroReducer;
  taro.useTaroCallback = useTaroCallback;
  taro.useTaroMemo = useTaroMemo;
  taro.useTaroLayoutEffect = useTaroLayoutEffect;
  taro.useTaroContext = useTaroContext;
  taro.useWatchEffect = useWatchEffect;
  taro.taroCreateContext = taroCreateContext

  export {
    useTaroState,
    useTaroEffect,
    useTaroRef,
    useTaroReducer,
    useTaroCallback,
    useTaroMemo,
    useTaroLayoutEffect,
    useTaroContext,
    useWatchEffect,
    taroCreateContext
  }
  `;
}
