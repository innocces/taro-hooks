export type TNormalAction<T = TaroGeneral.CallbackResult> = () => Promise<T>;

export type TGeneralCallback<T = TaroGeneral.CallbackResult, R = void> = (
  callbackResult: T,
) => R;

export type Dispatch<A> = (value: A) => void;

export type Void = () => void;

export type Noop = (...args: any[]) => void;

export type Callback<R = TaroGeneral.CallbackResult> = (res: R) => void;

export type WithUndefind<R> = R | undefined;

export type RecordData<R extends string = string, S = any> = Record<R, S>;

export type UnionResult<R> = R | TaroGeneral.CallbackResult;

// omit general callback function for Option
export type ExcludeOption<R> = Omit<R, 'success' | 'fail' | 'complete'>;

// omit successCallbackResult without errMsg
export type ExcludeSuccess<R> = Omit<R, 'errMsg'>;

export type ExcludeUnionSuceess<R> = UnionResult<ExcludeOption<R>>;

export type PromiseAction<T, R = TaroGeneral.CallbackResult> = (
  option: T,
) => Promise<UnionResult<R>>;

export type PromiseParamsAction<
  T extends Noop,
  R = TaroGeneral.CallbackResult,
> = (...args: Parameters<T>) => Promise<UnionResult<R>>;

export type PromiseOptionalAction<T, R = TaroGeneral.CallbackResult> = (
  option?: T,
) => Promise<UnionResult<R>>;

export type PromiseWithoutOptionAction<R = TaroGeneral.CallbackResult> =
  () => Promise<UnionResult<R>>;
