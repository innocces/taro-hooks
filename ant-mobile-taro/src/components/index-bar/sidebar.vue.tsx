/* eslint-disable react/react-in-jsx-scope */
import { PropType, ref } from 'vue'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { withNativeProps } from '../../utils/native-props.vue'
import { isWeapp } from '../../utils/use-env'

const classPrefix = `adm-index-bar`

const SidebarProps = {
  indexes: {
    type: Array as PropType<string[]>,
    required: true,
  },
  activeIndex: {
    type: String,
    required: true,
  },
}

export const Sidebar = withNativeProps({
  name: 'Sidebar',
  props: SidebarProps,
  emits: ['active'],
  setup(props, { emit }) {
    const interacting = ref(false)
    const handleActive = (index: string) => {
      emit('active', index)
    }

    return () => (
      <View
        className={classNames(`${classPrefix}-sidebar`, {
          [`${classPrefix}-sidebar-interacting`]: interacting.value,
        })}
        onMouseDown={() => {
          interacting.value = true
        }}
        onMouseUp={() => {
          interacting.value = false
        }}
        onTouchStart={() => {
          interacting.value = true
        }}
        onTouchEnd={() => {
          interacting.value = false
        }}
        onTouchMove={e => {
          if (isWeapp()) return
          if (!interacting) return
          const { clientX, clientY } = e.touches[0]
          const target = document.elementFromPoint(
            clientX,
            clientY
          ) as HTMLElement
          if (!target) return
          const index = target.dataset['index']
          if (index) {
            handleActive(index)
          }
        }}
      >
        {props.indexes?.map((index: string) => {
          const active = index === props.activeIndex
          return (
            <View
              className={`${classPrefix}-sidebar-row`}
              onMouseDown={() => {
                handleActive(index)
              }}
              onClick={() => {
                handleActive(index)
              }}
              onTouchStart={() => {
                handleActive(index)
              }}
              onMouseEnter={() => {
                if (interacting.value) {
                  handleActive(index)
                }
              }}
              data-index={index}
              key={index}
            >
              {interacting.value && active && (
                <View className={`${classPrefix}-sidebar-bubble`}>{index}</View>
              )}
              <View
                className={classNames(`${classPrefix}-sidebar-item hydrated`, {
                  [`${classPrefix}-sidebar-item-active`]: active,
                })}
                data-index={index}
              >
                <View>{index}</View>
              </View>
            </View>
          )
        })}
      </View>
    )
  },
})
