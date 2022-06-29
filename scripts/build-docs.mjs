import 'zx/globals';
import { cwd } from 'process';
import { resolve } from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';

const deployDirName = 'hooks-docs';

async function main() {
  try {
    // find deploy directory
    const deployDirExists = fs.pathExistsSync(resolve(cwd(), deployDirName));
    // clean up deploy directory
    console.log(
      chalk.yellow(
        `deploy dir${deployDirExists ? '' : ' not'} exists, ${
          deployDirExists ? 'clean' : 'generate'
        } it now!`,
      ),
    );
    if (!deployDirExists) {
      await $`mkdir ${deployDirName}`;
    } else {
      await $`rm -rf ${deployDirName}/*`;
    }

    // copy website/build
    console.log(chalk.blue('copy website docs....'));
    const websiteBuildDir = 'website/build';
    await $`cp -r -f ${websiteBuildDir}/ ${deployDirName}/site`;

    // copy vue demo
    console.log(chalk.blue('copy plugin-vue demo....'));
    const pluginVueBuildDir = 'examples/taro-hooks-plugin-vue/dist';
    await $`cp -r -f ${pluginVueBuildDir}/ ${deployDirName}/vue`;

    // copy react demo
    console.log(chalk.blue('copy plugin-react demo....'));
    const pluginReactBuildDir = 'examples/taro-hooks-plugin/dist';
    await $`cp -r -f ${pluginReactBuildDir}/ ${deployDirName}/react`;
  } catch (e) {
    console.log(chalk.redBright('generate-docs failed'), e.message);
    process.exit();
  }
  process.exit();
}

main();
