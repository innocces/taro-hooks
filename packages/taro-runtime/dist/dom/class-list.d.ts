import type { TaroElement } from './element';
export declare class ClassList extends Set<string> {
  private el;
  constructor(className: string, el: TaroElement);
  get value(): string;
  add(s: string): this;
  get length(): number;
  remove(s: string): void;
  toggle(s: string): void;
  replace(s1: string, s2: string): void;
  contains(s: string): boolean;
  toString(): string;
  private _update;
}
