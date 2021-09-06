import { InstanceNamedFactory } from '../interface';
import type { Ctx, GetDoc } from '../interface';
export declare class TaroNodeImpl {
  getDoc: GetDoc;
  constructor(getElement: InstanceNamedFactory); // eslint-disable-next-line @typescript-eslint/indent
  bind(ctx: Ctx): void;
}
