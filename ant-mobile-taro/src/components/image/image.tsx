import React, { ReactNode, useState, useRef, ComponentType } from 'react'
import { View, Image as TaroImage } from '@tarojs/components'
import type { ITouchEvent, CommonEventFunction } from '@tarojs/components'
import type { ImageProps as TaroImageProps } from '@tarojs/components/types/Image'
import type { ViewProps } from '@tarojs/components/types/View'
import { Meh, Frown } from 'ant-mobile-icon-taro/es/index.react'
import { useUpdateLayoutEffect } from 'ahooks'
import { staged } from 'staged-components'
import { toCSSLength } from '../../utils/to-css-length'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { LazyDetector } from './lazy-detector'
import { isWeapp } from '../../utils/use-env'

const classPrefix = `adm-image`

export type ImageProps = {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  fit?:
    | 'scaleToFill'
    | 'aspectFit'
    | 'aspectFill'
    | 'widthFix'
    | 'heightFix'
    | 'top'
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
  placeholder?: ReactNode
  fallback?: ReactNode
  lazy?: boolean
  onClick?: (event: ITouchEvent) => void
  onError?: CommonEventFunction<TaroImageProps.onErrorEventDetail>
} & NativeProps<'--width' | '--height'> &
  Pick<
    React.ImgHTMLAttributes<HTMLImageElement>,
    | 'crossOrigin'
    | 'decoding'
    | 'loading'
    | 'referrerPolicy'
    | 'sizes'
    | 'srcSet'
    | 'useMap'
  >

const defaultProps = {
  fit: 'scaleToFill',
  placeholder: (
    <View className={`${classPrefix}-tip`}>
      <Meh usePX />
    </View>
  ),
  fallback: (
    <View className={`${classPrefix}-tip`}>
      <Frown usePX />
    </View>
  ),
  lazy: false,
}

export const Image = staged<ImageProps>(p => {
  const props = mergeProps(defaultProps, p)

  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const weappEnv = isWeapp()

  const ref = useRef<ComponentType<ViewProps>>(null)

  let src: string | undefined = props.src
  let srcSet: string | undefined = props.srcSet

  const [initialized, setInitialized] = useState(!props.lazy)

  src = weappEnv || initialized ? props.src : undefined
  srcSet = weappEnv || initialized ? props.srcSet : undefined

  useUpdateLayoutEffect(() => {
    setLoaded(false)
    setFailed(false)
  }, [src])

  function renderInner() {
    if (failed) {
      return <>{props.fallback}</>
    }
    const img = (
      <TaroImage
        className={`${classPrefix}-img`}
        src={src!}
        onClick={props.onClick}
        onLoad={() => {
          setLoaded(true)
        }}
        onError={e => {
          setFailed(true)
          props.onError?.(e)
        }}
        mode={props.fit}
        style={{
          display: loaded ? 'block' : 'none',
        }}
        {...(weappEnv ? { lazyLoad: props.lazy } : {})}
        nativeProps={{
          crossOrigin: props.crossOrigin,
          alt: props.alt,
          decoding: props.decoding,
          loading: props.loading,
          referrerPolicy: props.referrerPolicy,
          srcSet: srcSet,
          sizes: props.sizes,
          useMap: props.useMap,
        }}
      />
    )
    return (
      <>
        {!loaded && props.placeholder}
        {img}
      </>
    )
  }

  const style: ImageProps['style'] = {}
  if (props.width) {
    style['--width'] = toCSSLength(props.width)
  }
  if (props.height) {
    style['--height'] = toCSSLength(props.height)
  }
  console.log(props)
  return withNativeProps(
    props,
    <View ref={ref} className={classPrefix} style={style}>
      {props.lazy && !initialized && !weappEnv && (
        <LazyDetector
          onActive={() => {
            setInitialized(true)
          }}
        />
      )}
      {renderInner()}
    </View>
  )
})
