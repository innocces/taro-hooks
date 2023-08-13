import { chalk } from '@tarojs/helper';
import { IPluginContext } from '@tarojs/service';
import { resolve } from 'node:path';
import { readJSONSync } from 'fs-extra';

import AutoImport from 'unplugin-auto-import/webpack';
import type { ImportsMap, Options } from 'unplugin-auto-import/types';

const metaDataPath = 'taro-hooks/metadata.json';

export default (ctx: IPluginContext, options?: Options) => {
  if (!getPkgPath(metaDataPath)) return;
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
};

export function autoImportPresets(): ImportsMap {
  const metadataFilePath = getPkgPath(metaDataPath);
  const metadata = readJSONSync(metadataFilePath);

  return {
    'taro-hooks': metadata.functions.flatMap(({ name, alias = [] }) => [
      name,
      ...alias,
    ]),
  };
}

export function getPkgPath(pkg: string): string {
  try {
    return require.resolve(pkg, {
      paths: [process.cwd()],
    });
  } catch (error) {
    console.log(chalk.yellow(`找不到 ${pkg}. 请先安装`));
    process.exit(1);
  }
}
