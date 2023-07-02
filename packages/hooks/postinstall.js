var { logError } = require('@taro-hooks/shared')
var { cwd } = require('process')
var frameworkPluginMap = [
  ['vue', '@taro-hooks/plugin-vue'],
  ['react', '@taro-hooks/plugin-react']
]
function checkPluginsValid() {
  var framework, hasFramework = false, valid = false;

  frameworkPluginMap.forEach(([frameworkPackageName, frameworkPluginName]) => {
    try {
      if (!valid) {
        require.resolve(frameworkPackageName, { paths: [cwd()] })
        hasFramework = true
        framework = frameworkPackageName
        require.resolve(frameworkPluginName, { paths: [cwd()] })
        valid = true
        hasFramework = false
      }
    } catch (e) {
      if (hasFramework && !valid) {
        logError(`
您正在使用 taro-hooks@ver2:
当前框架为: ${framework}
缺失对应框架插件: ${frameworkPackageName}
请查看 README 进行对应配置:
https://github.com/innocces/taro-hooks#-quick-start
请使用对应安装器安装插件:
# npm
npm i ${frameworkPackageName}
# yarn
yarn add ${frameworkPackageName}
# pnpm
pnpm add ${frameworkPackageName}
若您想要使用1.x版本, 请重置 taro-hooks 版本为 1. 重新 install.
        `)
      }
    }
  })
}

checkPluginsValid();

var BANNER =
  '\u001B[96mThank you for using taro-hooks (\u001B[94m https://github.com/innocces/taro-hooks \u001B[96m) for taro hook library!\u001B[0m\n\n' +
  '\u001B[96mPlease consider give me a ⭐️ ! \u001B[0m\n' +
  '\u001B[96m>\u001B[94m https://opencollective.com/taro-hooks \u001B[0m\n' +
  '\u001B[96m>\u001B[94m https://www.buymeacoffee.com/innocces \u001B[0m\n' +
  '\u001B[96mAlso, the author of taro-hooks (\u001B[94m https://github.com/innocces \u001B[96m) is looking for a good job -)\u001B[0m\n';
console.log(BANNER);
