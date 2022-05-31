/**
 * @description generate deps | devDeps by framework
 */
import type { SandpackPredefinedTemplate } from '@codesandbox/sandpack-react';

// template
import packageJSON from '../template/package.json';
import babelConfig from '../template/babel.config';
import appVue from '../template/app.vue';
import appReact from '../template/app.react';
import appConfig from '../template/app.config';
import appIndexHtml from '../template/app.index.html';
import pageIndexConfig from '../template/page.index.config';
import configIndex from '../template/config.index';
import configEnv from '../template/config.env';

/**
 * @description generate deps by framework
 * @param {SandpackPredefinedTemplate} framework
 * @param {string} deps
 * @returns {Record<string, string>} deps
 */
export function getDeps(
  framework: SandpackPredefinedTemplate,
  deps?: string,
): Record<string, string> {
  // only deal react & vue, default react
  framework = framework ?? 'react';
  // default use 3.4.8 taro version
  const defaultDeps = {
    '@babel/runtime': '^7.7.7',
    '@tarojs/cli': '3.4.8',
    '@tarojs/components': '3.4.8',
    '@tarojs/react': '3.4.8',
    '@tarojs/runtime': '3.4.8',
    '@tarojs/taro': '3.4.8',
    ...generatePropsDeps(deps),
  };

  if (framework === 'react') {
    return {
      ...defaultDeps,
      react: '^17.0.2',
      'react-dom': '^17.0.2',
      '@tarojs/plugin-framework-react': '3.4.8',
    };
  } else if (framework === 'vue3') {
    return {
      ...defaultDeps,
      '@tarojs/plugin-framework-vue3': '3.4.8',
      vue: '^3.0.0',
    };
  }

  return defaultDeps;
}

/**
 * @description generate devDeps by framework
 * @param {SandpackPredefinedTemplate} framework
 * @returns {Record<string, string>} devDeps
 */
export function getDevDeps(
  framework: SandpackPredefinedTemplate,
): Record<string, string> {
  // only deal react & vue, default react
  framework = framework ?? 'react';
  // default use 3.4.8 taro version
  const defaultDeps = {
    '@babel/core': '^7.8.0',
    '@tarojs/mini-runner': '3.4.8',
    '@tarojs/webpack-runner': '3.4.8',
    '@types/webpack-env': '^1.13.6',
    '@typescript-eslint/eslint-plugin': '^5.20.0',
    '@typescript-eslint/parser': '^5.20.0',
    'babel-plugin-import': '^1.13.3',
    'babel-preset-taro': '3.4.8',
    eslint: '^8.12.0',
    'eslint-config-taro': '3.4.8',
    'eslint-plugin-import': '^2.12.0',
    stylelint: '9.3.0',
    typescript: '^4.6.3',
  };

  if (framework === 'react') {
    return {
      ...defaultDeps,
      '@types/react': '^17.0.2',
      'eslint-plugin-react': '^7.8.2',
      'eslint-plugin-react-hooks': '^4.2.0',
    };
  } else if (framework === 'vue3') {
    return {
      ...defaultDeps,
      'eslint-plugin-vue': '^8.0.0',
      'vue-loader': '^16.0.0-beta.8',
      '@vue/compiler-sfc': '^3.0.0',
    };
  }

  return defaultDeps;
}

/**
 * generate props.deps
 * @param {JSON string} deps
 * @returns {Record<string, string>} deps
 */
export function generatePropsDeps(deps: string = ''): Record<string, string> {
  let generateDeps = {};

  try {
    generateDeps = JSON.parse(deps);
    if (Object.prototype.toString.call(generateDeps) !== '[object Object]') {
      generateDeps = {};
    }
  } catch (e) {
    console.warn('generatePropsDeps error', e);
    generateDeps = {};
  }

  return generateDeps;
}

export function addOnFiles(
  files: Record<string, any>,
  template: SandpackPredefinedTemplate,
): Record<string, any> {
  const addOnFiles = { ...files };

  // addon package.json
  addOnFiles['/package.json'] = {
    code: JSON.stringify(packageJSON, null, 2),
  };

  // add babel.config.js
  addOnFiles['/babel.config.js'] = {
    code: babelConfig(template),
  };

  // add src/app.ts
  addOnFiles['/src/app.ts'] = {
    code: template === 'react' ? appReact : appVue,
  };

  // add app.config.ts
  addOnFiles['/src/app.config.ts'] = {
    code: appConfig,
  };

  // add index.html
  addOnFiles['/src/index.html'] = {
    code: appIndexHtml,
  };

  // add page/index/index.config.ts
  addOnFiles['/src/pages/index/index.config.ts'] = {
    code: pageIndexConfig,
  };

  // add config/index.js
  addOnFiles['/config/index.js'] = {
    code: configIndex(template),
  };

  // add config/dev.js
  addOnFiles['/config/dev.js'] = {
    code: configEnv('development'),
  };

  // add config/prod.js
  addOnFiles['/config/prod.js'] = {
    code: configEnv('production'),
  };

  return addOnFiles;
}
