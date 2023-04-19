import { chalk } from '@tarojs/helper';
import { IPluginContext } from '@tarojs/service';

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

    chain.resolve.alias.set('@taro-hooks/core', getRealRuntimePath());
  });
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
  return `@taro-hooks/plugin-react/dist/runtime`;
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
