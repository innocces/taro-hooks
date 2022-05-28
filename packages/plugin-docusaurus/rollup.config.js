import typescript from 'rollup-plugin-typescript2';
import * as path from 'path';

const cwd = __dirname;

const base = {
  input: path.join(cwd, 'src/index.ts'),
  external: ['@docusaurus/types'],
  plugins: [typescript()],
};

const vueLoaderBase = {
  input: path.join(cwd, 'src/vue-loader.ts'),
};

const cjsConfig = {
  output: {
    file: path.join(cwd, 'dist/index.js'),
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
  },
  ...base,
};

const esConfig = {
  output: {
    file: path.join(cwd, 'dist/index.es.js'),
    format: 'es',
    sourcemap: true,
  },
  ...base,
};

const vueLoaderCjsConfig = {
  output: {
    file: path.join(cwd, 'dist/vue-loader.js'),
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
  },
  ...base,
  ...vueLoaderBase,
};

const vueLoaderEsConfig = {
  output: {
    file: path.join(cwd, 'dist/vue-loader.es.js'),
    format: 'es',
    sourcemap: true,
  },
  ...base,
  ...vueLoaderBase,
};

module.exports = [cjsConfig, esConfig, vueLoaderCjsConfig, vueLoaderEsConfig];
