// 参考: https://github.com/ant-design/ant-design-icons
// 参考: https://github.com/iconfont-cli/mini-program-iconfont-cli

import { fetchXml } from 'iconfont-parser';
import { writeFileSync, accessSync, mkdir } from 'fs';
import { resolve, join } from 'path';

// is mode for generate icon
const generateIconMode = process.argv[2] === '--target=icon';
const iconURI = 'http://at.alicdn.com/t/font_2943084_mnj77jf56tr.js';
const iconsDIR = join(__dirname, '../src/icons');
const framwork = ['react', 'vue'];

interface IconInfoItem {
  name: string;
  orgIconName: string;
  svg: string;
}

interface ISymbol {
  $: {
    viewBox: string;
    id: string;
  };
  path: Array<{
    $: {
      d: string;
      fill?: string;
    };
  }>;
}

interface IXMLData {
  svg: {
    symbol: ISymbol[];
  };
}

function generateLodashTemplateIdentifierVars(vars: string): string {
  return `<%= ${vars} %>`;
}

function generateSVGAttr(
  attrKey: string,
  attrValue: any,
  counter: { time: number },
): string {
  let attrTemplate = '';
  if (attrValue && attrValue.$) {
    if (attrKey === 'path') {
      attrValue.$.fill = attrValue.$.fill || 'currentColor';
    }

    Object.entries(attrValue.$).forEach(([subAttrName, subAttrValue]) => {
      if (subAttrName === 'fill') {
        attrTemplate += ` ${subAttrName}='${generateLodashTemplateIdentifierVars(
          'color',
        )}'`;
        counter.time += 1;
      } else {
        attrTemplate += ` ${subAttrName}='${subAttrValue}'`;
      }
    });
  }
  return attrTemplate;
}

function generateSVG(svgInfo: ISymbol, name: string): string {
  const {
    $: { viewBox },
    ...attr
  } = svgInfo;
  // base props make svg behaviours normal
  let svgTemplate = `<svg viewBox='${viewBox}' xmlns='http://www.w3.org/2000/svg' width=${generateLodashTemplateIdentifierVars(
    'size',
  )} height=${generateLodashTemplateIdentifierVars(
    'size',
  )} aria-hidden='true' focusable='false'>`;
  Object.entries(attr).forEach(([attrKey, attrValue]) => {
    const counter = {
      time: 0,
    };
    if (attrValue.$) {
      svgTemplate += `<${attrKey}${generateSVGAttr(
        attrKey,
        attrValue,
        counter,
      )} />`;
    } else if (Array.isArray(attrValue)) {
      attrValue.forEach(
        (subAttr) =>
          (svgTemplate += `<${attrKey}${generateSVGAttr(
            attrKey,
            subAttr,
            counter,
          )} />`),
      );
    }
  });
  return svgTemplate + '</svg>';
}

function escape(template: string): string {
  return template.replace(/<|>/g, (matchString) =>
    encodeURIComponent(matchString),
  );
}

function walk<T>(
  fn: (name: string, svg: string) => Promise<T>,
  iconInfo: IconInfoItem[],
) {
  return Promise.all(iconInfo.map(({ name, svg }) => fn(name, svg)));
}

function promisify(
  fn: (...args: any[]) => any,
): (...args: any[]) => Promise<any> {
  return (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, resolve, reject);
    });
}

const reactIconTemplate = (iconName: string, iconSVG: string): string => `
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const ${iconName}: FC<ITaroIconProps> = ({
  size,
  style = {},
  color,
  usePX,
  ...props
}) => {

  const renderSize = useMemo(() => {
    return usePX ? pxTransform(size!).replace(/rpx|rem/ig, 'px') : pxTransform(size!);
  }, [usePX, size, style])

  const background = useMemo(() => {
    const base64SVG = template("${iconSVG}", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return \`url("data:image/svg+xml, \${escape\}") no-repeat\`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}} {...props}></Text>
  )
}

${iconName}.displayName = '${iconName}';

${iconName}.defaultProps = {
  size: 18,
  style: {}
}

export default ${iconName};
`;

const vueIconTemplate = (iconName: string, iconSVG: string): string => `
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: '${iconName}',
  props: taroIconProps,
  emits: ['click'],
  setup(props, { emit }) {
    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return () => {
      const {
        size = 18,
        style = {},
        color,
        usePX,
        ...restProps
      } = props;

      const renderSize = () => {
        return usePX ? pxTransform(size!).replace(/rpx|rem/ig, 'px') : pxTransform(size!);
      }

      const background = () => {
        const base64SVG = template("${iconSVG}", { size: renderSize(), color: hex2rgb(color || '') });
        const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
        return \`url("data:image/svg+xml, \${escape\}") no-repeat\`;
      };

      return (
        // @ts-ignore
        <Text onClick={onClick} class="adm-icon" {...restProps} style={{...style, background: background(), width: renderSize(), height: renderSize()}}></Text>
      )
    }
  }
})
`;

async function parseIconInfo(): Promise<IconInfoItem[]> {
  try {
    const {
      svg: { symbol = [] },
    }: IXMLData = await fetchXml(iconURI);
    const iconInfo: IconInfoItem[] = [];
    // generate name
    if (symbol.length) {
      symbol.forEach((item) => {
        const {
          $: { id },
        } = item;
        // name must startsWith icon-
        // rename with CamelCase
        const name = id
          .split('-')
          .slice(1)
          .map((v) =>
            v.replace(/^\S/, (replaceString) => replaceString.toUpperCase()),
          )
          .join('');
        const svg = generateSVG(item, name);
        iconInfo.push({
          name,
          svg,
          orgIconName: id,
        });
      });
    }
    return iconInfo;
  } catch (e) {
    console.error('fetch icon fail');
    process.exit();
  }
}

async function checkBaseDIR(type: string) {
  try {
    accessSync(join(iconsDIR, type));
  } catch (e) {
    await promisify(mkdir)(join(iconsDIR, type));
  }
}

(async () => {
  if (generateIconMode) {
    const svgInfo = await parseIconInfo();
    for await (let i of framwork) {
      await checkBaseDIR(i);
      // generate file
      await walk(async (name, svg) => {
        console.log(`generate file: ${name}.${i}.tsx`);
        writeFileSync(
          resolve(__dirname, `../src/icons/${i}/${name}.${i}.tsx`),
          i === 'react'
            ? reactIconTemplate(name, svg)
            : vueIconTemplate(name, svg),
        );
      }, svgInfo);
      // generate entry
      const entryTemplate = svgInfo
        .map(
          ({ name }) =>
            `export { default as ${name} } from './icons/${i}/${name}.${i}'`,
        )
        .join('\n');
      writeFileSync(
        resolve(__dirname, `../src/index.${i}.ts`),
        `
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
${entryTemplate}
    `,
      );
    }
  }
})();
