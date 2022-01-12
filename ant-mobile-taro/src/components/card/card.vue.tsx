/* eslint-disable react/react-in-jsx-scope */
import { PropType, CSSProperties, defineComponent } from 'vue'
import { ITouchEvent, View } from '@tarojs/components'
import classNames from 'classnames'
import { withNativeProps } from '../../utils/native-props.vue'

const classPrefix = `adm-card`

export const CardProps = {
  title: [String, Object, Function],
  extra: [String, Object, Function],
  headerStyle: Object as PropType<CSSProperties>,
  bodyStyle: Object as PropType<CSSProperties>,
  bodyClassName: String,
  headerClassName: String,
}

export type CardProps = {
  title?: ReactNode
  extra?: ReactNode
  headerStyle?: React.CSSProperties
  headerClassName?: string
  bodyStyle?: React.CSSProperties
  bodyClassName?: string
  onClick?: (event: ITouchEvent) => void
  onBodyClick?: (event: ITouchEvent) => void
  onHeaderClick?: (event: ITouchEvent) => void
} & NativeProps

export const Card = withNativeProps({
  name: 'Card',
  emits: ['click', 'bodyClick', 'headerClick'],
  props: CardProps,
  setup(props, { attrs, slots, emit }) {
    const handleHeaderClick = (event: ITouchEvent) => {
      emit('headerClick', event)
    }

    const handleBodyClick = (event: ITouchEvent) => {
      emit('bodyClick', event)
    }

    const handleClick = (event: ITouchEvent) => {
      emit('click', event)
    }

    const Header = defineComponent({
      name: 'CardHeader',
      setup() {
        return () =>
          !(props.title || props.extra) ? null : (
            <View
              className={classNames(
                `${classPrefix}-header`,
                props.headerClassName
              )}
              style={props.headerStyle}
              onClick={handleHeaderClick}
            >
              <View className={`${classPrefix}-header-title`}>
                {props.title}
              </View>
              {props.extra}
            </View>
          )
      },
    })

    const Body = defineComponent({
      name: 'CardBody',
      setup() {
        return () =>
          !slots.default ? null : (
            <View
              className={classNames(`${classPrefix}-body`, props.bodyClassName)}
              style={props.bodyStyle}
              onClick={handleBodyClick}
            >
              {slots.default()}
            </View>
          )
      },
    })

    return () => (
      <View
        {...attrs}
        className={classNames(classPrefix, attrs.className, attrs.class)}
        onClick={handleClick}
      >
        <Header />
        <Body />
      </View>
    )
  },
})
