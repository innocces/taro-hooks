import type * as React from 'react';
import { eventHandler } from '../dom/event';
import type { AppConfig } from '@tarojs/taro';
import type { AppInstance, ReactPageComponent, PageProps } from './instance';
export declare let R: typeof React;
export declare let PageContext: React.Context<string>;
export declare function connectReactPage(
  R: typeof React,
  id: string,
): (component: ReactPageComponent) => React.ComponentClass<PageProps>;
export declare function createReactApp(
  App: React.ComponentClass,
  react: typeof React,
  reactdom: any,
  config: AppConfig,
): AppInstance;
export declare function createNativeComponentConfig(
  Component: any,
  react: typeof React,
  reactdom: any,
  componentConfig: any,
): {
  properties: {
    props: {
      type: null;
      value: null;
      observer(_newVal: any, oldVal: any): void;
    };
  };
  created(): void;
  attached(): void;
  ready(): void;
  detached(): void;
  pageLifetimes: {
    show(): void;
    hide(): void;
  };
  methods: {
    eh: typeof eventHandler;
  };
};
