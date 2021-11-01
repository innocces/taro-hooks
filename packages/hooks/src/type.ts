import type { General, RouterInfo } from '@tarojs/taro';

export type TRecord<R = any> = { [_: string]: R };

export type TAuthResultType = 'accept' | 'reject' | 'ban';

export type TNormalAction<T = General.CallbackResult> = () => Promise<T>;

export type TGeneralCallback<T = General.CallbackResult, R = void> = (
  callbackResult: T,
) => R;

export type TRouteInfo = RouterInfo<Partial<Record<string, string>>>;

export type TPartialRouteInfo<R = {}> = TRouteInfo | R;
