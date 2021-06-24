import React, { useCallback, useEffect } from 'react';
import Prewviewer from 'dumi-theme-mobile/src/builtins/Previewer';
import { IPreviewerProps } from 'dumi-theme-default/src/builtins/Previewer';
import {
  defineCustomElements,
  applyPolyfills,
} from '@tarojs/components/loader';
import { window } from '@tarojs/runtime';

import '@tarojs/components/dist/taro-components/taro-components.css';
import './index.less';

interface ICustomPrewviewerProps extends IPreviewerProps {
  hidden?: boolean;
}

export default ({ hidden, ...props }: ICustomPrewviewerProps) => {
  useEffect(() => {
    init();
  }, []);

  const init = useCallback(() => {
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  }, []);

  return (
    <Prewviewer
      className={hidden ? '__dumi_taro-hook-hidden' : ''}
      {...props}
    />
  );
};
