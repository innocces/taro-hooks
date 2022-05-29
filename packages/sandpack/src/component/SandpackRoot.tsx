import React, { useState, useRef, Children } from 'react';
import {
  SandpackProvider,
  SandpackInternalOptions,
  SandpackCodeEditor,
  SandpackThemeProvider,
  SandpackReactDevTools,
  useSandpack,
  useActiveCode,
} from '@codesandbox/sandpack-react';
import { SandpackLogLevel } from '@codesandbox/sandpack-client';

import NavigationBar from './NavigationBar';
import Preview from './Preview';

import { createFileMap } from '../utils/createFileMap';
import { dealSubFilePath } from '../utils';
import { CustomTheme } from './theme';
import { sandpackStyle } from '../style';

export type SandpackRootProps = {
  /**
   * @description default docusaurus mdx childrens
   */
  children: React.ReactNode;
  /**
   * @description custom sandpack code
   */
  code?: string;
  /**
   * @description custom sandpack filePath
   */
  filePath?: string;
  /**
   * @description custom sandpack framework
   */
  frameWork?: 'vue3' | 'react';
  /**
   * @description custom sandpack deps as JSON
   */
  dependencies?: string;
  /**
   * @description custom editUrl
   */
  editUrl?: string;
  /**
   * @description custom sandpack theme
   */
  theme?: 'dark' | 'light';
};

function SandpackRoot(props: SandpackRootProps) {
  const { children, code, filePath, frameWork, dependencies, editUrl, theme } =
    props;
  const template = frameWork || 'react';
  const codeSnippets = Children.toArray(children);
  const files = createFileMap(codeSnippets);
  if (code) {
    const extraFilePath = filePath
      ? dealSubFilePath(filePath.slice(1))
      : `/App/index.${template === 'react' ? 'tsx' : 'vue'}`;
    files[extraFilePath] = {
      code,
      active: false,
      hidden: false,
      editUrl,
    };
  }

  files['/styles.css'] = {
    code: [sandpackStyle, files['/styles.css']?.code ?? ''].join('\n\n'),
    hidden: true,
  };

  const sandpackProviderOptions: SandpackInternalOptions = {
    autorun: true,
    logLevel: SandpackLogLevel.None,
    initMode: 'user-visible',
    initModeObserverOptions: { rootMargin: '1400px 0px' },
  };
  return (
    <div className="taro-hooks--sandpack" translate="no">
      {/* @ts-ignore */}
      <SandpackProvider
        template={template}
        files={files}
        options={sandpackProviderOptions}
      >
        {/* @ts-ignore */}
        <SandpackThemeProvider theme={theme}>
          <SandpackContent />
        </SandpackThemeProvider>
      </SandpackProvider>
    </div>
  );
}

function SandpackContent() {
  const [devToolsLoaded, setDevToolsLoaded] = useState(false);
  const [showDevTools, changeShowDevTools] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const lineCountRef = useRef<{ [key: string]: number }>({});
  const { code } = useActiveCode();
  const { sandpack } = useSandpack();
  const { activeFile } = sandpack;
  if (!lineCountRef.current[activeFile]) {
    lineCountRef.current[activeFile] = code.split('\n').length;
  }
  const lineCount = lineCountRef.current[activeFile];
  const isExpandable = lineCount > 16 || isExpanded;

  console.log('sandpack', sandpack);

  return (
    <>
      <NavigationBar />
      <div className="taro-hooks--sandpack__layout flex sp-layout sp-declaration">
        {/* @ts-ignore */}
        <SandpackCodeEditor
          showLineNumbers
          showInlineErrors
          showTabs={false}
          showRunButton={false}
        />
        <Preview isExpanded={isExpanded} />
      </div>
      {showDevTools && <SandpackReactDevTools onLoadedData={console.log} />}
    </>
  );
}

SandpackRoot.displayName = 'TaroHooksSandpack';

export default SandpackRoot;
