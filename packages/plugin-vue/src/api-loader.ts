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
    useWatchEffect,
    taroCreateContext
  } from '@taro-hooks/plugin-vue/dist/runtime';
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
  taro.taroCreateContext = taroCreateContext;

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
