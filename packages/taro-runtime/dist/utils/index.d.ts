import type { TaroElement } from '../dom/element';
import type { TaroText } from '../dom/text';
import type { TaroNode } from '../dom/node';
export declare const incrementId: () => () => string;
export declare function isElement(node: TaroNode): node is TaroElement;
export declare function isText(node: TaroNode): node is TaroText;
export declare function isComment(node: TaroNode): boolean;
export declare function isHasExtractProp(el: TaroElement): boolean;
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */
export declare function isParentBinded(
  node: TaroElement | null,
  type: string,
): boolean;
export declare function shortcutAttr(key: string): string;
