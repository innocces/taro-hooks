import type { LoaderContext } from 'webpack';

export type Options = {
  // which webpack alias to use for vue path replaces
  alias: string;
  // github edit url
  openTarget?: string;
  /**
   * @description doc link prefix
   */
  previewOptions: Record<'vue' | 'react', string>;
};

/**
 * transform vue component to source code
 * @param {string} source
 * @returns with props Sandpack
 */
export default function (this: LoaderContext<Options>, source: string): string {
  // use resourcePath to mastch current file Path
  // format: @alias/path-file.ext
  const { resourcePath, getOptions, mode } = this;
  const { alias, openTarget, previewOptions } = getOptions();

  // deal filepath due to windows \ -> /
  const filePath = resourcePath?.replace(alias ?? '', '')?.replace(/\\/g, '/');

  const iframeUrl =
    previewOptions.vue + '/#/pages' + filePath.replace(/\.vue$/, '');

  const dependencies = {
    '@taro-hooks/plugin-vue':
      mode === 'development'
        ? 'node_modules/@taro-hooks/plugin-vue/index.js'
        : 'latest',
  };

  return `
  import React from 'react';
  import CodeDisplay from '@site/src/components/CodeDisplay';

  export default () => {
    return (
      <CodeDisplay
        language="html"
        title="${filePath}"
        openUrl="${openTarget + filePath}"
        url="${iframeUrl}"
      >
        {\`${source}\`}
      </CodeDisplay>
    )
  }
  `;

  // theres some error on sandpack
  // return (
  //   <BrowserOnly>
  //   {
  //     () => {
  //       const sandpackCss = window.location.origin + '/style/sandpack.css';
  //       return (
  //         <Sandpack
  //           frameWork="vue3"
  //           code={\`${source}\`}
  //           filePath="${filePath}"
  //           editUrl="${openTarget}${filePath}"
  //           externalResources={[sandpackCss]}
  //           theme={colorMode}
  //           fallback={}
  //         />
  //       )
  //     }
  //   }
  //   </BrowserOnly>
  // )
}
