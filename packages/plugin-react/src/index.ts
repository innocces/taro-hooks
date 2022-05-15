import { chalk } from '@tarojs/helper';
import { IPluginContext } from '@tarojs/service';

export default (ctx: IPluginContext) => {
  const { framework } = ctx.initialConfig;
  if (framework !== 'react' || !getReactPath()) return;

  ctx.modifyWebpackChain(({ chain, webpack }) => {
    setDefinePlugin(chain, webpack);
    console.log(chalk.blue('✨ 逮到一个使用taro-hooks的小可爱~'));
    if (process.env.TARO_ENV === 'h5') {
      chain.merge({
        module: {
          rule: {
            'process-import-taro': {
              test: /taro-h5[\\/]dist[\\/]index/,
              loader: require.resolve('./api-loader'),
            },
          },
        },
      });
    }
  });
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
