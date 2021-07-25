import { NodeType } from './node_types';
import { TaroEventTarget } from './event-target';
import type { UpdatePayload, InstanceNamedFactory } from '../interface';
import type { TaroRootElement } from './root';
import type { TaroElement } from './element';
import type { TaroNodeImpl } from '../dom-external/node-impl';
import type { Hooks } from '../hooks';
export declare class TaroNode extends TaroEventTarget {
  uid: string;
  nodeType: NodeType;
  nodeName: string;
  parentNode: TaroNode | null;
  childNodes: TaroNode[];
  protected _getElement: InstanceNamedFactory;
  constructor( // eslint-disable-next-line @typescript-eslint/indent
    impl: TaroNodeImpl,
    getElement: InstanceNamedFactory,
    hooks: Hooks,
  );
  private hydrate;
  /**
   * like jQuery's $.empty()
   */
  private _empty;
  protected get _root(): TaroRootElement | null;
  protected findIndex(refChild: TaroNode): number;
  get _path(): string;
  get nextSibling(): TaroNode | null;
  get previousSibling(): TaroNode | null;
  get parentElement(): TaroElement | null;
  get firstChild(): TaroNode | null;
  get lastChild(): TaroNode | null;
  /**
   * @textContent 目前只能置空子元素
   * @TODO 等待完整 innerHTML 实现
   */
  set textContent(text: string);
  insertBefore<T extends TaroNode>(
    newChild: T,
    refChild?: TaroNode | null,
    isReplace?: boolean,
  ): T;
  appendChild(child: TaroNode): void;
  replaceChild(newChild: TaroNode, oldChild: TaroNode): TaroNode | undefined;
  removeChild<T extends TaroNode>(child: T, isReplace?: boolean): T;
  remove(isReplace?: boolean): void;
  hasChildNodes(): boolean;
  enqueueUpdate(payload: UpdatePayload): void;
  cloneNode(isDeep?: boolean): any;
  contains(
    node: TaroNode & {
      id?: string;
    },
  ): boolean;
}
