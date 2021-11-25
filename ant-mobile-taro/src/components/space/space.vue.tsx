/* eslint-disable react/react-in-jsx-scope */
import { PropType } from 'vue'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ISetupContext, withNativeProps } from '../../utils/native-props.vue'

const classPrefix = `adm-space`

export type SpaceDirection = 'horizontal' | 'vertical'
export type SpaceJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch'
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline'

const SpaceProps = {
  direction: {
    type: String as PropType<SpaceDirection>,
    default: 'horizontal',
  },
  justify: {
    type: String as PropType<SpaceJustify>,
  },
  align: {
    type: String as PropType<SpaceAlign>,
  },
  block: Boolean,
  wrap: Boolean,
}

export default withNativeProps({
  name: 'Space',
  props: SpaceProps,
  setup(
    props,
    {
      attrs,
      slots,
    }: ISetupContext<'--gap' | '--gap-vertical' | '--gap-horizontal'>
  ) {
    return () => (
      <View
        {...attrs}
        className={classNames(
          classPrefix,
          {
            [`${classPrefix}-wrap`]: props.wrap,
            [`${classPrefix}-block`]: props.block,
            [`${classPrefix}-${props.direction}`]: true,
            [`${classPrefix}-align-${props.align}`]: !!props.align,
            [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
          },
          attrs.class,
          attrs.className
        )}
      >
        {slots.default &&
          slots.default().map(child => {
            return (
              child !== null &&
              child !== undefined && (
                <View className={`${classPrefix}-item`}>{child}</View>
              )
            )
          })}
      </View>
    )
  },
})
