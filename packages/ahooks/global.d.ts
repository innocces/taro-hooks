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
