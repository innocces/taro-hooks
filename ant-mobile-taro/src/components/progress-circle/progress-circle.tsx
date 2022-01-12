import React, {
  CSSProperties,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { View } from '@tarojs/components'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { template } from './svg.template'
import { getComputedStyle } from '../../utils/get-client-rect'
import { uuid } from '../../utils/tool'
import { nextTick } from '@tarojs/taro'
import hex2rgb from '../../utils/hex2rgb'

const classPrefix = `adm-progress-circle`

export type ProgressCircleProps = {
  percent?: number
  children?: React.ReactNode
} & NativeProps<'--size' | '--track-width' | '--track-color' | '--fill-color'>

export const ProgressCircle: FC<ProgressCircleProps> = p => {
  const props = mergeProps({ percent: 0, strokeColor: '#1677FF' }, p)
  const [background, setBackground] = useState<string>('')
  const style: CSSProperties & Record<'--percent', string> = {
    '--percent': props.percent.toString(),
  }
  const progressCircleTrackUUID = useRef(uuid(`${classPrefix}-track`))
  const progressCircleFillUUID = useRef(uuid(`${classPrefix}-fill`))

  const getBackground = useCallback(async () => {
    nextTick(async () => {
      const { stroke, 'stroke-width': strokeWidth } =
        (await getComputedStyle('#' + progressCircleTrackUUID.current, [
          'stroke',
          'stroke-width',
        ])) || {}
      const {
        'stroke-dasharray': strokeDasharray,
        'stroke-dashoffset': strokeDashOffset,
        stroke: fillStroke,
      } = (await getComputedStyle('#' + progressCircleFillUUID.current, [
        'stroke',
        'stroke-dasharray',
        'stroke-dashoffset',
      ])) || {}
      const customFillStroke = props.style?.['--fill-color']
        ? hex2rgb(props.style?.['--fill-color'])
        : null

      if (stroke) {
        const computedBackground = template(
          stroke,
          customFillStroke || fillStroke,
          strokeDasharray,
          strokeDashOffset,
          strokeWidth
        ).replace(/<|>/g, matchString => encodeURIComponent(matchString))

        setBackground(computedBackground)
      }
    })
  }, [props, progressCircleFillUUID, progressCircleTrackUUID])

  useEffect(() => {
    console.log(props)
    getBackground()
  }, [props])

  return withNativeProps(
    props,
    <View className={`${classPrefix}`} style={style}>
      <View
        className={`${classPrefix}-content`}
        style={{
          background: `url("data:image/svg+xml, ${background}") center center / cover no-repeat`,
        }}
      >
        <View className={`${classPrefix}-svg`}>
          <View
            className={`${classPrefix}-track`}
            id={progressCircleTrackUUID.current}
          />
          <View
            className={`${classPrefix}-fill`}
            id={progressCircleFillUUID.current}
          />
        </View>
        <View className={`${classPrefix}-info`}>{props.children}</View>
      </View>
    </View>
  )
}
