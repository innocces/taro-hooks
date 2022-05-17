import Taro from '@tarojs/taro';
import { useTaroEffect } from '../src/runtime/hooks';
type Noop = () => void;

declare module '@tarojs/taro' {
  interface TaroStatic {
    useTaroState: Noop;
    useTaroEffect: typeof useTaroEffect;
    useTaroRef: Noop;
    useTaroReducer: Noop;
    useTaroCallback: Noop;
    useTaroMemo: Noop;
    useTaroLayoutEffect: Noop;
    useTaroContext: Noop;
  }
}
