import { logError, strictOf } from '@taro-hooks/shared';
import { stringify } from 'querystring';
import type { RecordData, ExcludeSuccess } from '../type';

// prod constants
export const isProd: boolean = process.env.NODE_ENV === 'production';

export const noop = () => {};

export const promiseNoop = () => Promise.resolve();

export const typeOf = (target: any, type: string | string[]): boolean => {
  return [type]
    .flat()
    .some((v) => Object.prototype.toString.call(target) === `[object ${v}]`);
};

export const isPlainObject = (payload: RecordData): boolean =>
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
  message = message || '调用失败';
  const errMsg = `[API ${method}] ${message}`;
  if (!isProd) logError(errMsg);
  return {
    errMsg,
  };
}

/**
 * combine init and custom options
 * @param generalOption init options
 * @param option custom options
 * @returns options
 */
export function combineOptions<T>(generalOption = {}, option = {}): T {
  return Object.assign({}, generalOption, option) as T;
}

/**
 * make queryString URI
 * @param url origin URI
 * @param options unparse payload
 * @returns {string} URIWithQS
 */
export function stringfiyUrl<R extends RecordData = RecordData>(
  url: string,
  options?: R,
): string {
  let stringfiyUrl = url;
  if (options && strictOf<R>(options, 'Object')) {
    const hasQuery = stringfiyUrl.includes('?');
    stringfiyUrl += (hasQuery ? '&' : '?') + stringify(options);
  }
  return stringfiyUrl;
}

/**
 * filter orgin successCallbackResult errMsg Fields
 * @param successResultArray
 * @returns WithoutErrMsgArray
 */
export function filterErrMsgField<R extends { errMsg: string }>(
  successResultArray: R[],
): ExcludeSuccess<R>[] {
  return successResultArray.map(({ errMsg, ...result }) => result);
}
