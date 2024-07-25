import { IPluginContext } from '@tarojs/service';
import { chalk } from '@tarojs/helper';
import { reactLike } from './constant';
import { getRealRuntimePath, getDefine } from './shared';

export function modifyViteConfig(ctx: IPluginContext) {
  const { framework } = ctx.initialConfig;
  ctx.modifyViteConfig?.(({ viteConfig }) => {
    const taroHooksVitePlugins = [setDefinePlugin(), setAlias(framework)];
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
    name: '@taro-hooks/plugin-react:define',
    config: () => {
      return {
        define: {
          ...getDefine(),
        },
      };
    },
  };
}

function setAlias(framework) {
  return {
    name: '@taro-hooks/plugin-react:alias',
    enforce: 'pre',
    config: (userConfig) => {
      const alias: Record<string, string>[] = [
        { find: '@taro-hooks/core', replacement: getRealRuntimePath() },
      ];
      const userAlias = userConfig.resolve?.alias;
      let aliasReact = true;
      if (Array.isArray(userAlias)) {
        aliasReact = userAlias.find((v) => v.find === 'react');
      } else if (
        Object.prototype.toString.call(userAlias) === '[object Object]'
      ) {
        aliasReact = 'react' in userAlias;
      }
      // 检查一下除 react 的框架是否包含了对应的 alias. 不然 runtime 会报错
      if (reactLike.includes(framework!) && !aliasReact) {
        alias.push({
          find: 'react',
          replacement: framework,
        });
      }
      return {
        resolve: {
          alias,
        },
      };
    },
  };
}
