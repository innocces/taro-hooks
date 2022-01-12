/* eslint-disable react/react-in-jsx-scope */
import { toRefs, h, PropType } from 'vue'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import { withNativeProps } from '../../utils/native-props.vue'

const classPrefix = `adm-steps`
const stepClassPrefix = `adm-step`

const defaultIcon = <Text className={`${stepClassPrefix}-icon-dot`} />

type Direction = 'horizontal' | 'vertical'

export const StepsProps = {
  current: {
    type: Number,
    default: 0,
  },
  direction: {
    type: String as PropType<Direction>,
    default: 'horizontal',
  },
}

export const Steps = withNativeProps({
  name: 'Steps',
  props: StepsProps,
  setup(props, { attrs, slots }) {
    const { direction, current } = toRefs(props)
    const classString = classNames(
      classPrefix,
      `${classPrefix}-${direction.value}`,
      attrs.className,
      attrs.class
    )
    return () => (
      <View className={classString}>
        {slots.default &&
          slots.default().map((child, index) => {
            const childProps = child.props
            let status = childProps?.status || 'wait'

            if (index < current.value) {
              status = childProps?.status || 'finish'
            } else if (index === current.value) {
              status = childProps?.status || 'process'
            }

            // @ts-ignore
            const icon =
              childProps?.icon ?? child?.children?.icon ?? defaultIcon
            return h(child, {
              status,
              icon,
            })
          })}
      </View>
    )
  },
})
