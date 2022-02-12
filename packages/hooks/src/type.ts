import type { RouterInfo } from '@tarojs/taro';

export type TRecord<R = any> = { [_: string]: R };

export type TAuthResultType = 'accept' | 'reject' | 'ban';

export type TNormalAction<T = TaroGeneral.CallbackResult> = () => Promise<T>;

export type TGeneralCallback<T = TaroGeneral.CallbackResult, R = void> = (
  callbackResult: T,
) => R;

export type TRouteInfo = RouterInfo<Partial<Record<string, string>>>;

export type TPartialRouteInfo<R = {}> = TRouteInfo | R;
