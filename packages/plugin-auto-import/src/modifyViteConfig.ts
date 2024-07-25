import { chalk } from '@tarojs/helper';
import { IPluginContext } from '@tarojs/service';
import { resolve } from 'node:path';

import AutoImport from 'unplugin-auto-import/vite';
import { autoImportPresets } from './shared';

import type { Options } from 'unplugin-auto-import/types';

export function modifyViteConfig(ctx: IPluginContext, options?: Options) {
  ctx.modifyViteConfig?.(({ viteConfig }) => {
    console.log(chalk.blue(`✨ auto-import 帮助你更轻松的使用 taro-hooks！`));
    const defaultDtsPath = resolve(ctx.paths.sourcePath, 'auto-imports.d.ts');
    const {
      include = [],
      imports = [],
      dts = defaultDtsPath,
      ...extraOptions
    } = options ?? {};

    viteConfig.plugins.push(
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
