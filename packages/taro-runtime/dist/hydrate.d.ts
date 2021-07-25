import type { MiniData } from './interface';
import type { TaroElement } from './dom/element';
import type { TaroText } from './dom/text';
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */
export declare function hydrate(node: TaroElement | TaroText): MiniData;
