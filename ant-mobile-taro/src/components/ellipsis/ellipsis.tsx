import React, { FC, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useResizeEffect } from '../../utils/use-resize-effect'
import { nextTick } from '@tarojs/taro'
import { getComputedStyle } from '../../utils/get-client-rect'
import { uuid } from '../../utils/tool'

const classPrefix = `adm-ellipsis`

export type EllipsisProps = {
  content: string
  direction?: 'start' | 'end' | 'middle'
  rows?: number
  expandText?: string
  collapseText?: string
} & NativeProps

const defaultProps = {
  direction: 'end',
  rows: 1,
  expandText: '',
  collapseText: '',
}

type EllipsisedValue = {
  leading?: string
  tailing?: string
}

export const Ellipsis: FC<EllipsisProps> = p => {
  const props = mergeProps(defaultProps, p)
  const rootRef = useRef<HTMLDivElement>(null)
  const ellipsisUUID = useRef<string>(uuid(classPrefix))
  const ellipsisRectUUID = useRef<string>(uuid(classPrefix + '-' + 'rect'))
  const containerRef = useRef<HTMLDivElement>(null)
  const rectWord = useRef<string>(props.content)

  const [ellipsised, setEllipsised] = useState<EllipsisedValue>({})
  const [expanded, setExpanded] = useState(false)
  const [exceeded, setExceeded] = useState(false)

  useResizeEffect(() => {
    nextTick(async () => {
      const root = rootRef.current
      const container = containerRef.current
      if (!root || !container) return
      const {
        'line-height': originLineHeight,
        'padding-top': paddingTop,
        'padding-bottom': paddingBottom,
      } = (await getComputedStyle(`#${ellipsisUUID.current}`, [
        'line-height',
        'padding-top',
        'padding-bottom',
        'with',
      ])) as any
      container.style.lineHeight = originLineHeight

      const { height } = (await getComputedStyle(
        `#${ellipsisRectUUID.current}`,
        ['height']
      )) as any
      console.log(
        height,
        originLineHeight,
        paddingTop,
        paddingBottom,
        container
      )
      const offsetHeight = pxToNumber(String(container.offsetHeight ?? height))
      // return
      const lineHeight = pxToNumber(originLineHeight)
      const maxHeight = Math.floor(
        lineHeight * (props.rows + 0.5) +
          pxToNumber(paddingTop) +
          pxToNumber(paddingBottom)
      )
      console.log(maxHeight, offsetHeight)

      if (offsetHeight <= maxHeight) {
        setExceeded(false)
      } else {
        setExceeded(true)
        const end = props.content.length
        const actionText = expanded ? props.collapseText : props.expandText

        async function check(
          left: number,
          right: number
        ): Promise<EllipsisedValue> {
          if (right - left <= 1) {
            if (props.direction === 'end') {
              return {
                leading: props.content.slice(0, left) + '...',
              }
            } else {
              return {
                tailing: '...' + props.content.slice(right, end),
              }
            }
          }

          const middle = Math.round((left + right) / 2)
          if (props.direction === 'end') {
            rectWord.current =
              props.content.slice(0, middle) + '...' + actionText
          } else {
            rectWord.current =
              actionText + '...' + props.content.slice(middle, end)
          }
          const { height } = (await getComputedStyle(
            `#${ellipsisRectUUID.current}`,
            ['height']
          )) as any
          const offsetHeight = pxToNumber(
            String(container!.offsetHeight ?? height)
          )
          console.log(
            props.direction,
            actionText + '...' + props.content.slice(middle, end),
            offsetHeight <= maxHeight,
            offsetHeight,
            maxHeight
          )

          if (offsetHeight <= maxHeight) {
            if (props.direction === 'end') {
              return await check(middle, right)
            } else {
              return await check(left, middle)
            }
          } else {
            if (props.direction === 'end') {
              return await check(left, middle)
            } else {
              return await check(middle, right)
            }
          }
        }

        async function checkMiddle(
          leftPart: [number, number],
          rightPart: [number, number]
        ): Promise<EllipsisedValue> {
          if (
            leftPart[1] - leftPart[0] <= 1 &&
            rightPart[1] - rightPart[0] <= 1
          ) {
            return {
              leading: props.content.slice(0, leftPart[0]) + '...',
              tailing: '...' + props.content.slice(rightPart[1], end),
            }
          }
          const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2)
          const rightPartMiddle = Math.floor((rightPart[0] + rightPart[1]) / 2)
          rectWord.current =
            props.content.slice(0, leftPartMiddle) +
            '...' +
            actionText +
            '...' +
            props.content.slice(rightPartMiddle, end)
          const { height } = (await getComputedStyle(
            `#${ellipsisRectUUID.current}`,
            ['height']
          )) as any
          const offsetHeight = pxToNumber(
            String(container!.offsetHeight ?? height)
          )
          if (offsetHeight <= maxHeight) {
            return checkMiddle(
              [leftPartMiddle, leftPart[1]],
              [rightPart[0], rightPartMiddle]
            )
          } else {
            return checkMiddle(
              [leftPart[0], leftPartMiddle],
              [rightPartMiddle, rightPart[1]]
            )
          }
        }

        const middle = Math.floor((0 + end) / 2)
        const ellipsised =
          props.direction === 'middle'
            ? await checkMiddle([0, middle], [middle, end])
            : await check(0, end)
        setEllipsised(ellipsised)
      }
    })
  }, rootRef)

  const expandActionElement =
    exceeded && props.expandText ? (
      <View
        className='adm-link'
        onClick={() => {
          setExpanded(true)
        }}
      >
        {props.expandText}
      </View>
    ) : null

  const collapseActionElement =
    exceeded && props.expandText ? (
      <View
        className='adm-link'
        onClick={() => {
          setExpanded(false)
        }}
      >
        {props.collapseText}
      </View>
    ) : null

  const renderContent = () => {
    if (!exceeded) {
      return props.content
    }
    if (expanded) {
      return (
        <>
          {props.content}
          {collapseActionElement}
        </>
      )
    } else {
      return (
        <>
          {ellipsised.leading}
          {expandActionElement}
          {ellipsised.tailing}
        </>
      )
    }
  }

  return withNativeProps(
    props,
    <>
      <View id={ellipsisUUID.current} ref={rootRef} className={classPrefix}>
        {/* force text shrink */}
        {Object.keys(ellipsised).length ? renderContent() : ''}
      </View>
      <View
        id={ellipsisRectUUID.current}
        ref={containerRef}
        className={`${classPrefix}-rect`}
      >
        {rectWord.current}
      </View>
    </>
  )
}

function pxToNumber(value: string | null): number {
  if (!value) return 0
  const match = value.match(/^\d*(\.\d*)?/)
  return match ? Number(match[0]) : 0
}
