<template>
  <ThemeProvider :value="theme">
    <UserProvider :value="useProviderValue">
      <view>
        <view>attention: this example is a multiple contexts</view>
        <ThemeContent />
        <view>1. Updating a value via context</view>
        <checkbox-group class="gap" @change="handleChange($event)">
          <label>
            <checkbox :checked="theme === 'dark'" />
            <text>Use dark mode</text>
          </label>
        </checkbox-group>
        <view>2. Updating an object via context</view>
      </view>
    </UserProvider>
  </ThemeProvider>
</template>

<script>
import { useTaroState, useTaroContext, taroCreateContext } from '@tarojs/taro';
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
      setTheme({ theme: !!event.detail.value.length ? 'dark' : 'light' });
    };

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
    };
  },
};
</script>
