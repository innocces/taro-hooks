import { IPluginContext } from '@tarojs/service';
import { chalk } from '@tarojs/helper';
import { getRealRuntimePath, getDefine } from './shared';

export function modifyViteConfig(ctx: IPluginContext) {
  const { framework } = ctx.initialConfig;
  ctx.modifyViteConfig?.(({ viteConfig }) => {
    const taroHooksVitePlugins = [setDefinePlugin(), setAlias()];
    console.log(
      chalk.blue(
        `✨ 逮到一个使用taro-hooks的小可爱~ \n 当前使用的框架是: ${framework}`,
      ),
    );

    viteConfig.plugins.push(...taroHooksVitePlugins);
  });
}

function setDefinePlugin() {
  return {
    name: '@taro-hooks/plugin-vue:define',
    config: () => {
      return {
        define: {
          ...getDefine(),
        },
      };
    },
  };
}

function setAlias() {
  return {
    name: '@taro-hooks/plugin-react:alias',
    enforce: 'pre',
    config: () => {
      const alias: Record<string, string>[] = [
        { find: '@taro-hooks/core', replacement: getRealRuntimePath() },
      ];

      return {
        resolve: {
          alias,
        },
      };
    },
  };
}
