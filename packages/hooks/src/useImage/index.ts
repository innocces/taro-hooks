import {
  saveImageToPhotosAlbum,
  previewImage,
  getImageInfo,
  compressImage,
  chooseImage,
  chooseMessageFile,
  General,
  ENV_TYPE,
} from '@tarojs/taro';
import { useCallback, useState } from 'react';
import Compressor from 'compressorjs';
import { useEnv } from '..';
import { saveImageForH5, downloadImage, generateBlobUrl } from './utils';

export type ChooseImageOption = Partial<
  Pick<chooseImage.Option, 'count' | 'sizeType' | 'sourceType'>
>;

export type PreviewImageOption = Pick<previewImage.Option, 'current' | 'urls'>;

export type ChooseImageAction = (
  option: ChooseImageOption,
) => Promise<chooseImage.SuccessCallbackResult>;

export type PreviewImageAction = (
  option: PreviewImageOption,
) => Promise<General.CallbackResult>;

export type SaveImageToPhotosAlbumAction = (
  filePath: string,
) => Promise<General.CallbackResult>;

export type GetImageInfoAction = (
  src: string,
) => Promise<getImageInfo.SuccessCallbackResult>;

export type ChooseMessageFileAction = (
  count: number,
  type?: Pick<chooseMessageFile.Option, 'type'>,
  extend?: Pick<chooseMessageFile.Option, 'extension'>,
) => Promise<chooseMessageFile.SuccessCallbackResult>;

export type CompressImageAction = (
  src: string,
  quality?: number,
) => Promise<compressImage.SuccessCallbackResult>;

export type IFileInfo = Partial<
  Pick<chooseImage.SuccessCallbackResult, 'tempFilePaths' | 'tempFiles'>
>;

export type IOptions = ChooseImageOption;

export interface IAction {
  choose: ChooseImageAction;
  chooseMessageFile: ChooseMessageFileAction;
  preview: PreviewImageAction;
  save: SaveImageToPhotosAlbumAction;
  getInfo: GetImageInfoAction;
  compress: CompressImageAction;
}

function useImage(options: IOptions): [IFileInfo, IAction] {
  const [fileInfo, setFileInfo] = useState<IFileInfo>({});
  const env = useEnv();

  const chooseImageAsync = useCallback<ChooseImageAction>((option) => {
    const { count, sizeType, sourceType } = options;
    const finalOptions = Object.assign(
      {},
      Object.fromEntries(
        [
          ['count', count],
          ['sizeType', sizeType],
          ['sourceType', sourceType],
        ].filter((v) => v[1]) || [],
      ),
      option || {},
    );
    return new Promise((resolve, reject) => {
      try {
        chooseImage({
          ...finalOptions,
          success: (res) => {
            console.log(res);
            const { errMsg, ...fileInfo } = res;
            setFileInfo(fileInfo);
            resolve(res);
          },
          fail: reject,
        }).catch(reject);
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  const previewImageAsync = useCallback<PreviewImageAction>((option) => {
    return new Promise((resolve, reject) => {
      try {
        previewImage({
          ...option,
          success: resolve,
          fail: reject,
        }).catch(reject);
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  const saveImageToPhotosAlbumAsync = useCallback<SaveImageToPhotosAlbumAction>(
    (filePath) => {
      return new Promise(async (resolve, reject) => {
        if (!filePath) {
          reject('you must provide filePath');
        } else {
          try {
            if (env === ENV_TYPE.WEB) {
              const result = await saveImageForH5(filePath);
              if (result) {
                resolve({
                  errMsg: 'save success',
                });
              } else {
                reject('save fail');
              }
            } else {
              saveImageToPhotosAlbum({
                filePath,
                success: resolve,
                fail: reject,
              }).catch(reject);
            }
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [env],
  );

  const getImageInfoAsync = useCallback<GetImageInfoAction>((src) => {
    return new Promise((resolve, reject) => {
      if (!src) {
        reject('please enter a valid path');
      } else {
        try {
          getImageInfo({
            src,
            success: resolve,
            fail: reject,
          }).catch(reject);
        } catch (e) {
          reject(e);
        }
      }
    });
  }, []);

  const chooseMessageFileAsync = useCallback<ChooseMessageFileAction>(
    (count, type, extension) => {
      return new Promise((resolve, reject) => {
        if (!count || env !== ENV_TYPE.WEAPP) {
          reject('you must provide count');
        } else {
          try {
            const payload = Object.fromEntries(
              [
                ['type', type],
                ['extension', extension],
              ].filter((v) => v[1]) || [],
            );
            chooseMessageFile({
              count,
              ...payload,
              success: resolve,
              fail: reject,
            });
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [env],
  );

  const compressImageAsync = useCallback<CompressImageAction>(
    (src, quality) => {
      return new Promise(async (resolve, reject) => {
        if (!src) {
          reject('you must provide src');
        }
        try {
          if (env === ENV_TYPE.WEB) {
            const blob = await downloadImage(src);
            new Compressor(blob, {
              quality: (quality || 80) / 100,
              success: (res) => {
                const tempFilePath = generateBlobUrl(res);
                resolve({
                  tempFilePath,
                  errMsg: 'compressImage:ok',
                });
              },
              error: reject,
            });
          } else {
            compressImage({
              src,
              ...(quality ? { quality } : {}),
              success: resolve,
              fail: reject,
            }).catch(reject);
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    [env],
  );

  return [
    fileInfo,
    {
      choose: chooseImageAsync,
      chooseMessageFile: chooseMessageFileAsync,
      preview: previewImageAsync,
      save: saveImageToPhotosAlbumAsync,
      getInfo: getImageInfoAsync,
      compress: compressImageAsync,
    },
  ];
}

export default useImage;
