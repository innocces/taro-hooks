import React, { useRef, useState } from 'react'
import { DemoBlock } from 'demos'
import { NumberKeyboard, VirtualInput } from 'ant-mobile-taro'
import { VirtualInputRef } from 'ant-mobile-taro/es/components/virtual-input'

export default () => {
  const virtualInputRef = useRef<VirtualInputRef>(null)
  const [value, setValue] = useState('')
  const [keyboardVisible, setKeyboardVisible] = useState(false)

  return (
    <>
      <DemoBlock title='配合 NumberKeyboard'>
        <VirtualInput
          ref={virtualInputRef}
          placeholder='请输入内容'
          value={value}
          onFocus={() => {
            setKeyboardVisible(true)
          }}
          onBlur={() => {
            console.log('onBlur')
            setKeyboardVisible(false)
          }}
          onClick={e => {
            e.stopPropagation()
          }}
        />
        <NumberKeyboard
          onInput={v => {
            setValue(prev => prev + v)
          }}
          onDelete={() => {
            setValue(prev => prev.slice(0, -1))
          }}
          onClose={() => {
            virtualInputRef.current?.blur()
          }}
          visible={keyboardVisible}
        />
      </DemoBlock>
    </>
  )
}
