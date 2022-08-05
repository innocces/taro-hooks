import {
  enableAlertBeforeUnload,
  disableAlertBeforeUnload,
} from '@tarojs/taro';

import usePromise from '../usePromise';

import type { PromiseWithoutOptionAction, PromiseAction } from '../type';

export type Enable = PromiseAction<string>;

export type Disable = PromiseWithoutOptionAction;

function useAlertBeforeUnload(): {
  enable: Enable;
  disable: Disable;
} {
  const enable: Enable = usePromise<string>(enableAlertBeforeUnload);

  const disable: Disable = usePromise(disableAlertBeforeUnload);

  return {
    enable,
    disable,
  };
}

export default useAlertBeforeUnload;
