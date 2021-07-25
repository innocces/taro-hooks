import type {
  EventHandler,
  AddEventListenerOptions,
  IHooks,
} from '../interface';
export declare class TaroEventTarget {
  __handlers: Record<string, EventHandler[]>;
  hooks: IHooks;
  constructor(hooks: IHooks); // eslint-disable-next-line @typescript-eslint/indent
  addEventListener(
    type: string,
    handler: EventHandler,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener(type: string, handler: EventHandler): void;
  isAnyEventBinded(): boolean;
}
