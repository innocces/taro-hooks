/* eslint-disable react/react-in-jsx-scope */
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ISetupContext, withNativeProps } from '../../utils/native-props.vue'
import { defineComponent } from 'vue'

export const dot = Symbol()

const classPrefix = `adm-badge`

export const BadgeProps = {
  content: {
    // @ts-ignore
    validator(value) {
      return ['function', 'object', 'string', typeof dot].includes(typeof value)
    },
  },
  color: {
    type: String,
    default: '#FF411C',
  },
}

export const Badge = withNativeProps({
  name: 'Badge',
  props: BadgeProps,
  setup(props, { attrs, slots }: ISetupContext<'--right' | '--top'>) {
    const isDot = props.content === dot

    const badgeCls = classNames(
      classPrefix,
      {
        [`${classPrefix}-fixed`]: !!slots.default,
        [`${classPrefix}-dot`]: isDot,
      },
      attrs.className,
      attrs.class
    )
    const Element = defineComponent({
      name: 'BadgeWrapperElement',
      setup() {
        return () => (
          <View
            className={badgeCls}
            style={{
              ...attrs.style,
              backgroundColor: props.color,
            }}
          >
            {!isDot && props.content}
          </View>
        )
      },
    })
    return () =>
      slots.default ? (
        <View className={`${classPrefix}-wrap`}>
          {slots.default()}
          {<Element />}
        </View>
      ) : (
        <Element />
      )
  },
})
