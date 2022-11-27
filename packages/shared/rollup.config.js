import ts from 'rollup-plugin-ts';
import { join } from 'path';

const cwd = __dirname;

const baseConfig = {
  input: join(cwd, 'src/index.ts'),
  output: [
    {
      file: join(cwd, 'dist/index.js'),
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      banner: `
/**
 MIT License

 Copyright (c) ${new Date().getFullYear()} innocces

 Power by TARO-HOOKS
 */
`,
    },
  ],
  plugins: [ts()],
};

const esmConfig = Object.assign({}, baseConfig, {
  output: Object.assign({}, baseConfig.output, {
    sourcemap: true,
    format: 'es',
    file: join(cwd, 'dist/shared.esm.js'),
  }),
  plugins: [ts()],
});

module.exports = [baseConfig, esmConfig];
