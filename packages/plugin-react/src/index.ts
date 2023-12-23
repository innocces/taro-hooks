import { chalk } from '@tarojs/helper';
import { IPluginContext } from '@tarojs/service';

// 同时兼容一下 preact 和 nerv
const reactLike = ['preact', 'nerv'];
const supportFrameworks = ['react', ...reactLike];

export default (ctx: IPluginContext) => {
  const { framework } = ctx.initialConfig;
  if ((framework && !supportFrameworks.includes(framework)) || !getReactPath(framework))
    return;

  ctx.modifyWebpackChain(({ chain, webpack }) => {
    setDefinePlugin(chain, webpack);
    console.log(
      chalk.blue(
        `✨ 逮到一个使用taro-hooks的小可爱~ \n 当前使用的框架是: ${framework}`,
      ),
    );

    chain.resolve.alias.set('@taro-hooks/core', getRealRuntimePath());

    // 检查一下除 react 的框架是否包含了对应的 alias. 不然 runtime 会报错
    if (reactLike.includes(framework!) && !chain.resolve.alias.get('react')) {
      chain.resolve.alias.set('react', framework!);
    }
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

export function getReactPath(framework = 'react'): string {
  try {
    return require.resolve(framework, {
      paths: [process.cwd()],
    });
  } catch (error) {
    console.log(chalk.yellow(`找不到 ${framework}. 请先安装。`));
    process.exit(1);
  }
}
