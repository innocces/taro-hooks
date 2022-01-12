import React, { FC, useEffect, useRef, ComponentType } from 'react'
import { View } from '@tarojs/components'
import type { ViewProps } from '@tarojs/components/types/View'
import { useInViewport } from 'ahooks'

type Props = {
  onActive: () => void
}

export const LazyDetector: FC<Props> = props => {
  const ref = useRef<ComponentType<ViewProps>>(null)
  const inViewport = useInViewport(ref)

  useEffect(() => {
    if (inViewport) {
      props.onActive()
    }
  }, [inViewport])

  return <View ref={ref} />
}
