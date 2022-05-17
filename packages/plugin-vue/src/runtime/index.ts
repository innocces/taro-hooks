import { mergeReconciler } from '@tarojs/shared';
import * as taroHooks from './hooks';

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
