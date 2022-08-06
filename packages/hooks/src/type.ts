import type { RouterInfo } from '@tarojs/taro';

export type TRecord<R = any> = { [_: string]: R };

export type TAuthResultType = 'accept' | 'reject' | 'ban';

export type TNormalAction<T = TaroGeneral.CallbackResult> = () => Promise<T>;

export type TGeneralCallback<T = TaroGeneral.CallbackResult, R = void> = (
  callbackResult: T,
) => R;

export type TRouteInfo = RouterInfo<Partial<Record<string, string>>>;

export type TPartialRouteInfo<R = {}> = TRouteInfo | R;

export type WithUndefind<R> = R | undefined;

export type RecordData<R extends string = string, S = any> = Record<R, S>;

export type UnionResult<R> = R | TaroGeneral.CallbackResult;

// omit general callback function for Option
export type ExcludeOption<R> = Omit<R, 'success' | 'fail' | 'complete'>;

export type PromiseAction<T, R = TaroGeneral.CallbackResult> = (
  option: T,
) => Promise<UnionResult<R>>;

export type PromiseOptionalAction<T, R = TaroGeneral.CallbackResult> = (
  option?: T,
) => Promise<UnionResult<R>>;

export type PromiseWithoutOptionAction<R = TaroGeneral.CallbackResult> =
  () => Promise<UnionResult<R>>;
