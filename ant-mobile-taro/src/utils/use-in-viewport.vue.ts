// vue ver of useInViewport: https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useInViewport/index.ts
import 'intersection-observer'
import { ref, watchEffect, onUnmounted } from 'vue'
import type { BasicTarget } from './dom-target.vue'
import { getTargetElement } from './dom-target.vue'

export interface Options {
  rootMargin?: string
  threshold?: number | number[]
  root?: BasicTarget<Element>
}

function useInViewport(target: BasicTarget, options?: Options) {
  const state = ref<boolean>()
  const ratio = ref<number>()
  const observer = ref<IntersectionObserver>()

  watchEffect(() => {
    const el = getTargetElement(target)
    if (!el) {
      return
    }

    observer.value = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          ratio.value = entry.intersectionRatio
          if (entry.isIntersecting) {
            state.value = true
          } else {
            state.value = false
          }
        }
      },
      {
        ...options,
        root: getTargetElement(options?.root),
      }
    )

    observer.value.observe(el)
  })

  onUnmounted(() => {
    observer.value && observer.value.disconnect()
  })

  return [state, ratio] as const
}

export default useInViewport
