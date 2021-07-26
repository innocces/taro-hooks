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
import { useCallback, useEffect, useRef, useState } from 'react';
import { useEnv } from '..';
import { saveImageForH5 } from './utils';

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

export type saveImageToPhotosAlbumAction = (
  filePath: string,
) => Promise<General.CallbackResult>;

export type IFileInfo = Partial<
  Pick<chooseImage.SuccessCallbackResult, 'tempFilePaths' | 'tempFiles'>
>;

export type IOptions = ChooseImageOption;

export interface IAction {
  choose: ChooseImageAction;
  preview: PreviewImageAction;
  save: saveImageToPhotosAlbumAction;
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

  const saveImageToPhotosAlbumAsync = useCallback<saveImageToPhotosAlbumAction>(
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

  return [
    fileInfo,
    {
      choose: chooseImageAsync,
      preview: previewImageAsync,
      save: saveImageToPhotosAlbumAsync,
    },
  ];
}

export default useImage;
