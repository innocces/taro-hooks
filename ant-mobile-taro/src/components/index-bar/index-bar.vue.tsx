/* eslint-disable react/react-in-jsx-scope */
import { ref, watchEffect, h, VNode, onMounted } from 'vue'
import classNames from 'classnames'
import { ScrollView, View } from '@tarojs/components'
import { ISetupContext, withNativeProps } from '../../utils/native-props.vue'
import { throttle } from 'lodash-wechat'
import { Sidebar } from './sidebar.vue'
import { convertPx } from '../../utils/convert-px'
import { devWarning } from '../../utils/dev-log'
import { getComputedStyle } from '../../utils/get-client-rect'
import { escapeUnit, getVueChildren, getVueElement } from '../../utils/tool'
import { nextTick } from '@tarojs/taro'

const classPrefix = `adm-index-bar`

export const IndexBarProps = {
  sticky: {
    type: Boolean,
    default: true,
  },
  height: {
    type: [String, Number],
    default: '100vh',
  },
}

export type IndexBarRef = {
  scrollTo: (index: string) => void
}

export const IndexBar = withNativeProps({
  name: 'IndexBar',
  props: IndexBarProps,
  setup(props, { attrs, slots }: ISetupContext<'--sticky-offset-top'>) {
    const titleHeight = convertPx(35)
    const bodyRef = ref<VNode>()
    const indexes = ref<string[]>([])
    const panels = ref<VNode[]>([])
    const offsetTopMap = ref<{ offsetTop: number; clientHeight: number }[]>([])
    const offsetTop = ref(0)
    const activeIndex = ref<string>()

    watchEffect(() => {
      nextTick(async () => {
        if (indexes.value.length) {
          const fields = (await getComputedStyle(
            `.${classPrefix}-anchor`,
            ['height'],
            true
          )) as any[]
          // eval : index + above
          const anchorOffsetTop = fields
            .map(({ height }) => Number(escapeUnit(height)))
            .filter(v => !isNaN(v))
            .map((v, i, self) => {
              if (i === 0) {
                return { offsetTop: 0, clientHeight: v }
              } else {
                const above = self.slice(0, i).filter(v => !isNaN(v))
                return {
                  offsetTop: above.reduce((pre, cur) => pre + cur, 0),
                  clientHeight: v,
                }
              }
            })
          anchorOffsetTop.length && (offsetTopMap.value = anchorOffsetTop)
        }
      })
    })

    async function scrollTo(index: string) {
      const body = bodyRef.value
      if (!body) return

      const children = getVueChildren(body)

      for (let i = 0; i < children.length; i++) {
        const panel = (
          children.item ? children.item(i) : children[i]
        ) as HTMLElement
        if (!panel) continue

        const panelIndex = panel.dataset['index']
        const panelOffsetTop = panel.offsetTop ?? panel.dataset['offsetTop']
        if (panelIndex === index) {
          offsetTop.value = panelOffsetTop
          console.log('change', index, panelOffsetTop, panel)
          activeIndex.value = index
          return
        }
      }
    }

    const checkActiveIndex = throttle(({ detail: { scrollTop } }) => {
      const body = bodyRef.value
      if (!body) return

      const elements = getVueElement(body).getElementsByClassName(
        `${classPrefix}-anchor`
      )
      for (let i = 0; i < elements.length; i++) {
        const panel = (
          elements.item ? elements.item(i) : elements[i]
        ) as HTMLElement
        if (!panel) continue
        const panelIndex = panel.dataset['index']
        if (!panelIndex) continue
        const panelScrollTop = panel.offsetTop ?? panel.dataset['offsetTop']
        const panelClientHeight =
          panel.clientHeight ?? panel.dataset['clientHeight']
        if (panelScrollTop + panelClientHeight - titleHeight > scrollTop) {
          activeIndex.value = panelIndex
          return
        }
      }
    }, 100)

    const RenderScrollViewItems = withNativeProps({
      name: 'RenderScrollViewItems',
      setup() {
        return () => (
          <>
            {slots.default?.()?.[0] &&
              (slots.default()[0].children as VNode[]).map((child, idx) => {
                if (typeof child !== 'object') return null
                // @ts-ignore
                if (child?.type?.name !== 'Panel') {
                  devWarning(
                    'IndexBar',
                    'The children of `IndexBar` must be `IndexBar.Panel` components.'
                  )
                  return null
                }
                indexes.value[idx] = child?.props?.index
                const renderPanel = h(
                  <View
                    key={child?.props?.index}
                    id={`index-bar-index-${child?.props?.index}`}
                    data-index={child?.props?.index}
                    className={`${classPrefix}-anchor`}
                    data-client-height={
                      offsetTopMap.value[idx]?.clientHeight ?? 0
                    }
                    data-offset-top={offsetTopMap.value[idx]?.offsetTop ?? 0}
                  >
                    <View className={`${classPrefix}-anchor-title`}>
                      {child?.props?.title || child?.props?.index}
                    </View>
                    {child.children?.default?.()}
                  </View>,
                  { ...child?.props }
                )
                panels.value[idx] = renderPanel
                return renderPanel
              })}
          </>
        )
      },
    })

    return () => (
      <View
        className={classNames(
          `${classPrefix}`,
          {
            [`${classPrefix}-sticky`]: props.sticky,
          },
          attrs.class,
          attrs.className
        )}
        style={{ height: props.height }}
      >
        <Sidebar
          indexes={indexes.value}
          activeIndex={activeIndex.value ?? indexes.value[0] ?? ''}
          onActive={(index: string) => {
            scrollTo(index)
          }}
        />
        <ScrollView
          scrollY
          ref={bodyRef}
          className={`${classPrefix}-body`}
          scrollTop={offsetTop.value}
          style={{ height: props.height }}
          onScroll={checkActiveIndex}
        >
          <RenderScrollViewItems />
        </ScrollView>
      </View>
    )
  },
})
