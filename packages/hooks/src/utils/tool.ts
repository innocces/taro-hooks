import { logError } from '@taro-hooks/shared';
import type { TRecord } from '../type';

// prod constants
export const isProd: boolean = process.env.NODE_ENV === 'production';

export const noop = () => {};

export const promiseNoop = () => Promise.resolve();

export const typeOf = (target: any, type: string | string[]): boolean => {
  return [type]
    .flat()
    .some((v) => Object.prototype.toString.call(target) === `[object ${v}]`);
};

export const isPlainObject = (payload: TRecord): boolean =>
  !(payload && Object.entries(payload).length);

export const isUndefined = (target: unknown): target is undefined =>
  typeof target === 'undefined';

/**
 * general common error message resp
 * @param {T = string} method 调用方法
 * @param {string} message 自定义错误信息
 * @returns {TaroGeneral.CallbackResult} 错误信息
 */
export function generateGeneralFail<T = string>(
  method: T,
  message?: string,
): TaroGeneral.CallbackResult {
  message = '调用失败';
  const errMsg = `[API ${method}] ${message}`;
  if (!isProd) logError(errMsg);
  return {
    errMsg,
  };
}
