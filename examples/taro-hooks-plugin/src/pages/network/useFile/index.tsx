import React from 'react';
import { showToast, showModal, chooseVideo } from '@tarojs/taro';
import { useState } from '@taro-hooks/core';
import { log, logError } from '@taro-hooks/shared';
import { useFile } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Cell, Button, Progress, Input, Field } from '@taroify/core';

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [downloadFile, setDownloadFile] = useState<string>(
    'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
  );
  const [downloadProgress, setDownloadProgress] = useState<number>(0);

  const { download, upload } = useFile();

  const onProgress = (
    { progress = 0, totalBytesSent = 0, totalBytesExpectedToSend = 0 } = {},
    action,
  ) => {
    action(progress);
    showToast({
      title: `${progress}%: ${totalBytesSent} / ${totalBytesExpectedToSend}`,
      icon: 'loading',
      mask: true,
    });
  };

  const onHeadersReceived = (headers) => {
    log(headers);
    showToast({
      title: 'onHeadersReceived trigger',
      icon: 'none',
      mask: true,
    });
  };

  const handleDownload = async () => {
    if (!downloadFile?.length) return;
    const downloadUpdate = (progressResult) =>
      onProgress(progressResult, setDownloadProgress);
    const option = {
      progress: downloadUpdate,
      headersReceive: onHeadersReceived,
      url: downloadFile,
    };
    setLoading(true);
    setDownloadProgress(0);
    try {
      const response = await download(option);
      showModal({
        title: '下载成功',
        content: response?.tempFilePath,
        showCancel: false,
      });
    } catch (e) {
      logError(e.message);
    }
    setLoading(false);
  };

  const handleUpload = async () => {
    try {
      const videos = await chooseVideo({});
      if (videos?.tempFilePath) {
        setUploadProgress(0);
        setLoading(true);
        const uploadUpdate = (progressResult) =>
          onProgress(progressResult, setUploadProgress);
        const option = {
          progress: uploadUpdate,
          headersReceive: onHeadersReceived,
          filePath: videos.tempFilePath,
        };
        const response = await upload(option);
        showModal({
          title: '上传成功',
          content: response?.data,
          showCancel: false,
        });
      }
    } catch (e) {
      logError(e.message);
    }
    setLoading(false);
  };

  return (
    <DemoContent>
      <Cell title="上传" clickable>
        <Button loading={loading} onClick={handleUpload}>
          点击
        </Button>
      </Cell>
      <Progress percent={uploadProgress} />
      <Field label="地址">
        <Input
          value={downloadFile}
          onChange={(event) => setDownloadFile(event.detail.value)}
          placeholder="请输入下载地址"
        />
      </Field>
      <Cell title="下载" clickable>
        <Button loading={loading} onClick={handleDownload}>
          点击
        </Button>
      </Cell>
      <Progress percent={downloadProgress} />
    </DemoContent>
  );
};
