import Joi from 'joi';
import type {
  Plugin,
  DocusaurusContext,
  OptionValidationContext,
} from '@docusaurus/types';
import type { Options as VueOptions } from './vue-loader';

type Options = {
  /**
   * @description webpack alias map
   */
  alias: Record<string, string>;
  /**
   * @description vue-loader options
   */
  vue: VueOptions;
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
  const { alias, vue } = options;
  return {
    name: 'plugin-docusaurus-taro-hooks',
    configureWebpack(config, isServer, utils) {
      return {
        module: {
          rules: [
            {
              test: /\.vue$/,
              use: [
                utils.getJSLoader({ isServer }),
                {
                  loader: require.resolve('./vue-loader'),
                  options: vue,
                },
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
