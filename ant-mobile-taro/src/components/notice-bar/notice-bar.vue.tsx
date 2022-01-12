/* eslint-disable react/react-in-jsx-scope */
import { PropType, ref, h, watchEffect, Component, CSSProperties } from 'vue'
import classNames from 'classnames'
import { View, Text, ITouchEvent } from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import { Close, Sound } from 'ant-mobile-icon-taro/es/index.vue'
import useTimeout from '../../utils/use-time-out.vue'
import { ISetupContext, withNativeProps } from '../../utils/native-props.vue'
import { useResizeEffect } from '../../utils/use-resize-effect.vue'
import { getClientRect, getColor } from '../../utils/get-client-rect'
import { uuid, nextTickDelay, FRAMETIME, getVueElement } from '../../utils/tool'
import { isWeapp } from '../../utils/use-env'

const classPrefix = `adm-notice-bar`

export type NoticeBarColor = 'default' | 'alert' | 'error' | 'info'

export const NoticeBarProps = {
  color: {
    type: String as PropType<NoticeBarColor>,
    default: 'default',
  },
  delay: {
    type: Number,
    default: 2000,
  },
  speed: {
    type: Number,
    default: 50,
  },
  content: [Object, Function, String],
  closeable: Boolean,
  extra: [Object, Function, String],
  icon: [Object, Function, String],
}

export const NoticeBar = withNativeProps({
  name: 'NoticeBar',
  emits: ['close'],
  props: NoticeBarProps,
  setup(
    props,
    {
      attrs,
      slots,
      emit,
    }: ISetupContext<'--background-color' | '--border-color' | '--text-color'>
  ) {
    // due to query cannot use in scope. use uuid to be uniq
    const containerUUID = ref(uuid(`${classPrefix}-content`))
    const textUUID = ref(uuid(`${classPrefix}-content-inner`))
    const style = ref<CSSProperties>({})

    const containerRef = ref<Component | null>(null)
    const textRef = ref<Component | null>(null)

    const visible = ref(true)
    const iconColor = ref<string>()

    const delayLockRef = ref(true)
    const animatingRef = ref(false)

    async function start() {
      if (delayLockRef.value) return

      const container = getVueElement(containerRef.value)
      const text = getVueElement(textRef.value)

      if (!container || !text) return
      const containerRect = await getClientRect(`#${containerUUID.value}`)
      const textRect = await getClientRect(`#${textUUID.value}`)

      if (containerRect.width >= textRect.width) {
        animatingRef.value = false
        style.value = {}
        return
      }

      if (animatingRef.value) return
      const initial = !style.value.transform
      style.value.transitionDuration = '0s'
      if (initial) {
        style.value.transform = 'translateX(0)'
      } else {
        style.value.transform = `translateX(${containerRect.width}px)`
      }
      const distance = initial
        ? textRect.width
        : containerRect.width + textRect.width
      animatingRef.value = true
      // maybe batch, use timeout to micro
      nextTickDelay(
        () => {
          const delay = Math.round(distance / props.speed)
          style.value.transitionDuration = `${delay}s`
          style.value.transform = `translateX(-${textRect.width}px)`

          setTimeout(handleTransitionEnd, delay * 1000)
        },
        false,
        FRAMETIME
      )
    }

    useTimeout(() => {
      delayLockRef.value = false
      start()
    }, props.delay)

    useResizeEffect(() => {
      nextTick(() => {
        start()
      })
    }, containerRef)

    watchEffect(() => {
      nextTickDelay(async () => {
        const inheritColor = await getColor(`#${containerUUID.value}`)
        iconColor.value =
          attrs.style?.['--text-color'] ?? inheritColor ?? 'currentColor'
      })
    })

    const handleClose = (event: ITouchEvent) => {
      console.log('handleClose')
      visible.value = false
      emit('close', event)
    }

    const handleTransitionEnd = () => {
      animatingRef.value = false
      start()
    }

    return () =>
      visible.value ? (
        <View
          {...attrs}
          className={classNames(
            classPrefix,
            `${classPrefix}-${props.color}`,
            attrs.className,
            attrs.class
          )}
        >
          <Text className={`${classPrefix}-left`}>
            {props.icon || slots.icon ? (
              h(props.icon || slots.icon, { color: iconColor.value })
            ) : (
              <Sound color={iconColor.value} />
            )}
          </Text>
          <View
            ref={ref => (containerRef.value = ref)}
            className={`${classPrefix}-content`}
            id={containerUUID.value}
          >
            <View
              style={style.value}
              ref={ref => (textRef.value = ref)}
              id={textUUID.value}
              className={`${classPrefix}-content-inner`}
            >
              {props.content || slots?.default?.()}
            </View>
          </View>
          {(props.closeable || props.extra || slots.extra) && (
            <View className={`${classPrefix}-right`}>
              {(props.extra || slots.extra) &&
                h(props.extra || slots.extra, { color: iconColor.value })}
              {props.closeable && (
                <Close color={iconColor.value} onClick={handleClose} />
              )}
            </View>
          )}
        </View>
      ) : null
  },
})
