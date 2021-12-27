import React, {
  forwardRef,
  useRef,
  useState,
  useImperativeHandle,
  ReactElement,
  useLayoutEffect,
} from 'react'
import classNames from 'classnames'
import { ScrollView, View } from '@tarojs/components'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useThrottleFn } from 'ahooks'
import { mergeProps } from '../../utils/with-default-props'
import { Sidebar } from './sidebar'
import { convertPx } from '../../utils/convert-px'
import { Panel } from './panel'
import { devWarning } from '../../utils/dev-log'
import { getComputedStyle } from '../../utils/get-client-rect'
import { escapeUnit } from '../../utils/tool'
import { nextTick } from '@tarojs/taro'

const classPrefix = `adm-index-bar`

export type IndexBarProps = {
  sticky?: boolean
  children?: React.ReactNode
  height?: string | number
} & NativeProps<'--sticky-offset-top'>

export type IndexBarRef = {
  scrollTo: (index: string) => void
}

const defaultProps = {
  sticky: true,
  height: '100vh',
}

export const IndexBar = forwardRef<IndexBarRef, IndexBarProps>((p, ref) => {
  const props = mergeProps(defaultProps, p)
  const titleHeight = convertPx(35)
  const bodyRef = useRef<HTMLDivElement>(null)

  const indexes: string[] = []
  const panels: ReactElement[] = []
  const [offsetTopMap, setOffsetTopMap] = useState<
    { offsetTop: number; clientHeight: number }[]
  >([])
  const offsetTop = useRef<number>(0)

  React.Children.forEach(props.children, (child, idx) => {
    if (!React.isValidElement(child)) return
    if (child.type !== Panel) {
      devWarning(
        'IndexBar',
        'The children of `IndexBar` must be `IndexBar.Panel` components.'
      )
      return
    }
    indexes.push(child.props.index)
    panels.push(
      withNativeProps(
        child.props,
        <View
          key={child.props.index}
          id={`index-bar-index-${child.props.index}`}
          data-index={child.props.index}
          className={`${classPrefix}-anchor`}
          data-client-height={offsetTopMap[idx]?.clientHeight ?? 0}
          data-offset-top={offsetTopMap[idx]?.offsetTop ?? 0}
        >
          <View className={`${classPrefix}-anchor-title`}>
            {child.props.title || child.props.index}
          </View>
          {child.props.children}
        </View>
      )
    )
  })

  const [activeIndex, setActiveIndex] = useState(indexes[0])

  useImperativeHandle(ref, () => ({ scrollTo }))

  useLayoutEffect(() => {
    nextTick(caculateRectWithOffsetAndClient)
  }, [props.children])

  // miniprograme do not exist offsetTop, use rect instand
  async function caculateRectWithOffsetAndClient() {
    if (indexes.length) {
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
      setOffsetTopMap(anchorOffsetTop)
    }
  }

  async function scrollTo(index: string) {
    const body = bodyRef.current
    if (!body) return

    const children = body.children

    for (let i = 0; i < children.length; i++) {
      const panel = (
        children.item ? children.item(i) : children[i]
      ) as HTMLElement
      if (!panel) continue

      const panelIndex = panel.dataset['index']
      const panelOffsetTop = panel.offsetTop ?? panel.dataset['offsetTop']
      if (panelIndex === index) {
        offsetTop.current = panelOffsetTop
        console.log('change', index, panelOffsetTop, panel)
        setActiveIndex(index)
        return
      }
    }
  }

  const { run: checkActiveIndex } = useThrottleFn(
    ({ detail: { scrollTop } }) => {
      const body = bodyRef.current

      if (!body) return

      const elements = body.getElementsByClassName(`${classPrefix}-anchor`)
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
          setActiveIndex(panelIndex)
          return
        }
      }
    },
    { wait: 100, trailing: true, leading: true }
  )

  return withNativeProps(
    props,
    <View
      className={classNames(`${classPrefix}`, {
        [`${classPrefix}-sticky`]: props.sticky,
      })}
      style={{ height: props.height }}
    >
      <Sidebar
        indexes={indexes}
        activeIndex={activeIndex}
        onActive={index => {
          scrollTo(index)
        }}
      />
      <ScrollView
        scrollY
        className={`${classPrefix}-body`}
        ref={bodyRef}
        scrollTop={offsetTop.current}
        style={{ height: props.height }}
        onScroll={checkActiveIndex}
      >
        {panels}
      </ScrollView>
    </View>
  )
})
