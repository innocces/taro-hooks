import React, { useState, useMemo } from 'react';
import type { IPreviewerProps } from './preview-default/Previewer';
import Previewer from './preview-default/Previewer';
import './Previewer.less';
import { Device } from '../components/device';
import { useDemoUrl } from 'dumi/theme';

export const ACTIVE_MSG_TYPE = 'dumi:scroll-into-demo';

export default (props: IPreviewerProps) => {
  const [isVue, changeIsVue] = useState<boolean>(false);
  const builtinDemoUrl = useDemoUrl(props.identifier);
  console.log(props, builtinDemoUrl);

  const switchVisible = useMemo(() => {
    return !window.location.href.includes('hooks');
  }, []);

  const devicesURL = useMemo(() => {
    if (isVue) {
      // 如果是vue就直接吞吐对应的vue展示页面
      const componentName = props.identifier
        .replace('-demos', '')
        .split('-')
        .map((v) =>
          v.replace(/^\S/, (replaceString) => replaceString.toUpperCase()),
        )
        .join('');
      return process.env.VUE_HOST + '/#/pages/' + componentName + '/index';
    } else {
      return props.demoUrl ?? builtinDemoUrl;
    }
  }, [builtinDemoUrl, props, isVue]);

  return (
    <div className="adm-doc-previewer" data-debug={props.debug || undefined}>
      <div className="adm-doc-previewer-source">
        <Previewer {...props} />
      </div>
      <div className="adm-doc-previewer-device">
        {switchVisible && (
          <div
            className="adm-doc-previewer-device-switch"
            onClick={() => changeIsVue(!isVue)}
          >
            当前模式: {isVue ? 'Vue' : 'React'}(👆点击更换模式)
          </div>
        )}
        <Device url={devicesURL} />
      </div>
    </div>
  );
};
