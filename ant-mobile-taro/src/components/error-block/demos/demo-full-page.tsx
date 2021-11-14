import React, { useEffect } from 'react'
import { ErrorBlock } from 'ant-mobile-taro'

export default () => {
  useEffect(() => {
    document.body.style.background = '#ffffff'
  }, [])
  return <ErrorBlock fullPage />
}
