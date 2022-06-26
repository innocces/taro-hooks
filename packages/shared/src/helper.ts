import type { Ref } from './type';

export function isObject(value: unknown): value is Record<any, any> {
  return value !== null && typeof value === 'object';
}

export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function isUndef(value: unknown): value is undefined {
  return typeof value === 'undefined';
}

/**
 * single check isRef func
 * @param {any} value any value for check
 * @returns {boolean} isRef??
 */
export function isRef(value: any): value is Ref {
  return !!(value && value.__v_isRef === true);
}
