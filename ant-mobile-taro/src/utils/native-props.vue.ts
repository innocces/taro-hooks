import type { CSSProperties } from 'vue'

export interface NativeProps<S extends string = never> {
  className?: string
  style?: CSSProperties & Partial<Record<S, string>>
  tabIndex?: number
}
