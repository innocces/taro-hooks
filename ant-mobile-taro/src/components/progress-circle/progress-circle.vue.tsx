/* eslint-disable react/react-in-jsx-scope */
import { computed, ref, watchEffect } from 'vue'
import { View } from '@tarojs/components'
import { ISetupContext, withNativeProps } from '../../utils/native-props.vue'
import { template } from './svg.template'
import { getComputedStyle } from '../../utils/get-client-rect'
import { uuid } from '../../utils/tool'
import { nextTick } from '@tarojs/taro'
import hex2rgb from '../../utils/hex2rgb'

const classPrefix = `adm-progress-circle`

export const ProgressCircleProps = {
  percent: {
    type: Number,
    default: 0,
  },
}

export const ProgressCircle = withNativeProps({
  name: 'ProgressCircle',
  props: ProgressCircleProps,
  setup(
    props,
    {
      slots,
      attrs,
    }: ISetupContext<
      '--size' | '--track-width' | '--track-color' | '--fill-color'
    >
  ) {
    const background = ref('')
    const progressCircleTrackUUID = ref(uuid(`${classPrefix}-track`))
    const progressCircleFillUUID = ref(uuid(`${classPrefix}-fill`))
    const style = computed(() => {
      return {
        '--percent': props.percent.toString(),
        ...attrs.style,
      }
    })

    watchEffect(() => {
      nextTick(async () => {
        const { stroke, 'stroke-width': strokeWidth } =
          (await getComputedStyle('#' + progressCircleTrackUUID.value, [
            'stroke',
            'stroke-width',
          ])) || {}
        const {
          'stroke-dasharray': strokeDasharray,
          'stroke-dashoffset': strokeDashOffset,
          stroke: fillStroke,
        } = (await getComputedStyle('#' + progressCircleFillUUID.value, [
          'stroke',
          'stroke-dasharray',
          'stroke-dashoffset',
        ])) || {}
        const customFillStroke = attrs.style?.['--fill-color']
          ? hex2rgb(attrs.style?.['--fill-color'])
          : null
        if (stroke) {
          const computedBackground = template(
            stroke,
            customFillStroke || fillStroke,
            strokeDasharray,
            strokeDashOffset,
            strokeWidth
          ).replace(/<|>/g, matchString => encodeURIComponent(matchString))
          background.value = computedBackground
        }
      })
    })

    return () => (
      <View className={`${classPrefix}`} style={style.value}>
        <View
          className={`${classPrefix}-content`}
          style={{
            background: `url("data:image/svg+xml, ${background.value}") center center / cover no-repeat`,
          }}
        >
          <View className={`${classPrefix}-svg`}>
            <View
              className={`${classPrefix}-track`}
              id={progressCircleTrackUUID.value}
            />
            <View
              className={`${classPrefix}-fill`}
              id={progressCircleFillUUID.value}
            />
          </View>
          <View className={`${classPrefix}-info`}>{slots?.default?.()}</View>
        </View>
      </View>
    )
  },
})
