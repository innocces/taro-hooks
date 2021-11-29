/* eslint-disable react/react-in-jsx-scope */
import { PropType } from 'vue'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ISetupContext, withNativeProps } from '../../utils/native-props.vue'

const classPrefix = `adm-list`

type ListMode = 'default' | 'card' // 默认是整宽的列表，card 模式下展示为带 margin 和圆角的卡片

const ListProps = {
  mode: {
    type: String as PropType<ListMode>,
    default: 'default',
  },
}

export const List = withNativeProps({
  name: 'List',
  props: ListProps,
  setup(
    props,
    {
      attrs,
      slots,
    }: ISetupContext<
      '--prefix-width' | '--align-items' | '--active-background-color'
    >
  ) {
    return () => (
      <View
        className={classNames(
          classPrefix,
          `${classPrefix}-${props.mode}`,
          attrs.className,
          attrs.class
        )}
      >
        <View className={`${classPrefix}-inner`}>
          {slots.default && slots.default()}
        </View>
      </View>
    )
  },
})
