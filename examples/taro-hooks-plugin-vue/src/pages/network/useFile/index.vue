<template>
  <demo-content>
    <nut-cell title="上传">
      <template v-slot:link>
        <nut-button @click="handleUpload()">点击</nut-button>
      </template>
    </nut-cell>
    <nut-progress :percentage="uploadProgress" />
    <nut-input
      label="地址"
      placeholder="请输入下载地址"
      v-model="downloadFile"
      @update:model-value="setDownloadFile($event)"
    />
    <nut-cell title="下载">
      <template v-slot:link>
        <nut-button :loading="loading" @click="handleDownload()"
          >点击</nut-button
        >
      </template>
    </nut-cell>
    <nut-progress :percentage="downloadProgress" />
  </demo-content>
</template>

<script setup lang="ts">
import { showToast, showModal, chooseVideo } from '@tarojs/taro';
import { useState } from '@taro-hooks/core';
import { escapeState, log, logError } from '@taro-hooks/shared';
import { useFile } from 'taro-hooks';

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
  if (!escapeState(downloadFile)?.length) return;
  const downloadUpdate = (progressResult) =>
    onProgress(progressResult, setDownloadProgress);
  const option = {
    progress: downloadUpdate,
    headersReceive: onHeadersReceived,
    url: escapeState(downloadFile),
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
</script>
