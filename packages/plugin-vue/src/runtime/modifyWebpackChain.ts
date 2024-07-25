import { IPluginContext } from '@tarojs/service';
import { chalk } from '@tarojs/helper';
import { getRealRuntimePath, getDefine } from './shared';

export function modifyWebpackChain(ctx: IPluginContext) {
  const { framework } = ctx.initialConfig;
  ctx.modifyWebpackChain(({ chain, webpack }) => {
    setDefinePlugin(chain, webpack);
    console.log(
      chalk.blue(
        '✨ 逮到一个使用taro-hooks的小可爱~ \n 当前使用的框架是: Vue3',
      ),
    );

    chain.resolve.alias.set('@taro-hooks/core', getRealRuntimePath());
  });
}

function setDefinePlugin(chain: any, webpack: any) {
  chain.plugin('defined').use(webpack.DefinePlugin, [getDefine()]);
}
