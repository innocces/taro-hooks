/* eslint-disable react/react-in-jsx-scope */
import { watchEffect, ref, toRefs, h, PropType } from 'vue'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import { withNativeProps } from '../../utils/native-props.vue'
import { uuid } from '../../utils/tool'
import hex2rgb from '../../utils/hex2rgb'
import { getColor } from '../../utils/get-client-rect'

const classPrefix = `adm-step`

export type StepStatus = 'wait' | 'process' | 'finish' | 'error'

export const StepProps = {
  title: [Function, Object, String],
  description: [Function, Object, String],
  icon: [Function, Object, String],
  status: {
    type: String as PropType<StepStatus>,
    default: 'wait',
  },
}

export const Step = withNativeProps({
  name: 'Step',
  props: StepProps,
  setup(props, { attrs, slots }) {
    const { title, description, icon, status } = toRefs(props)
    const iconColor = ref('currentColor')
    const stepUUID = ref(uuid(classPrefix))

    watchEffect(() => {
      nextTick(() =>
        getColor(`#${stepUUID.value}`).then(color => {
          console.log(props.status)
          iconColor.value = hex2rgb(color)
        })
      )
    })

    return () => (
      <View
        {...attrs}
        className={classNames(
          `${classPrefix}`,
          `${classPrefix}-status-${status.value}`,
          attrs.className,
          attrs.class
        )}
      >
        <View className={`${classPrefix}-indicator`}>
          <View id={stepUUID.value} className={`${classPrefix}-icon-container`}>
            {h((slots.icon || icon?.value)!, { color: iconColor.value })}
          </View>
        </View>
        <View className={`${classPrefix}-content`}>
          <View className={`${classPrefix}-title`}>
            {title?.value || slots.title?.()}
          </View>
          {!!(description?.value || slots.description) && (
            <View className={`${classPrefix}-description`}>
              {description?.value || slots.description?.()}
            </View>
          )}
        </View>
      </View>
    )
  },
})
