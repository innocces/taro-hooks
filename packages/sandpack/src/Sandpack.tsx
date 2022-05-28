import React, { lazy, memo } from 'react';
import { SandpackProvider } from '@codesandbox/sandpack-react';
import { SandpackLogLevel } from '@codesandbox/sandpack-client';
import ErrorBoundary from './component/ErrorBoundary';
import SandpackRoot from './component/SandpackRoot';

import { createFileMap } from './utils/createFileMap';

import { sandpackStyle } from './style';

function Sandpack(props: any): any {
  return (
    // @ts-ignore
    <ErrorBoundary fallback={<div>fail load</div>}>
      <SandpackRoot {...props} />
    </ErrorBoundary>
  );
}

export default memo(Sandpack);
