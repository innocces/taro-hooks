/// <reference types="@tarojs/taro" />
// never bundle with d.ts
declare module '@taro-hooks/core' {
  export * from '@taro-hooks/plugin-react/dist/runtime';
}
