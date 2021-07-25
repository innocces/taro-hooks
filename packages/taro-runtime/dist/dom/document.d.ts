import { TaroElement } from '../dom/element';
import { InstanceFactory, InstanceNamedFactory } from '../interface';
import type { FormElement } from '../dom/form';
import type { TaroRootElement } from '../dom/root';
import type { TaroText } from '../dom/text';
import type { TaroNodeImpl } from '../dom-external/node-impl';
import type { TaroElementImpl } from '../dom-external/element-impl';
import type { Hooks } from '../hooks';
export declare class TaroDocument extends TaroElement {
  private _getText;
  constructor( // eslint-disable-next-line @typescript-eslint/indent
    nodeImpl: TaroNodeImpl,
    getElement: InstanceNamedFactory,
    hooks: Hooks,
    elementImpl: TaroElementImpl,
    getText: InstanceFactory<TaroText>,
  );
  createElement(type: string): TaroElement | TaroRootElement | FormElement;
  createElementNS(
    _svgNS: string,
    type: string,
  ): TaroElement | TaroRootElement | FormElement;
  createTextNode(text: string): TaroText;
  getElementById<T extends TaroElement>(
    id: string | undefined | null,
  ): T | null;
  querySelector<T extends TaroElement>(query: string): T | null;
  createComment(): TaroText;
}
