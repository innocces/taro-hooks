/* eslint-disable react/react-in-jsx-scope */
import { PropType, CSSProperties, computed } from 'vue'
import { ITouchEvent, Text } from '@tarojs/components'
import { withNativeProps, ISetupContext } from '../../utils/native-props.vue'
import classNames from 'classnames'

const classPrefix = `adm-tag`

const colorRecord: Record<string, string> = {
  default: '#666666',
  primary: 'var(--adm-color-primary, #1677ff)',
  success: 'var(--adm-color-success, #00b578)',
  warning: 'var(--adm-color-warning, #ff8f1f)',
  danger: 'var(--adm-color-danger, #ff3141)',
}

export type TagColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | (string & {})

export type TagFill = 'solid' | 'outline'

export const TagProps = {
  color: {
    type: String as PropType<TagColor>,
    default: 'default',
  },
  fill: {
    type: String as PropType<TagFill>,
    default: 'solid',
  },
  round: {
    type: Boolean,
    default: false,
  },
}

export const Tag = withNativeProps({
  name: 'Tag',
  emits: ['click'],
  props: TagProps,
  setup(
    props,
    {
      attrs,
      slots,
      emit,
    }: ISetupContext<
      | '--border-color'
      | '--background-color'
      | '--text-color'
      | '--border-radius'
    >
  ) {
    const handleClick = (event: ITouchEvent) => {
      emit('click', event)
    }
    const color = computed(() => {
      return colorRecord[props.color] ?? props.color
    })
    const style: CSSProperties & {
      '--border-color': string
      '--text-color': string
      '--background-color': string
    } = {
      ...attrs.style,
      '--border-color': color.value,
      '--text-color': props.fill === 'outline' ? color.value : '#ffffff',
      '--background-color':
        props.fill === 'outline' ? 'transparent' : color.value,
    }
    return () => (
      <Text
        {...attrs}
        style={style}
        onClick={handleClick}
        className={classNames(
          classPrefix,
          {
            [`${classPrefix}-round`]: props.round,
          },
          attrs.class,
          attrs.className
        )}
      >
        {slots.default?.()}
      </Text>
    )
  },
})
