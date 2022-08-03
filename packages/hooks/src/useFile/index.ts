import Taro, { uploadFile, downloadFile } from '@tarojs/taro';
import type { UploadTask, DownloadTask } from '@tarojs/taro';
import type { ExcludeOption, PromiseAction } from '../type';
import { generateGeneralFail } from '../utils/tool';

export type CommonOption<R> = {
  afterSend?: (task: R) => void;
};

export type Task =
  | UploadTask.UploadTaskPromise
  | DownloadTask.DownloadTaskPromise;

export type ListenOptions = Partial<Task & CommonOption<Task>>;

export type UploadOption = ExcludeOption<Taro.uploadFile.Option> &
  Partial<UploadTask.UploadTaskPromise> &
  CommonOption<UploadTask>;

export type DownloadOption = ExcludeOption<Taro.downloadFile.Option> &
  Partial<DownloadTask.DownloadTaskPromise> &
  CommonOption<DownloadTask>;

export type Upload = PromiseAction<
  Taro.uploadFile.SuccessCallbackResult,
  UploadOption
>;

export type Download = PromiseAction<
  Taro.downloadFile.FileSuccessCallbackResult,
  DownloadOption
>;

export type IDownloadFileAction = (
  option: DownloadOption,
) => Promise<
  Taro.downloadFile.FileSuccessCallbackResult | TaroGeneral.CallbackResult
>;

function useFile(): { upload: Upload; download: Download } {
  const upload: Upload = (option) => {
    return new Promise((resolve, reject) => {
      try {
        const [uploadOption, listenOptions] = filterOptions(option);
        const uploadTask = uploadFile({
          ...((uploadOption || {}) as UploadOption),
          success: resolve,
          fail: reject,
        });

        autoListenWithTask(uploadTask, listenOptions as ListenOptions);
      } catch (e) {
        reject(generateGeneralFail('uploadFile', e.message));
      }
    });
  };

  const download: Download = (option) => {
    return new Promise((resolve, reject) => {
      try {
        const [downloadOption, listenOptions] = filterOptions(option);
        const downloadTask = downloadFile({
          ...(downloadOption || {}),
          success: resolve,
          fail: reject,
        });
        autoListenWithTask(downloadTask, listenOptions as ListenOptions);
      } catch (e) {
        reject(generateGeneralFail('downloadFile', e.message));
      }
    });
  };

  return { upload, download };
}

export default useFile;

function filterOptions(options: UploadOption | DownloadOption) {
  const { progress, headersReceive, afterSend, ...normalOption } = options;

  const listenOptions = {
    progress,
    headersReceive,
    afterSend,
  };

  return [normalOption, listenOptions] as const;
}

function autoListenWithTask(task: Task, listenOptions: ListenOptions) {
  const { afterSend, ...eventListener } = listenOptions;
  afterSend?.(task);
  Object.entries(eventListener)
    .filter((v) => v[1])
    .forEach(([eventName, eventHandler]) => task?.[eventName]?.(eventHandler));
}
