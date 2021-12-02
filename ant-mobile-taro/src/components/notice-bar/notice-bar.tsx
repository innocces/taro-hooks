import React, {
  useState,
  useRef,
  memo,
  ComponentType,
  cloneElement,
  useEffect,
  useCallback,
} from 'react'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'
import type { TextProps } from '@tarojs/components/types/Text'
import { nextTick } from '@tarojs/taro'
import { Close, Sound } from 'ant-mobile-icon-taro/es/index.react'
import { useTimeout } from 'ahooks'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useResizeEffect } from '../../utils/use-resize-effect'
import { useMutationEffect } from '../../utils/use-mutation-effect'
import { getClientRect, getColor } from '../../utils/get-client-rect'
import { uuid, nextTickDelay, FRAMETIME } from '../../utils/tool'

const classPrefix = `adm-notice-bar`

export type NoticeBarProps = {
  /** 通告栏的类型 */
  color?: 'default' | 'alert' | 'error' | 'info'
  /** 开始滚动的延迟，单位 ms */
  delay?: number
  /** 滚动速度，单位 px/s */
  speed?: number
  /** 公告内容 */
  content: React.ReactNode
  /** 是否可关闭 */
  closeable?: boolean
  /** 关闭时的回调 */
  onClose?: () => void
  /** 额外操作区域，显示在关闭按钮左侧 */
  extra?: React.ReactNode
  /** 左侧广播图标 */
  icon?: React.ReactNode
} & NativeProps<'--background-color' | '--border-color' | '--text-color'>

const defaultProps = {
  color: 'default',
  delay: 2000,
  speed: 50,
}

export const NoticeBar = memo<NoticeBarProps>(p => {
  const props = mergeProps(defaultProps, p)

  // due to query cannot use in scope. use uuid to be uniq
  const containerUUID = useRef(uuid(`${classPrefix}-content`))
  const textUUID = useRef(uuid(`${classPrefix}-content-inner`))

  const containerRef = useRef<ComponentType<TextProps>>(null)
  const textRef = useRef<ComponentType<TextProps>>(null)

  const [visible, setVisible] = useState(true)
  const [iconColor, setIconColor] = useState<string>()

  const speed = props.speed

  const delayLockRef = useRef(true)
  const animatingRef = useRef(false)

  async function start() {
    if (delayLockRef.current) return

    const container = containerRef.current
    const text = textRef.current
    if (!container || !text) return
    const containerRect = await getClientRect(`#${containerUUID.current}`)
    const textRect = await getClientRect(`#${textUUID.current}`)
    console.log(containerRect.width, textRect.width)
    if (containerRect.width >= textRect.width) {
      animatingRef.current = false
      text.style.removeProperty('transition-duration')
      text.style.removeProperty('transform')
      return
    }

    if (animatingRef.current) return
    console.log('mark animation')
    const initial = !text.style.transform
    text.style.transitionDuration = '0s'
    if (initial) {
      text.style.transform = 'translateX(0)'
    } else {
      text.style.transform = `translateX(${containerRect.width}px)`
    }
    const distance = initial
      ? textRect.width
      : containerRect.width + textRect.width
    animatingRef.current = true
    // maybe batch, use timeout to micro
    nextTickDelay(
      () => {
        text.style.transitionDuration = `${Math.round(distance / speed)}s`
        text.style.transform = `translateX(-${textRect.width}px)`
      },
      false,
      FRAMETIME
    )
  }

  useEffect(() => {
    getIconColor()
  }, [props.color, props.style])

  useTimeout(() => {
    delayLockRef.current = false
    start()
  }, props.delay)

  useResizeEffect(() => {
    nextTick(() => {
      start()
    })
  }, containerRef)

  useMutationEffect(() => {
    console.log('text mutation effect')
    nextTick(() => {
      start()
    })
  }, textRef)

  const getIconColor = useCallback(async () => {
    const inheritColor = await getColor(`#${containerUUID.current}`)
    setIconColor(
      props.style?.['--text-color'] ?? inheritColor ?? 'currentColor'
    )
  }, [props.color, props.style])

  if (!visible) return null

  return withNativeProps(
    props,
    <View className={classNames(classPrefix, `${classPrefix}-${props.color}`)}>
      <Text className={`${classPrefix}-left`}>
        {'icon' in props ? (
          cloneElement(props.icon, { color: iconColor })
        ) : (
          <Sound color={iconColor} onClick={console.log} />
        )}
      </Text>
      <View
        ref={containerRef}
        className={`${classPrefix}-content`}
        id={containerUUID.current}
      >
        <View
          onTransitionEnd={() => {
            animatingRef.current = false
            start()
          }}
          ref={textRef}
          id={textUUID.current}
          className={`${classPrefix}-content-inner`}
        >
          {props.content}
        </View>
      </View>
      {(props.closeable || props.extra) && (
        <View className={`${classPrefix}-right`}>
          {props.extra && cloneElement(props.extra, { color: iconColor })}
          {props.closeable && (
            <Close
              color={iconColor}
              onClick={() => {
                setVisible(false)
                props.onClose?.()
              }}
            />
          )}
        </View>
      )}
    </View>
  )
})
