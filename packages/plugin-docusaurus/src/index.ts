import Joi from 'joi';
import type {
  Plugin,
  DocusaurusContext,
  OptionValidationContext,
} from '@docusaurus/types';

type Options = {
  /**
   * @description webpack alias map
   */
  alias: Record<string, string>;
};

/**
 * a preset for taro-hooks docs: includs alias and file resolve
 * @param {DocusaurusContext} context docusaurus context
 * @param {Options} options plugin options
 * @returns {Plugin<void>} Plugin
 */
function pluginDecusaurus(
  context: DocusaurusContext,
  options: Options,
): Plugin<void> {
  const { alias } = options;
  return {
    name: 'plugin-docusaurus-taro-hooks',
    contentLoaded({ content, actions }) {
      console.log('contentLoaded', content);
    },
    configureWebpack(config, isServer, utils, content) {
      console.log('alias', __dirname, alias);

      return {
        module: {
          rules: [
            {
              test: /\.vue$/,
              use: [
                utils.getJSLoader({ isServer }),
                require.resolve('./vue-loader'),
              ],
            },
          ],
        },
        resolve: {
          alias,
        },
      };
    },
  };
}

export default pluginDecusaurus;

const INVALIDALIAS = [
  '@site',
  '@generated',
  '@docusaurus',
  '@theme',
  '~docs',
  '~blog',
  '~pages',
  '~debug',
];

export function validateOptions({
  options,
  validate,
}: OptionValidationContext<Options, Options>): Options {
  const optionsScheme = Joi.object<Options>({
    alias: Joi.object().pattern(
      Joi.string().invalid(...INVALIDALIAS),
      Joi.string(),
    ),
  });

  return validate(optionsScheme, options);
}
