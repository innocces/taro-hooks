import type { CSSProperties, SetupContext, EmitsOptions } from 'vue'

export type Data = Record<string, unknown>
export interface NativeProps<S extends string = never> extends Data {
  className?: string
  class?: string
  style?: CSSProperties & Partial<Record<S, string>>
  tabIndex?: number
}

export interface ISetupContext<R extends string = never, E = EmitsOptions>
  extends SetupContext<E> {
  attrs: NativeProps<R>
}
