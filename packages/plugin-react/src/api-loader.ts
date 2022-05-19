export default function (str: string): string {
  return `import {
    useTaroState,
    useTaroEffect,
    useTaroRef,
    useTaroReducer,
    useTaroCallback,
    useTaroMemo,
    useTaroLayoutEffect,
    useTaroContext,
    useWatchEffect
  } from '@taro-hooks/plugin-react/dist/runtime';
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

  export {
    useTaroState,
    useTaroEffect,
    useTaroRef,
    useTaroReducer,
    useTaroCallback,
    useTaroMemo,
    useTaroLayoutEffect,
    useTaroContext,
    useWatchEffect
  }
  `;
}
