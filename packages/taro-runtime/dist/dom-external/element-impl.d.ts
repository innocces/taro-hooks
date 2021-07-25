import type { Ctx } from '../interface';
import type { getBoundingClientRectImpl } from './element';
export declare class TaroElementImpl {
  rectImpl: typeof getBoundingClientRectImpl;
  constructor(rectImpl: typeof getBoundingClientRectImpl); // eslint-disable-next-line @typescript-eslint/indent
  bind(ctx: Ctx): void;
  bindRect(ctx: Ctx): void;
}
