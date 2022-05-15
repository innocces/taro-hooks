import Taro from '@tarojs/taro';
import {
  useState,
  useEffect,
  useRef,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect,
  useContext,
} from 'react';

declare module '@tarojs/taro' {
  interface TaroStatic {
    useTaroState: typeof useState;
    useTaroEffect: typeof useEffect;
    useTaroRef: typeof useRef;
    useTaroReducer: typeof useReducer;
    useTaroCallback: typeof useCallback;
    useTaroMemo: typeof useMemo;
    useTaroLayoutEffect: typeof useLayoutEffect;
    useTaroContext: typeof useContext;
  }
}
