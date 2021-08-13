import React, { useCallback } from 'react';
import { AtButton } from 'taro-ui';

import DocPage from '@components/DocPage';

import { useFile, useImage, useModal } from 'taro-hooks';

export default () => {
  const { download, upload } = useFile();
  const [, { choose, preview }] = useImage({});
  const [showModal] = useModal({ mask: true, title: '文件结果' });

  const handleUpload = useCallback(async () => {
    const fileInfo = await choose();
    if (fileInfo?.tempFilePaths?.length) {
      const uploadFilePath = fileInfo.tempFilePaths[0];
      const uploadResult = await upload({
        url: 'https://run.mocky.io/v3/35b34abe-3f7e-4cde-91a8-da02f699bdc0',
        filePath: uploadFilePath,
        name: 'chooseImage:file',
        header: {},
      });
      const modalContent =
        uploadResult?.statusCode === 200 ? uploadResult?.data : '上传失败';
      showModal({ content: modalContent });
    } else {
      showModal({
        content: '取消选择',
      });
    }
  }, [choose, upload, showModal]);

  const handleDownload = useCallback(async () => {
    try {
      const result = await download({
        url: 'https://pixabay.com/get/gca7a9aedd24075bee51ccdc9e510d6d78d66b2b607c643e63260d944732a75301e6ce92f56e371d0ea11c55613742929_640.jpg',
      });
      if (result.statusCode === 200 && result?.tempFilePath) {
        preview({
          urls: [result?.tempFilePath],
        });
      } else {
        throw new Error();
      }
    } catch (e) {
      showModal({
        content: 'downloadFile: fail',
      });
    }
  }, [download, showModal, preview]);

  return (
    <>
      <DocPage title="useFile 上传下载" panelTitle="useFile">
        <AtButton onClick={handleUpload}>选择图片上传</AtButton>
        <AtButton className="gap" onClick={handleDownload}>
          下载图片
        </AtButton>
      </DocPage>
    </>
  );
};
