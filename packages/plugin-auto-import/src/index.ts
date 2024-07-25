import { IPluginContext } from '@tarojs/service';

import { modifyWebpackChain } from './modifyWebpackChain';
import { modifyViteConfig } from './modifyViteConfig';
import { getPkgPath, metaDataPath } from './shared';

import type { Options } from 'unplugin-auto-import/types';

export default (ctx: IPluginContext, options?: Options) => {
  if (!getPkgPath(metaDataPath)) return;
  modifyWebpackChain(ctx, options);
  modifyViteConfig(ctx, options);
};
