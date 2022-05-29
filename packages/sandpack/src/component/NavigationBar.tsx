import React, { useMemo } from 'react';
import {
  useSandpack,
  FileTabs,
  useSandpackNavigation,
} from '@codesandbox/sandpack-react';
import IconReset from './IconReset';
import IconGitHub from './IconGithub';

export default function NavigationBar() {
  const { sandpack } = useSandpack();
  const { clients, activeFile, files } = sandpack;

  const { refresh } = useSandpackNavigation(Object.keys(clients)[0]);

  const handleReset = () => {
    sandpack.resetAllFiles();
    refresh();
  };

  const openGithubEditUrl = useMemo(() => {
    // @ts-ignore
    const editUrl = files[activeFile]?.editUrl;
    return editUrl;
  }, [activeFile, files]);

  return (
    <div className="taro-hooks--sandpack__navigation flex items-center justify-between">
      <div className="taro-hooks--sandpack__navigation__tabs sp-declaration">
        <FileTabs />
      </div>
      <div>
        {openGithubEditUrl && (
          <a
            className="button button--sm button--active button--link"
            href={openGithubEditUrl}
            target="__blank"
          >
            {/* @ts-ignore */}
            <IconGitHub /> Github
          </a>
        )}
        <button
          onClick={handleReset}
          type="button"
          className="button button--sm button--active button--link"
        >
          {/* @ts-ignore */}
          <IconReset /> 重置
        </button>
      </div>
    </div>
  );
}
