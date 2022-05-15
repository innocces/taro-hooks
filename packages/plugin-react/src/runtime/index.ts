import { container, SERVICE_IDENTIFIER } from '@tarojs/runtime';
import * as taroHooks from './hooks';

import type { IHooks } from '@tarojs/runtime';

const hooks = container.get<IHooks>(SERVICE_IDENTIFIER.Hooks);

hooks.initNativeApiImpls ||= [];
hooks.initNativeApiImpls.push((taro) => {
  for (const hook in taroHooks) {
    // @ts-ignore
    taro[hook] = taroHooks[hook];
  }
});

export * from './hooks';
