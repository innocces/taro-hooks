/// <reference types="react" />
import { eventHandler } from '../dom/event';
import type { PageConfig } from '@tarojs/taro';
import type { Instance, PageInstance, PageProps } from './instance';
export declare function injectPageInstance(
  inst: Instance<PageProps>,
  id: string,
): void;
export declare function getPageInstance(id: string): Instance | undefined;
export declare function addLeadingSlash(path?: string): string;
export declare function safeExecute(
  path: string,
  lifecycle: keyof PageInstance,
  ...args: unknown[]
): any;
export declare function stringify(obj?: Record<string, unknown>): string;
export declare function getPath(
  id: string,
  options?: Record<string, unknown>,
): string;
export declare function getOnReadyEventKey(path: string): string;
export declare function getOnShowEventKey(path: string): string;
export declare function getOnHideEventKey(path: string): string;
export declare function createPageConfig(
  component: any,
  pageName?: string,
  data?: Record<string, unknown>,
  pageConfig?: PageConfig,
): PageInstance;
export declare function createComponentConfig(
  component: React.ComponentClass,
  componentName?: string,
  data?: Record<string, unknown>,
): any;
export declare function createRecursiveComponentConfig(
  componentName?: string,
): {
  properties: {
    i: {
      type: ObjectConstructor;
      value: {
        nn: string;
      };
    };
    l: {
      type: StringConstructor;
      value: string;
    };
  };
  options: {
    addGlobalClass: boolean;
    virtualHost: boolean;
  };
  methods: {
    eh: typeof eventHandler;
  };
};
