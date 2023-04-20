import { chalk } from '@tarojs/helper';
import { IPluginContext } from '@tarojs/service';

export default (ctx: IPluginContext) => {
  const { framework } = ctx.initialConfig;
  if (framework !== 'vue3' || !getReactPath()) return;

  ctx.modifyWebpackChain(({ chain, webpack }) => {
    setDefinePlugin(chain, webpack);
    console.log(
      chalk.blue(
        '✨ 逮到一个使用taro-hooks的小可爱~ \n 当前使用的框架是: Vue3',
      ),
    );

    chain.resolve.alias.set('@taro-hooks/core', getRealRuntimePath());
  });
};

function setDefinePlugin(chain: any, webpack: any) {
  chain.plugin('defined').use(webpack.DefinePlugin, [
    {
      // fix process is not defined in 3.5.x webpackv5 mode!
      __TARO_HOOKS_REACT__: JSON.stringify(false),
      __TARO_HOOKS_VUE__: JSON.stringify(true),
      TARO_ENV: JSON.stringify(process.env.TARO_ENV?.toLocaleUpperCase()),
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

function getRealRuntimePath(): string {
  return `@taro-hooks/plugin-vue/dist/runtime`;
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
