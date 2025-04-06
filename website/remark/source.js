const { readFileSync, existsSync } = require('fs');
const { join } = require('path');

exports.getSourceCodeWithOptions = function getSourceCodeWithOptions(
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
      language: 'tsx',
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
