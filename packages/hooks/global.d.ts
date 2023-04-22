/// <reference types="@tarojs/taro" />

// 微信的有版权. 暂时不单独copy一个过来用了. 如果大家发现免费的资源可以提供一下
declare var wx: any;

// shims for vercel build in order
declare module '@taro-hooks/use-request';

// never bundle with d.ts
declare module '@taro-hooks/core' {
  export * from '@taro-hooks/plugin-react/dist/runtime';
}
