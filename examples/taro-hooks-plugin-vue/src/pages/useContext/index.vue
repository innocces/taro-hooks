<template>
  <ThemeProvider :value="theme">
    <UserProvider :value="useProviderValue">
      <block>
        <demo-content title="attention: this example is a multiple contexts">
          <ThemeContent />
        </demo-content>

        <demo-content title="1. Updating a value via context">
          <nut-checkbox v-model="memoTheme" @change="handleChange"
            >Use dark mode</nut-checkbox
          >
        </demo-content>

        <demo-content title="2. Updating an object via context" />
      </block>
    </UserProvider>
  </ThemeProvider>
</template>

<script>
import { escapeState } from '@taro-hooks/shared';
import {
  useTaroState,
  useTaroContext,
  taroCreateContext,
  useTaroMemo,
} from '@tarojs/taro';
import ThemeContent from './ThemeContent.vue';

export const themeContext = taroCreateContext({ theme: 'light' });

const { Provider: ThemeProvider } = themeContext;

export const userContext = taroCreateContext({ name: null });

const { Provider: UserProvider } = userContext;

export default {
  components: {
    ThemeProvider,
    UserProvider,
    ThemeContent,
  },
  setup() {
    // 1. Updating a value via context
    const [theme, setTheme] = useTaroState({ theme: 'light' });

    const currentTheme = useTaroContext(themeContext);

    const handleChange = (event) => {
      setTheme({ theme: event ? 'dark' : 'light' });
    };

    const memoTheme = useTaroMemo(() => {
      return escapeState(theme).theme === 'dark';
    }, [theme]);

    // 2. Updating an object via context
    const [user, setUser] = useTaroState({ name: null });
    const useProviderValue = {
      user,
      setUser,
    };

    return {
      theme,
      currentTheme,
      setTheme,
      handleChange,
      useProviderValue,
      memoTheme,
    };
  },
};
</script>
