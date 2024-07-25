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
  return `@taro-hooks/plugin-vue/dist/runtime`;
}

export function getVuePath(): string {
  try {
    return require.resolve('vue', {
      paths: [process.cwd()],
    });
  } catch (error) {
    console.log(chalk.yellow(`找不到 Vue. 请先安装。`));
    process.exit(1);
  }
}

export function getDefine() {
  return {
    // fix process is not defined in 3.5.x webpackv5 mode!
    __TARO_HOOKS_REACT__: JSON.stringify(false),
    __TARO_HOOKS_VUE__: JSON.stringify(true),
    TARO_ENV: JSON.stringify(process.env.TARO_ENV?.toLocaleUpperCase()),
  };
}
