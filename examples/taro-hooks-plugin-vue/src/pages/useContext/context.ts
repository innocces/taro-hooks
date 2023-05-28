import { createContext } from '@taro-hooks/core';

export const themeContext = createContext({ theme: 'light' });

export const userContext = createContext({ name: null });
