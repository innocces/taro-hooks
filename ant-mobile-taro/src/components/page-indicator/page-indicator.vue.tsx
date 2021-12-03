/* eslint-disable react/react-in-jsx-scope */
import { PropType } from 'vue'
import { View } from '@tarojs/components'
import { ISetupContext, withNativeProps } from '../../utils/native-props.vue'
import classNames from 'classnames'

const classPrefix = `adm-page-indicator`

type PageIndicatorDirection = 'horizontal' | 'vertical'
type PageIndicatorColor = 'primary' | 'white'

export const PageIndicatorProps = {
  total: {
    type: Number,
    required: true,
  },
  current: {
    type: Number,
    required: true,
  },
  direction: {
    type: String as PropType<PageIndicatorDirection>,
    default: 'horizontal',
  },
  color: {
    type: String as PropType<PageIndicatorColor>,
    default: 'primary',
  },
}

export const PageIndicator = withNativeProps({
  name: 'PageIndicator',
  props: PageIndicatorProps,
  setup(
    props,
    {
      attrs,
    }: ISetupContext<
      | '--dot-color'
      | '--active-dot-color'
      | '--dot-size'
      | '--active-dot-size'
      | '--dot-border-radius'
      | '--active-dot-border-radius'
      | '--dot-spacing'
    >
  ) {
    const dots: JSX.Element[] = []
    for (let i = 0; i < props.total!; i++) {
      dots.push(
        <View
          key={i}
          className={classNames(`${classPrefix}-dot`, {
            [`${classPrefix}-dot-active`]: props.current === i,
          })}
        />
      )
    }
    return () => (
      <View
        className={classNames(
          classPrefix,
          `${classPrefix}-${props.direction}`,
          `${classPrefix}-color-${props.color}`,
          attrs.className,
          attrs.class
        )}
      >
        {dots}
      </View>
    )
  },
})
