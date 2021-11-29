/* eslint-disable react/react-in-jsx-scope */
import { computed, ref, watch } from 'vue'
import type { PropType } from 'vue'
import classNames from 'classnames'
import { View, Image as TaroImage } from '@tarojs/components'
import type { ITouchEvent, CommonEventFunction } from '@tarojs/components'
import type { ImageProps as CustomImageProps } from '@tarojs/components/types/Image'
import { Meh, Frown } from 'ant-mobile-icon-taro/es/index.vue'
import { toCSSLength } from '../../utils/to-css-length'
import { withNativeProps, ISetupContext } from '../../utils/native-props.vue'
import { LazyDetector } from './lazy-detector.vue'
import { isWeapp } from '../../utils/use-env'

const classPrefix = `adm-image`

export type TImageFit =
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
export type TImageDecoding = 'async' | 'sync' | 'auto'

const DefaultPlaceholder = withNativeProps({
  name: 'DefaultPlaceholder',
  setup() {
    return () => (
      <View className={`${classPrefix}-tip`}>
        <Meh usePX />
      </View>
    )
  },
})

const DefaultFallback = withNativeProps({
  name: 'DefaultFallback',
  setup() {
    return () => (
      <View className={`${classPrefix}-tip`}>
        <Frown usePX />
      </View>
    )
  },
})

const ImageProps = {
  src: {
    type: String,
    required: true,
  },
  alt: String,
  width: [Number, String],
  height: [Number, String],
  fit: {
    type: String as PropType<TImageFit>,
    default: 'scaleToFill',
  },
  placeholder: {
    type: [Function, Object],
    default: () => <DefaultPlaceholder />,
  },
  fallback: {
    type: [Function, Object],
    default: () => <DefaultFallback />,
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  crossOrigin: String,
  decoding: String as PropType<TImageDecoding>,
  loading: String,
  referrerPolicy: String,
  sizes: String,
  srcSet: String,
  useMap: String,
}

export default withNativeProps({
  name: 'Image',
  props: ImageProps,
  emits: ['click', 'error'],
  setup(props, { attrs, emit }: ISetupContext<'--width' | '--height'>) {
    const loaded = ref(false)
    const failed = ref(false)
    const listenSrc = ref(props.src)
    const initialized = ref(!props.lazy)
    const weappEnv = isWeapp()

    watch(listenSrc, () => {
      loaded.value = false
      failed.value = false
    })

    const src = computed(() => {
      if (weappEnv || initialized.value) {
        return props.src
      }
      return undefined
    })

    const srcSet = computed(() => {
      if (weappEnv || initialized.value) {
        return props.srcSet
      }
      return undefined
    })

    const handleClick = (event: ITouchEvent) => {
      emit('click', event)
    }

    const handleError: CommonEventFunction<CustomImageProps.onErrorEventDetail> =
      event => {
        emit('error', event)
      }

    const style: ISetupContext['attrs']['style'] = {}
    if (props.width) {
      style['--width'] = toCSSLength(props.width)
    }
    if (props.height) {
      style['--height'] = toCSSLength(props.height)
    }

    return () => (
      <View
        ref={ref}
        className={classNames(classPrefix, attrs.className, attrs.class)}
        style={style}
      >
        {props.lazy && !initialized.value && !weappEnv && (
          <>
            <LazyDetector onActive={() => (initialized.value = true)} />
          </>
        )}
        {failed.value ? (
          props.fallback
        ) : (
          <>
            {!loaded.value && props.placeholder}
            <TaroImage
              className={`${classPrefix}-img`}
              src={src.value}
              onClick={handleClick}
              onLoad={() => {
                loaded.value = true
              }}
              onError={e => {
                failed.value = true
                handleError(e)
              }}
              mode={props.fit}
              style={{
                display: loaded.value ? 'block' : 'none',
              }}
              {...(weappEnv ? { lazyLoad: props.lazy } : {})}
              nativeProps={{
                crossOrigin: props.crossOrigin,
                alt: props.alt,
                decoding: props.decoding,
                loading: props.loading,
                referrerPolicy: props.referrerPolicy,
                srcSet: srcSet.value,
                sizes: props.sizes,
                useMap: props.useMap,
              }}
            />
          </>
        )}
      </View>
    )
  },
})
