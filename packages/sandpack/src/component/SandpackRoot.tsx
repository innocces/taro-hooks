import React, { lazy, memo } from 'react';
import { SandpackProvider } from '@codesandbox/sandpack-react';
import { SandpackLogLevel } from '@codesandbox/sandpack-client';

export type SandpackProps = {
  children: React.ReactNode;
};

import { createFileMap } from '../utils/createFileMap';

function SandpackRoot(props: SandpackProps) {
  const codeSnippets = React.Children.toArray(props.children);
  console.log(props, createFileMap(codeSnippets));
  return <div className="taro-hooks--sandpack">{props.children}</div>;
}

SandpackRoot.displayName = 'TaroHooksSandpack';

export default SandpackRoot;
