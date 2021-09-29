import type { TRecord } from '../type';

export const noop = () => {};

export const promiseNoop = () => Promise.resolve();

export const typeOf = (target: any, type: string | string[]): boolean => {
  return [type]
    .flat()
    .some((v) => Object.prototype.toString.call(target) === `[object ${v}]`);
};

export const isPlainObject = (object: TRecord): boolean =>
  !(object && Object.entries(object).length);

export const isUndefined = (target: unknown): boolean =>
  typeof target === 'undefined';
