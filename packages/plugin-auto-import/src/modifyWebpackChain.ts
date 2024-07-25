import { chalk } from '@tarojs/helper';
import { IPluginContext } from '@tarojs/service';
import { resolve } from 'node:path';

import AutoImport from 'unplugin-auto-import/webpack';
import { autoImportPresets } from './shared';

import type { Options } from 'unplugin-auto-import/types';

export function modifyWebpackChain(ctx: IPluginContext, options?: Options) {
  ctx.modifyWebpackChain(({ chain }) => {
    console.log(chalk.blue(`✨ auto-import 帮助你更轻松的使用 taro-hooks！`));
    const defaultDtsPath = resolve(ctx.paths.sourcePath, 'auto-imports.d.ts');
    const {
      include = [],
      imports = [],
      dts = defaultDtsPath,
      ...extraOptions
    } = options ?? {};

    chain.plugin('plugin-auto-import').use(
      AutoImport({
        include: [
          // @ts-ignore
          ...include,
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: [
          // @ts-ignore
          ...imports,
          autoImportPresets(),
        ],
        dts,
        ...extraOptions,
      }),
    );
  });
}
