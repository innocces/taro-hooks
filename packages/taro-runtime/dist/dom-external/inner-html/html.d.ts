import type { TaroNode } from '../../dom/node';
import type { TaroDocument } from '../../dom/document';
export declare function setInnerHTML(
  element: TaroNode,
  html: string,
  getDoc: () => TaroDocument,
): void;
