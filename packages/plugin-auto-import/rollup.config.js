import ts from 'rollup-plugin-ts';
import * as path from 'path';

const cwd = __dirname;

const base = {
  plugins: [ts()],
  external: ['@tarojs/helper', '@tarojs/service'],
};

// 供 CLI 编译时使用的 Taro 插件入口
const comileConfig = {
  input: path.join(cwd, 'src/index.ts'),
  output: {
    file: path.join(cwd, 'dist/index.js'),
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
  },
  ...base,
};

module.exports = [comileConfig];
