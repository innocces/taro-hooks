import Taro from '@tarojs/taro';
import {
  useTaroEffect,
  useWatchEffect,
  useTaroCallback,
  useTaroMemo,
  useTaroLayoutEffect,
  useTaroContext,
  useTaroState,
  useTaroRef,
  useTaroReducer,
  taroCreateContext,
} from '../src/runtime/hooks';

declare module '@tarojs/taro' {
  interface TaroStatic {
    useTaroState: typeof useTaroState;
    useTaroEffect: typeof useTaroEffect;
    useWatchEffect: typeof useWatchEffect;
    useTaroRef: typeof useTaroRef;
    useTaroReducer: typeof useTaroReducer;
    useTaroCallback: typeof useTaroCallback;
    useTaroMemo: typeof useTaroMemo;
    useTaroLayoutEffect: typeof useTaroLayoutEffect;
    useTaroContext: typeof useTaroContext;
    taroCreateContext: typeof taroCreateContext;
  }
}
