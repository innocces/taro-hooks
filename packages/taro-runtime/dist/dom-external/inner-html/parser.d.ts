import type { TaroElement } from '../../dom/element';
import type { TaroDocument } from '../../dom/document';
interface Node {
  type: string;
}
interface Comment extends Node {
  type: 'comment';
  content: string;
}
export interface Text extends Node {
  type: 'text';
  content: string;
}
export interface Element extends Node {
  type: 'element';
  tagName: string;
  children: ChildNode[];
  attributes: string[];
}
export interface ParsedTaroElement extends TaroElement {
  h5tagName?: string;
}
declare type ChildNode = Comment | Text | Element;
export declare function parser(
  html: string,
  document: TaroDocument,
): (TaroElement | import('../..').TaroText)[];
export {};
