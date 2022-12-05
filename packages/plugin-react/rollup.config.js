import ts from 'rollup-plugin-ts';
import * as path from 'path';

const cwd = __dirname;

const base = {
  plugins: [ts()],
  external: [
    '@tarojs/helper',
    '@tarojs/service',
    '@tarojs/shared',
    '@tarojs/runtime',
    '@tarojs/taro',
    'acorn',
    'acorn-walk',
    'react',
  ],
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

// 供 Loader 使用的运行时入口
const runtimeConfig = {
  input: path.join(cwd, 'src/runtime/index.ts'),
  output: {
    file: path.join(cwd, 'dist/runtime.js'),
    format: 'es',
    sourcemap: true,
  },
  ...base,
};

// 供 Loader 3.4.x 使用的运行时入口
const runtime4XConfig = {
  input: path.join(cwd, 'src/runtime/index.x4x.ts'),
  output: {
    file: path.join(cwd, 'dist/runtime.x4x.js'),
    format: 'es',
    sourcemap: true,
  },
  ...base,
};

// loader 入口
const loaderConfig = {
  input: path.join(cwd, 'src/api-loader.ts'),
  output: {
    file: path.join(cwd, 'dist/api-loader.js'),
    format: 'cjs',
    sourcemap: true,
  },
  ...base,
};

module.exports = [comileConfig, runtimeConfig, runtime4XConfig, loaderConfig];
