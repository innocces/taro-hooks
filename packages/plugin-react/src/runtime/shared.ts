import { chalk } from '@tarojs/helper';

export function getNumberVersion(): number {
  try {
    const pkgPath = require.resolve('@tarojs/taro/package.json', {
      paths: [process.cwd()],
    });
    return require(pkgPath).version?.replace(/\./gi, '');
  } catch (e) {
    return Infinity;
  }
}

export function isVersion4() {
  return String(getNumberVersion()).startsWith('4');
}

export function getRealRuntimePath(): string {
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

export function getDefine() {
  return {
    // fix process is not defined in 3.5.x webpackv5 mode!
    __TARO_HOOKS_REACT__: JSON.stringify(true),
    __TARO_HOOKS_VUE__: JSON.stringify(false),
    TARO_ENV: JSON.stringify(process.env.TARO_ENV?.toLocaleUpperCase()),
  };
}
