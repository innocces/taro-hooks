import React from 'react'
import { DemoBlock } from 'demos'
import { ConfigProvider, ErrorBlock } from 'ant-mobile-taro'
import zhCN from 'ant-mobile-taro/es/locales/zh-CN'
import enUS from 'ant-mobile-taro/es/locales/en-US'

export default () => {
  return (
    <>
      <DemoBlock title='中文'>
        <ConfigProvider locale={zhCN}>
          <ErrorBlock />
        </ConfigProvider>
      </DemoBlock>
      <DemoBlock title='英文'>
        <ConfigProvider locale={enUS}>
          <ErrorBlock />
        </ConfigProvider>
      </DemoBlock>
    </>
  )
}
