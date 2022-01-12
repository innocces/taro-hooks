import React, { FC, useState } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { isWeapp } from '../../utils/use-env'

const classPrefix = `adm-index-bar`

type SidebarProps = {
  indexes: string[]
  activeIndex: string
  onActive: (index: string) => void
}

export const Sidebar: FC<SidebarProps> = props => {
  const [interacting, setInteracting] = useState(false)

  return (
    <View
      className={classNames(`${classPrefix}-sidebar`, {
        [`${classPrefix}-sidebar-interacting`]: interacting,
      })}
      onMouseDown={() => {
        setInteracting(true)
      }}
      onMouseUp={() => {
        setInteracting(false)
      }}
      onTouchStart={() => {
        setInteracting(true)
      }}
      onTouchEnd={() => {
        setInteracting(false)
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
          props.onActive(index)
        }
      }}
    >
      {props.indexes.map((index: string) => {
        const active = index === props.activeIndex
        return (
          <View
            className={`${classPrefix}-sidebar-row`}
            onMouseDown={() => {
              props.onActive(index)
            }}
            onTouchStart={() => {
              props.onActive(index)
            }}
            onMouseEnter={() => {
              if (interacting) {
                props.onActive(index)
              }
            }}
            data-index={index}
            key={index}
          >
            {interacting && active && (
              <View className={`${classPrefix}-sidebar-bubble`}>{index}</View>
            )}
            <View
              className={classNames(`${classPrefix}-sidebar-item`, {
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
}
