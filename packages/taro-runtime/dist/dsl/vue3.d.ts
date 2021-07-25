import type { App, h as createElement } from '@vue/runtime-core';
import type { TaroElement } from '../dom/element';
import type { AppConfig as Config } from '@tarojs/taro';
import type { AppInstance } from './instance';
export declare function createVue3App(
  app: App<TaroElement>,
  h: typeof createElement,
  config: Config,
): AppInstance;
