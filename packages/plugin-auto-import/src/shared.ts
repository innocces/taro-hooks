import { chalk } from '@tarojs/helper';
import { readJSONSync } from 'fs-extra';
import type { ImportsMap } from 'unplugin-auto-import/types';

export const metaDataPath = 'taro-hooks/metadata.json';

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
