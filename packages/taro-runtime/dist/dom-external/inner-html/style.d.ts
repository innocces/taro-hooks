import type { ParsedTaroElement } from './parser';
interface ISelector {
  isChild: boolean;
  isGeneralSibling: boolean;
  isAdjacentSibling: boolean;
  tag: string | null;
  id: string | null;
  class: string[];
  attrs: {
    all: boolean;
    key: string;
    value?: string | null;
  }[];
}
interface IStyle {
  content: string;
  selectorList: ISelector[];
}
export default class StyleTagParser {
  styles: IStyle[];
  extractStyle(src: string): string;
  stringToSelector(style: string): void;
  parseSelector(src: string): ISelector[];
  matchStyle(tagName: string, el: ParsedTaroElement, list: number[]): string;
  matchCurrent(
    tagName: string,
    el: ParsedTaroElement,
    selector: ISelector,
  ): boolean;
}
export {};
