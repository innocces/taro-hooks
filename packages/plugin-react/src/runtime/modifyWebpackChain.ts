import { IPluginContext } from '@tarojs/service';
import { chalk } from '@tarojs/helper';
import { reactLike } from './constant';
import { getRealRuntimePath, getDefine } from './shared';

export function modifyWebpackChain(ctx: IPluginContext) {
  const { framework } = ctx.initialConfig;
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
}

function setDefinePlugin(chain: any, webpack: any) {
  chain.plugin('defined').use(webpack.DefinePlugin, [getDefine()]);
}
