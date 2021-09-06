import { TaroElement } from './element';
import type {
  Func,
  UpdatePayload,
  InstanceNamedFactory,
  MpInstance,
} from '../interface';
import type { TaroNodeImpl } from '../dom-external/node-impl';
import type { TaroElementImpl } from '../dom-external/element-impl';
import type { Hooks } from '../hooks';
import type { Events } from '../emitter/emitter';
export declare class TaroRootElement extends TaroElement {
  private pendingFlush;
  private updatePayloads;
  private updateCallbacks;
  private eventCenter;
  pendingUpdate: boolean;
  ctx: null | MpInstance;
  constructor( // eslint-disable-next-line @typescript-eslint/indent
    nodeImpl: TaroNodeImpl,
    getElement: InstanceNamedFactory,
    hooks: Hooks,
    elementImpl: TaroElementImpl,
    eventCenter: Events,
  );
  get _path(): string;
  protected get _root(): TaroRootElement;
  enqueueUpdate(payload: UpdatePayload): void;
  performUpdate(initRender?: boolean, prerender?: Func): void;
  enqueueUpdateCallback(cb: Func, ctx?: Record<string, any>): void;
  flushUpdateCallback(): void;
}
