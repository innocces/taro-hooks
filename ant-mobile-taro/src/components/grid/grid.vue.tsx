/* eslint-disable react/react-in-jsx-scope */
import { toRefs, computed } from 'vue'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { ISetupContext, withNativeProps } from '../../utils/native-props.vue'
import { toCSSLength } from '../../utils/to-css-length'

const classPrefix = `adm-grid`

const GridProps = {
  columns: Number,
  gap: {
    validator(value: number | string | [number | string, number | string]) {
      return (
        ['string', 'number'].includes(typeof value) ||
        (Array.isArray(value) &&
          value.every(v => ['string', 'number'].includes(typeof v)))
      )
    },
  },
}

export const Grid = withNativeProps({
  name: 'Grid',
  props: GridProps,
  setup(
    props,
    {
      attrs,
      slots,
    }: ISetupContext<
      '--gap' | '--gap-vertical' | '--gap-horizontal' | '--columns'
    >
  ) {
    const { gap, columns } = toRefs(props)
    const { style } = attrs
    const gridStyle = computed(() => {
      const computedStyle = {
        ...style,
        '--columns': columns?.value?.toString(),
      }
      if (gap?.value !== undefined) {
        if (Array.isArray(gap.value)) {
          computedStyle['--gap-horizontal'] = toCSSLength(gap.value[0])
          computedStyle['--gap-vertical'] = toCSSLength(gap.value[1])
        } else {
          computedStyle['--gap'] = toCSSLength(gap.value as string | number)
        }
      }

      return computedStyle
    })
    return () => (
      <View
        className={classNames(classPrefix, attrs.class, attrs.className)}
        style={gridStyle.value}
      >
        {slots.default && slots.default()}
      </View>
    )
  },
})

const GridItemProps = {
  span: {
    type: Number,
    default: 1,
  },
}

export const GridItem = withNativeProps({
  name: 'GridItem',
  props: GridItemProps,
  emits: ['click'],
  setup(props, { attrs, emit, slots }: ISetupContext<'--item-span'>) {
    const handleClick = (event: ITouchEvent) => {
      emit('click', event)
    }
    const itemStyle = {
      ...attrs.style,
      '--item-span': props.span,
    }
    return () => (
      <View
        className={classNames(
          `${classPrefix}-item`,
          attrs.class,
          attrs.className
        )}
        style={itemStyle}
        onClick={handleClick}
      >
        {slots.default && slots.default()}
      </View>
    )
  },
})
