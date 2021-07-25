import type VueCtor from 'vue';
import type { ComponentOptions, VueConstructor } from 'vue';
import type { AppConfig } from '@tarojs/taro';
import type { AppInstance } from './instance';
export declare type V = typeof VueCtor;
export declare function connectVuePage(
  Vue: VueConstructor,
  id: string,
): (
  component: ComponentOptions<VueCtor>,
) => ComponentOptions<
  VueCtor,
  import('vue/types/options').DefaultData<VueCtor>,
  import('vue/types/options').DefaultMethods<VueCtor>,
  import('vue/types/options').DefaultComputed,
  import('vue/types/options').PropsDefinition<
    import('vue/types/options').DefaultProps
  >,
  import('vue/types/options').DefaultProps
>;
export declare function createVueApp(
  App: ComponentOptions<VueCtor>,
  vue: V,
  config: AppConfig,
): AppInstance;
