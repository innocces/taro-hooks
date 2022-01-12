import { onMounted, onUpdated, Component, ref, onUnmounted, Ref } from 'vue'
import { onWindowResize, offWindowResize } from '@tarojs/taro'

export function useResizeEffect<T extends Component<any>>(
  effect: (target: T) => void,
  targetRef: Ref<T>
) {
  const fn = ref(effect)
  const observer = ref()

  const observerResize = () => {
    const target = targetRef.value?.$el
    if (!target) return
    if (window?.ResizeObserver) {
      observer.value = new ResizeObserver(() => {
        fn.value(target)
      })
      observer.value.observe(target as unknown as Element)
    } else {
      onWindowResize(() => {
        fn.value(target)
      })
    }
  }

  onMounted(observerResize)

  onUpdated(observerResize)

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    } else {
      offWindowResize(() => fn.value(targetRef.value))
    }
  })
}
