import { chalk } from '@tarojs/helper';
import { isString, isArray } from '@tarojs/shared';
import { IPluginContext, TaroPlatformBase } from '@tarojs/service';

export default (ctx: IPluginContext) => {
  const { framework } = ctx.initialConfig;
  if (framework !== 'react' || !getReactPath()) return;

  ctx.modifyWebpackChain(({ chain, webpack }) => {
    setDefinePlugin(chain, webpack);
    console.log(
      chalk.blue(
        '✨ 逮到一个使用taro-hooks的小可爱~ \n 当前使用的框架是: React',
      ),
    );
    if (process.env.TARO_ENV === 'h5') {
      chain.merge({
        module: {
          rule: {
            'process-import-taro-hooks': {
              test: /taro-h5[\\/]dist[\\/]index/,
              loader: require.resolve('./api-loader'),
            },
          },
        },
      });
    }
  });

  if (process.env.TARO_ENV === 'weapp') {
    ctx.registerMethod({
      name: 'onSetupClose',
      fn(platform: TaroPlatformBase) {
        const pluginRuntimePath = '@taro-hooks/plugin-react/dist/runtime';
        const runtimePath = platform.runtimePath;
        if (isArray(runtimePath)) {
          runtimePath.push(pluginRuntimePath);
        } else if (isString(runtimePath)) {
          platform.runtimePath = [runtimePath, pluginRuntimePath];
        }
      },
    });
  }
};

function setDefinePlugin(chain: any, webpack: any) {
  chain.plugin('defined').use(webpack.DefinePlugin, [
    {
      __TARO_HOOKS_REACT__: JSON.stringify(true),
    },
  ]);
}

export function getReactPath(): string {
  try {
    return require.resolve('react', {
      paths: [process.cwd()],
    });
  } catch (error) {
    console.log(chalk.yellow('找不到 React. 请先安装。'));
    process.exit(1);
  }
}
