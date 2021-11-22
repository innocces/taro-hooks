declare module '*.less' {
  const value: {
    [key: string]: string
  }
  export = value
}

declare module '*.png'

declare module '*.svg'

declare module '*.vue.tsx' {
  import type { DefineComponent } from 'vue'
  import '../../../../node_modules/@tarojs/plugin-platform-weapp/types/shims-weapp.d.ts'
  const component: DefineComponent<{}, {}, any>
  export default component
}
