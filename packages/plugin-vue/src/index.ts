import { IPluginContext } from '@tarojs/service';
import { getVuePath } from './runtime/shared';

import { modifyViteConfig } from './runtime/modifyViteConfig';
import { modifyWebpackChain } from './runtime/modifyWebpackChain';

export default (ctx: IPluginContext) => {
  const { framework } = ctx.initialConfig;
  if (framework !== 'vue3' || !getVuePath()) return;

  modifyWebpackChain(ctx);
  modifyViteConfig(ctx);
};
