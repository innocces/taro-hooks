/**
 * major job for shims differs between react and vue
 */
import { isRef } from './helper';

/**
 * due to useState vue.ver use customRef to simulate. so need auto release value to caculate
 * @param {any} state check state
 * @returns {any}
 */
export const escapeState = (state: any): any => {
  return isRef(state) ? state.value : state;
};
