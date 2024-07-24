import { IPluginContext } from '@tarojs/service';

import { modifyViteConfig } from './runtime/modifyViteConfig';
import { modifyWebpackChain } from './runtime/modifyWebpackChain';

import { getReactPath } from './runtime/shared';
import { supportFrameworks } from './runtime/constant';

// 同时兼容一下 preact 和 nerv
export default (ctx: IPluginContext) => {
  const { framework } = ctx.initialConfig;
  if (
    (framework && !supportFrameworks.includes(framework)) ||
    !getReactPath(framework)
  )
    return;

  modifyWebpackChain(ctx);
  modifyViteConfig(ctx);
};
