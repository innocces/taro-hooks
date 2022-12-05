import { chalk } from '@tarojs/helper';
import { isString, isArray } from '@tarojs/shared';
import { IPluginContext, TaroPlatformBase } from '@tarojs/service';
import type { Plugin } from 'esbuild';
import { readFileSync } from 'fs';

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

  // 3.5.x 增加prebundle配置支持
  ctx.modifyRunnerOpts?.(({ opts }) => {
    if (!opts?.compiler) return;

    if (isString(opts.compiler)) {
      opts.compiler = {
        type: opts.compiler,
      };
    }
    const { compiler } = opts;

    if (compiler.type === 'webpack5') {
      compiler.prebundle ||= {};
      const prebundleOptions = compiler.prebundle;
      if (prebundleOptions.enable === false) return;

      const deps = ['taro-hooks', getRealRuntimePath()];

      prebundleOptions.include ||= [];
      prebundleOptions.include = prebundleOptions.include.concat(deps);

      const taroHooksReactPlugin: Plugin = {
        name: 'taroHooksReactPlugin',
        setup(build) {
          build.onLoad({ filter: /taro-h5[\\/]dist[\\/]index/ }, ({ path }) => {
            /**
             * @description there is no way for a filter run twice load. so cover the official read plugin
             */
            let contents = readFileSync(path).toString();
            const taroPluginRuntime =
              '@tarojs/plugin-framework-react/dist/api-loader';
            if (/taro-h5[\\/]dist[\\/]index/.test(path)) {
              contents = require(taroPluginRuntime)(contents);
              contents = require('./api-loader')(
                contents,
                getRealRuntimePath(),
              );
            }
            return {
              contents,
            };
          });
        },
      };

      prebundleOptions.esbuild ||= {};
      const esbuildConfig = prebundleOptions.esbuild;
      esbuildConfig.plugins ||= [];
      esbuildConfig.plugins = esbuildConfig.plugins.filter(
        (v) => v.name !== 'taroReactPlugin',
      );
      esbuildConfig.plugins.push(taroHooksReactPlugin);
    }
  });

  if (process.env.TARO_ENV === 'weapp') {
    ctx.registerMethod({
      name: 'onSetupClose',
      fn(platform: TaroPlatformBase) {
        const pluginRuntimePath = getRealRuntimePath();
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
      // fix process is not defined in 3.5.x webpackv5 mode!
      __TARO_HOOKS_REACT__: JSON.stringify(true),
      __TARO_HOOKS_VUE__: JSON.stringify(false),
      TARO_ENV: JSON.stringify(process.env.TARO_ENV?.toLocaleUpperCase()),
    },
  ]);
}

function getNumberVersion(): number {
  try {
    const pkgPath = require.resolve('@tarojs/taro/package.json', {
      paths: [process.cwd()],
    });
    return require(pkgPath).version?.replace(/\./gi, '');
  } catch (e) {
    return Infinity;
  }
}

function getRealRuntimePath(): string {
  const runtimeRealPath = getNumberVersion() < 350 ? 'runtime.x4x' : 'runtime';
  return `@taro-hooks/plugin-react/dist/${runtimeRealPath}`;
}

// check version > 3.3
function needConcatArgs(): boolean {
  try {
    return getNumberVersion() < 330;
  } catch (e) {
    return false;
  }
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
