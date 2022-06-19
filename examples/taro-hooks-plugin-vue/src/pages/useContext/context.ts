import { taroCreateContext } from '@tarojs/taro';

export const themeContext = taroCreateContext({ theme: 'light' });

export const userContext = taroCreateContext({ name: null });
