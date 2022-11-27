/// <reference types="@tarojs/taro" />
import {
  useState,
  useEffect,
  useRef,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect,
  useContext,
  createContext,
} from 'react';

// 微信的有版权. 暂时不单独copy一个过来用了. 如果大家发现免费的资源可以提供一下
declare var wx: any;

// shims for vercel build in order
declare module '@taro-hooks/use-request';

// never bundle with d.ts
declare module '@tarojs/taro' {
  interface TaroStatic {
    useTaroState: typeof useState;
    useTaroEffect: typeof useEffect;
    useWatchEffect: typeof useEffect;
    useTaroRef: typeof useRef;
    useTaroReducer: typeof useReducer;
    useTaroCallback: typeof useCallback;
    useTaroMemo: typeof useMemo;
    useTaroLayoutEffect: typeof useLayoutEffect;
    useTaroContext: typeof useContext;
    taroCreateContext: typeof createContext;
  }
}
