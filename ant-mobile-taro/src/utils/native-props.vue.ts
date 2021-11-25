import { defineComponent } from 'vue'
import type { CommonEventFunction } from '@tarojs/components'
import type {
  CSSProperties,
  SetupContext,
  EmitsOptions,
  App,
  ComponentPropsOptions,
  ExtractPropTypes,
  Component,
  RenderFunction,
} from 'vue'

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

export type EventHandler<R> = CommonEventFunction<R>

export function withNativeProps<
  PropsOptions extends Readonly<ComponentPropsOptions>,
  Props extends Readonly<ExtractPropTypes<PropsOptions>>
>(component: {
  name: string
  props?: PropsOptions
  components?: Record<string, Component>
  setup?: (
    props: Props,
    setupContext: ISetupContext
  ) => RenderFunction | Record<string, any> | any
  emits?: string[]
  [optionKey: string]: any
}) {
  const name = component.name
  component.baseName = name
  component.install = function (vue: App) {
    vue.component(name, component)
  }
  return defineComponent(component as any)
}
