import React from 'react';
import Prewviewer from 'dumi-theme-mobile/src/builtins/Previewer';
import { IPreviewerProps } from 'dumi-theme-default/src/builtins/Previewer';
import './index.less';
interface ICustomPrewviewerProps extends IPreviewerProps {
  hidden?: boolean;
}

export default ({ hidden, ...props }: ICustomPrewviewerProps) => {
  return (
    <Prewviewer
      className={hidden ? '__dumi_taro-hook-hidden' : ''}
      {...props}
    />
  );
};
