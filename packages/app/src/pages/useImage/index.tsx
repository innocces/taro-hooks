import React, { useCallback } from 'react';
import { AtButton } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useImage } from 'taro-hooks';

export default () => {
  const [fileInfo, { choose, preview, save }] = useImage({});

  return (
    <>
      <DocPage title="useImage 图片" panelTitle="useImage">
        <AtButton onClick={() => choose()}>选择图片</AtButton>
        <AtButton
          disabled={!fileInfo.tempFilePaths}
          className="gap"
          onClick={() => preview({ urls: fileInfo.tempFilePaths })}
        >
          预览照片
        </AtButton>
        <AtButton
          disabled={!fileInfo.tempFilePaths}
          onClick={() => save(fileInfo.tempFilePaths[0])}
        >
          保存图片
        </AtButton>
      </DocPage>
    </>
  );
};
