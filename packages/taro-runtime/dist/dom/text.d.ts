import { TaroNode } from './node';
import type { TaroNodeImpl } from '../dom-external/node-impl';
import type { InstanceNamedFactory } from '../interface';
import type { Hooks } from '../hooks';
export declare class TaroText extends TaroNode {
  _value: string;
  constructor( // eslint-disable-next-line @typescript-eslint/indent
    nodeImpl: TaroNodeImpl,
    getElement: InstanceNamedFactory,
    hooks: Hooks,
  );
  set textContent(text: string);
  get textContent(): string;
  set nodeValue(text: string);
  get nodeValue(): string;
}
