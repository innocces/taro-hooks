/* eslint-disable react/react-in-jsx-scope */
import { PropType, watchEffect, ref, h } from 'vue'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import {
  CheckCircleFill,
  CloseCircleFill,
  InfoCircleFill,
  TimeCircleFill,
  WarningCircleFill,
} from 'ant-mobile-icon-taro/es/index.vue'
import { withNativeProps } from '../../utils/native-props.vue'
import { uuid } from '../../utils/tool'
import { getColor } from '../../utils/get-client-rect'
import hex2rgb from '../../utils/hex2rgb'

const classPrefix = `adm-result`

const iconRecord = {
  success: CheckCircleFill,
  error: CloseCircleFill,
  info: InfoCircleFill,
  waiting: TimeCircleFill,
  warning: WarningCircleFill,
}

export type ResultStatus = 'success' | 'error' | 'info' | 'waiting' | 'warning'

export const ResultProps = {
  status: {
    type: String as PropType<ResultStatus>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  icon: [Function, Object],
}

export const Result = withNativeProps({
  name: 'Result',
  props: ResultProps,
  setup(props, { slots }) {
    const resultUUID = ref(uuid(classPrefix))
    const iconColor = ref('currentColor')

    if (!props.status) return null

    watchEffect(() => {
      nextTick(() =>
        getColor(`#${resultUUID.value}`).then(color => {
          console.log(props.status)
          iconColor.value = hex2rgb(color)
        })
      )
    })

    return () => (
      <View
        className={classNames(classPrefix, `${classPrefix}-${props.status}`)}
      >
        <View className={`${classPrefix}-icon`} id={resultUUID.value}>
          {h(slots.icon || props.icon || iconRecord[props.status], {
            size: 52,
            usePX: true,
            color: iconColor.value,
          })}
        </View>
        <View className={`${classPrefix}-title`}>
          {slots.title?.() || props.title}
        </View>
        {slots.description || props.description ? (
          <View className={`${classPrefix}-description`}>
            {slots.description?.() || props.description}
          </View>
        ) : null}
      </View>
    )
  },
})
