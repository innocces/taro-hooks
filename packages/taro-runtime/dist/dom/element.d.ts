import { TaroNode } from './node';
import { Style } from './style';
import { ClassList } from './class-list';
import type { TaroEvent } from './event';
import type { Attributes, InstanceNamedFactory } from '../interface';
import type { TaroNodeImpl } from '../dom-external/node-impl';
import type { TaroElementImpl } from '../dom-external/element-impl';
import type { Hooks } from '../hooks';
export declare class TaroElement extends TaroNode {
  tagName: string;
  props: Record<string, any>;
  style: Style;
  dataset: Record<string, unknown>;
  innerHTML: string;
  constructor( // eslint-disable-next-line @typescript-eslint/indent
    nodeImpl: TaroNodeImpl,
    getElement: InstanceNamedFactory,
    hooks: Hooks,
    elementImpl: TaroElementImpl,
  );
  private _stopPropagation;
  get id(): string;
  set id(val: string);
  get className(): string;
  set className(val: string);
  get cssText(): string;
  get classList(): ClassList;
  get children(): TaroElement[];
  get attributes(): Attributes[];
  get textContent(): string;
  set textContent(text: string);
  hasAttribute(qualifiedName: string): boolean;
  hasAttributes(): boolean;
  focus(): void;
  blur(): void;
  setAttribute(qualifiedName: string, value: any): void;
  removeAttribute(qualifiedName: string): void;
  getAttribute(qualifiedName: string): string;
  getElementsByTagName(tagName: string): TaroElement[];
  getElementsByClassName(className: string): TaroElement[];
  dispatchEvent(event: TaroEvent): boolean;
  addEventListener(type: any, handler: any, options: any): void;
  removeEventListener(type: any, handler: any): void;
}
