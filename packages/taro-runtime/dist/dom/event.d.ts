import type { TaroElement } from './element';
import type { EventOptions, MpEvent } from '../interface';
export declare class TaroEvent {
  type: string;
  bubbles: boolean;
  cancelable: boolean;
  _stop: boolean;
  _end: boolean;
  defaultPrevented: boolean;
  timeStamp: number;
  mpEvent: MpEvent | undefined;
  constructor(type: string, opts: EventOptions, event?: MpEvent);
  stopPropagation(): void;
  stopImmediatePropagation(): void;
  preventDefault(): void;
  get target(): {
    dataset: any;
    id?: string | undefined;
  };
  get currentTarget(): {
    dataset: any;
    id?: string | undefined;
  };
}
export declare function createEvent(
  event: MpEvent | string,
  node?: TaroElement,
): TaroEvent;
export declare function eventHandler(event: MpEvent): void;
