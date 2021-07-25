import type { TaroElement } from './element';
declare type Filter = (element: TaroElement) => boolean;
export declare function treeToArray(
  root: TaroElement,
  predict?: Filter,
): TaroElement[];
export {};
