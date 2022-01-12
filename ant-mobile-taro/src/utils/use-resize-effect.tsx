import { RefObject, useLayoutEffect, ComponentType } from 'react'
import { onWindowResize, offWindowResize } from '@tarojs/taro'
import { useMemoizedFn } from 'ahooks'

export function useResizeEffect<T extends ComponentType<any>>(
  effect: (target: T) => void,
  targetRef: RefObject<T>
) {
  const fn = useMemoizedFn(effect)
  useLayoutEffect(() => {
    const target = targetRef.current
    if (!target) return
    if (window?.ResizeObserver) {
      const observer = new ResizeObserver(() => {
        fn(target)
      })
      observer.observe(target as unknown as Element)
      return () => {
        observer.disconnect()
      }
    } else {
      onWindowResize(() => {
        fn(target)
      })
    }

    return () => {
      offWindowResize(() => fn(target))
    }
  }, [targetRef])
}
