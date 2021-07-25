import { TaroElement } from './element';
import type { TaroEvent } from './event';
export declare class FormElement extends TaroElement {
  get value(): string | boolean | number | any[];
  set value(val: string | boolean | number | any[]);
  dispatchEvent(event: TaroEvent): boolean;
}
