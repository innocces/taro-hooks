import { chalk } from '@tarojs/helper';
import { isString, isArray } from '@tarojs/shared';
import { IPluginContext, TaroPlatformBase } from '@tarojs/service';

export default (ctx: IPluginContext) => {
  const { framework } = ctx.initialConfig;
  console.log(getReactPath());
  if (framework !== 'vue3' || !getReactPath()) return;

  ctx.modifyWebpackChain(({ chain, webpack }) => {
    setDefinePlugin(chain, webpack);
    console.log(
      chalk.blue(
        '✨ 逮到一个使用taro-hooks的小可爱~ \n 当前使用的框架是: Vue3',
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

    // MultiPlatformPlugin
    chain.resolve.plugin('MultiPlatformPlugin').tap((args) => {
      const needConcat = needConcatArgs();
      if (!needConcat) {
        args[2]['include'] = ['taro-hooks'];
        return args;
      } else {
        return [
          ...args,
          {
            include: ['taro-hooks'],
          },
        ];
      }
    });
  });

  if (process.env.TARO_ENV === 'weapp') {
    ctx.registerMethod({
      name: 'onSetupClose',
      fn(platform: TaroPlatformBase) {
        const pluginRuntimePath = '@taro-hooks/plugin-vue/dist/runtime';
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
      'process.env.__TARO_HOOKS_VUE__': JSON.stringify(true),
    },
  ]);
}

// check version > 3.3
function needConcatArgs(): boolean {
  try {
    const pkgPath = require.resolve('@tarojs/taro/package.json', {
      paths: [process.cwd()],
    });
    return require(pkgPath).version?.replace(/\./gi, '') < 330;
  } catch (e) {
    return false;
  }
}

export function getReactPath(): string {
  try {
    return require.resolve('vue', {
      paths: [process.cwd()],
    });
  } catch (error) {
    console.log(chalk.yellow('找不到 Vue. 请先安装。'));
    process.exit(1);
  }
}
