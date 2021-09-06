import { GetDoc } from '../interface';
import type { Ctx } from '../interface';
export declare type IPosition =
  | 'beforebegin'
  | 'afterbegin'
  | 'beforeend'
  | 'afterend';
/**
 * An implementation of `Element.insertAdjacentHTML()`
 * to support Vue 3 with a version of or greater than `vue@3.1.2`
 */
export declare function insertAdjacentHTMLImpl(
  position: IPosition,
  html: string,
  getDoc: GetDoc,
): void;
export declare function cloneNode(ctx: Ctx, getDoc: any, isDeep?: boolean): any;
