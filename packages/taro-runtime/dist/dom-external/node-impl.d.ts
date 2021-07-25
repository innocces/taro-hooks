import { InstanceNamedFactory } from '../interface';
import type { Ctx, GetDoc } from '../interface';
import type { setInnerHTML } from '../dom-external/inner-html/html';
import type { insertAdjacentHTMLImpl } from './node';
declare type SetInnerHTML = typeof setInnerHTML;
declare type InsertAdjacentHTMLImpl = typeof insertAdjacentHTMLImpl;
export declare class TaroNodeImpl {
  ctx: Ctx;
  getDoc: GetDoc;
  innerHTMLImpl: SetInnerHTML;
  adjacentImpl: InsertAdjacentHTMLImpl;
  constructor( // eslint-disable-next-line @typescript-eslint/indent
    getElement: InstanceNamedFactory,
    innerHTMLImpl: SetInnerHTML,
    adjacentImpl: InsertAdjacentHTMLImpl,
  );
  bind(ctx: Ctx): void;
  private bindInnerHTML;
  private bindAdjacentHTML;
}
export {};
