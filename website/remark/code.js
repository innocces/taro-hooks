const visit = require('unist-util-visit');
const find = require('unist-util-find');
const { readFileSync, existsSync } = require('fs');
const { join } = require('path');

const matchREG = /^<code src="(.+)".+\/>$/;

const fakeImportCombineTabsNode = {
  type: 'import',
  value: `import CombineTabs from '@site/src/components/Tabs';`,
};
const fakeImportCodeDisplayNode = {
  type: 'import',
  value: `import CodeDisplay from '@site/src/components/CodeDisplay';`,
};

// {
//   type: 'jsx',
//     value: '<code src="@pages/useThrottle" />',
//       position: [Position]
// },

module.exports = function codePlugin(options) {
  /**
   * @param {import('@types/mdast').Root} root
   * @param {import('@types/mdast').vFile} vFile
   * */
  return async (root, vFile) => {
    // just deal hooks dir
    if (vFile?.path?.includes('\\packages\\hooks\\src\\')) {
      /**
       * find import node, check source code
       * like:
       * { type: 'import', value: 'import CombineTabs from '@site/src/components/Tabs'' }
       * { type: 'import', value: 'import CodeDisplay from '@site/src/components/CodeDisplay'' }
       */
      let importCombineTabs = find(root, (node) => {
        return (
          node.type === 'import' &&
          node?.value?.includes(
            `import CombineTabs from '@site/src/components/Tabs'`,
          )
        );
      });
      let importCodeDisplay = find(root, (node) => {
        return (
          node.type === 'import' &&
          node?.value?.includes(
            `import CodeDisplay from '@site/src/components/CodeDisplay'`,
          )
        );
      });
      visit(root, 'jsx', (node, index) => {
        const isCodeJSX = matchREG.test(node.value);
        const fileAbsPath = node?.value?.match?.(matchREG)?.[1];
        if (
          isCodeJSX &&
          fileAbsPath?.length &&
          fileAbsPath?.startsWith?.('use')
        ) {
          // match code; insert new combine tabs & codeDisplayBlock with newLine
          const replaceNodes = [];
          if (!importCodeDisplay) {
            replaceNodes.push(fakeImportCodeDisplayNode);
            // mark only one in current walk
            importCodeDisplay = true;
          }
          if (!importCombineTabs) {
            replaceNodes.push(fakeImportCombineTabsNode);
            // mark only one in current walk
            importCombineTabs = true;
          }
          // make display way
          const {
            vue: { source: vueSource, ...vueProps },
            react: { source: reactSource, ...reactProps },
          } = getSourceCodeWithOptions(fileAbsPath, options);
          function parseObjectPropsToStr(props) {
            return Object.entries(props)
              .map(([key, value]) => `${key}="${value}"`)
              .join(' ');
          }
          const vueTab = `<CodeDisplay ${parseObjectPropsToStr(
            vueProps,
          )}>{\`${vueSource}\`}</CodeDisplay>`;
          const reactTab = `<CodeDisplay ${parseObjectPropsToStr(
            reactProps,
          )}>{\`${reactSource}\`}</CodeDisplay>`;
          const tabsNode = {
            type: 'jsx',
            value: `<CombineTabs VueTab={${vueTab}} ReactTab={${reactTab}} />`,
          };
          replaceNodes.push(tabsNode);
          root.children.splice(index, 1, ...replaceNodes);
        }
      });
    }
  };
};

function getSourceCodeWithOptions(
  fileAbsPath,
  { alias, openTarget, previewOptions },
) {
  const { ['@vue-demo']: vueHost, ['@react-demo']: reactHost } = alias;
  const { ['@vue-demo']: vueTarget, ['@react-demo']: reactTarget } = openTarget;
  const { vue, react } = previewOptions;
  const vueSourcePath = join(vueHost, fileAbsPath + '.vue');
  const vueSource = existsSync(vueSourcePath)
    ? readFileSync(vueSourcePath, { encoding: 'utf-8' })
    : '';
  const reactSourcePath = join(reactHost, fileAbsPath + '.tsx');
  const reactSource = existsSync(reactSourcePath)
    ? readFileSync(reactSourcePath, { encoding: 'utf-8' })
    : '';

  return {
    vue: {
      language: 'html',
      source: escapeTemplateMarkString(vueSource),
      title: fileAbsPath,
      openUrl: vueTarget + '/' + fileAbsPath + '.vue',
      url: vue + '/pages/' + fileAbsPath,
    },
    react: {
      language: 'jsx',
      source: escapeTemplateMarkString(reactSource),
      title: fileAbsPath,
      openUrl: reactTarget + '/' + fileAbsPath + '.tsx',
      url: react + '/pages/' + fileAbsPath,
    },
  };
}

function escapeTemplateMarkString(str) {
  return str?.replace(/`/gi, "'").replace(/\$\{/gi, '\\${');
}
