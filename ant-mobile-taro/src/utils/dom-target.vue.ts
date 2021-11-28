import type { Ref } from 'vue'

type TargetValue<T> = T | undefined | null

type TargetType = HTMLElement | Element | Window | Document

export type BasicTarget<T extends TargetType = Element> =
  | (() => TargetValue<T>)
  | TargetValue<T>
  | Ref<T>

export function getTargetElement<T extends TargetType>(
  target: BasicTarget<T>,
  defaultElement?: T
) {
  if (!target) {
    return defaultElement
  }

  let targetElement: TargetValue<T>

  if (typeof target === 'function') {
    targetElement = target()
  } else if ('value' in target) {
    if (target.value && '$el' in target.value) {
      targetElement = target.value.$el
    } else {
      targetElement = target.value
    }
  } else {
    targetElement = target
  }

  return targetElement
}
