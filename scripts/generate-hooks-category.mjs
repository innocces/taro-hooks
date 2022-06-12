/**
 * auto generate hooks category.json -> docusairus
 */

import 'zx/globals';
import { cwd, exit } from 'process';
import { resolve } from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import yaml from 'js-yaml';
import compile from '@mdx-js/mdx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkStringify from 'remark-stringify';

const baseDIR = resolve(cwd(), 'packages/hooks/src');
const categoryURI = resolve(cwd(), 'website', 'sidebarsHooks.json');

const PATH2LABEL = {
  basic: '基础',
  device: '设备',
  env: '环境判断',
  feedback: '操作反馈',
  layout: '布局',
  media: '媒体',
  network: '网络',
  wechat: '小程序',
};

async function main() {
  try {
    console.log(chalk.yellow(`start to scan dir: ${baseDIR}`));

    const scanList = fs
      .readdirSync(baseDIR)
      ?.filter?.(
        (fileOrDIR) =>
          isHooksDIR(fileOrDIR) &&
          fs.statSync(resolve(baseDIR, fileOrDIR)).isDirectory(),
      );

    if (scanList.length) {
      console.log(
        chalk.yellow('start use mdx & frontmatter resolve file info....'),
      );

      // init category
      const hooksCategory = {};
      const commonOptions = {
        type: 'category',
        collapsed: false,
        collapsible: true,
      };

      for await (const name of scanList) {
        const checkHasIndexMD = fs.existsSync(
          resolve(baseDIR, name, 'index.md'),
        );
        const checkHasIndexMDX = fs.existsSync(
          resolve(baseDIR, name, 'index.mdx'),
        );
        if (checkHasIndexMD || checkHasIndexMDX) {
          const parseFileURI = resolve(
            baseDIR,
            name,
            `index.md${checkHasIndexMDX ? 'x' : ''}`,
          );
          console.log(
            chalk.green(
              `[${name}]: use mdx parse vfile - index.md${
                checkHasIndexMDX ? 'x' : ''
              }`,
            ),
          );
          const mdContent = fs.readFileSync(parseFileURI, {
            encoding: 'utf-8',
          });

          await compile(mdContent, {
            remarkPlugins: [
              remarkStringify,
              [remarkFrontmatter, ['yaml']],
              () => generateMdxFile,
            ],
          });

          function generateMdxFile(astTree) {
            // the frontmatter will parse into second child type is paragraph
            const remarkFrontMatterString =
              astTree?.children?.[1]?.children?.[0]?.value ?? '';
            console.log(chalk.gray(`ast matter: \n${remarkFrontMatterString}`));
            const {
              group: { title: groupTitle },
              title,
            } = yaml.load(remarkFrontMatterString);
            const currentCategorySetting = hooksCategory[groupTitle];
            const pageCategoryPath = title + '/index';
            if (!currentCategorySetting) {
              const linkSlugPath = Object.entries(PATH2LABEL).find(
                (v) => v[1] === groupTitle,
              )?.[0];
              hooksCategory[groupTitle] = {
                ...commonOptions,
                link: generateGuidePageLink(groupTitle, linkSlugPath),
                label: groupTitle,
                items: [pageCategoryPath],
              };
            } else {
              hooksCategory[groupTitle] = {
                ...currentCategorySetting,
                items: [...currentCategorySetting.items, pageCategoryPath],
              };
            }
          }
        }
      }

      const categoryContent = {
        hooks: Object.values(hooksCategory),
      };

      fs.writeFileSync(categoryURI, JSON.stringify(categoryContent, null, 2));
    }
  } catch (e) {
    console.log(chalk.red('generate fail:', e.message));
  }

  exit();
}

function isHooksDIR(dirName) {
  return dirName.startsWith('use');
}

function generateGuidePageLink(title, slug) {
  return {
    type: 'generated-index',
    title,
    description: `导航 - ${title} `,
    slug: `/category/${slug}`,
    keywords: [title, 'hooks'],
  };
}

main();
