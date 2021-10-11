import type { General } from '@tarojs/taro';

export type TRecord = { [_: string]: any };

export type TAuthResultType = 'accept' | 'reject' | 'ban';

export type TNormalAction<T = General.CallbackResult> = () => Promise<T>;

export type TGeneralCallback<T = General.CallbackResult, R = void> = (
  callbackResult: T,
) => R;
