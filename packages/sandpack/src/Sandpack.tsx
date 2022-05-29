import React, { memo } from 'react';
import ErrorBoundary from './component/ErrorBoundary';
import SandpackRoot from './component/SandpackRoot';
import type { SandpackRootProps } from './component/SandpackRoot';

import './style/index.less';

type SandpackProps = {
  /**
   * @description a fallback children when sandpack failed to load
   */
  fallback?: React.ReactNode;
};

function Sandpack({
  fallback,
  ...props
}: SandpackProps & SandpackRootProps): JSX.Element {
  return (
    // @ts-ignore
    <ErrorBoundary fallback={fallback ?? props.children}>
      <SandpackRoot {...props} />
    </ErrorBoundary>
  );
}

export default memo(Sandpack);
