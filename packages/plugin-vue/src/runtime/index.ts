import { mergeReconciler } from '@tarojs/shared';
import { container, SERVICE_IDENTIFIER } from '@tarojs/runtime';
import * as taroHooks from './hooks';

import type { IHooks } from '@tarojs/runtime';

if (process.env.TARO_ENV === 'weapp') {
  const hooks = container.get<IHooks>(SERVICE_IDENTIFIER.Hooks);

  hooks.initNativeApiImpls ||= [];
  hooks.initNativeApiImpls.push(function (taro) {
    for (const hook in taroHooks) {
      taro[hook] = taroHooks[hook];
    }
  });
}

const hostConfig = {
  initNativeApi(taro: any) {
    for (const hook in taroHooks) {
      // @ts-ignore
      taro[hook] = taroHooks[hook];
    }
  },
};

mergeReconciler(hostConfig);

export * from './hooks';
