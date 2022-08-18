import Compressor from '@taro-hooks/compressorjs';
import { generateGeneralFail } from '../../utils/tool';

import type { CompressImage, CompressSuccessResult, SaveImage } from '../';

export const downloadImage = async (filePath: string) => {
  const responese = await fetch(filePath);
  const blob = await responese.blob();
  return blob;
};

export const generateBlobUrl = (blob: Blob): string => {
  const blobInstance = new Blob([blob], {
    type: 'application/octet-stream',
  });
  const href = window.URL.createObjectURL(blobInstance);
  return href;
};

export const saveImageToPhotosAlbum: SaveImage = async ({
  filePath,
  success,
  fail,
}) => {
  const failResult = generateGeneralFail('saveImageToPhotosAlbum');
  if (filePath) {
    try {
      const blob = await downloadImage(filePath);
      const href = generateBlobUrl(blob);
      const downloadElement = document.createElement('a');
      downloadElement.href = href;
      downloadElement.download = filePath.split('/').reverse()[0];
      document.body.appendChild(downloadElement);
      downloadElement.click();
      document.body.removeChild(downloadElement);
      window.URL.revokeObjectURL(href);
      const result = { errMsg: 'saveImageToPhotosAlbum: success' };
      success?.(result);
      return result;
    } catch (e) {
      const withMessageFailResult = generateGeneralFail(
        'saveImageToPhotosAlbum',
        e.message,
      );
      fail?.(withMessageFailResult);
      return withMessageFailResult;
    }
  }
  fail?.(failResult);
  return failResult;
};

/**
 * compressImage for h5
 * @param src source path
 * @param quality compress quality
 * @returns
 */
export const compressImage: CompressImage = async ({
  src,
  quality = 80,
  success,
  fail,
}) => {
  try {
    const fileBlob = await downloadImage(src);
    const compress = new Promise<CompressSuccessResult>((resolve, reject) => {
      new Compressor(fileBlob, {
        quality: quality / 100,
        success: (res) => {
          const tempFilePath = generateBlobUrl(res);
          const successResult = {
            tempFilePath,
            errMsg: 'compressImage:ok',
          };
          success?.(successResult);
          resolve(successResult);
        },
        error: (e) => {
          const failResult = generateGeneralFail(
            'compressImage',
            e.message,
          ) as CompressSuccessResult;
          fail?.(failResult);
          reject(failResult);
        },
      });
    });
    return await compress;
  } catch (e) {
    return generateGeneralFail(
      'compressImage',
      e.errMsg || e.message,
    ) as CompressSuccessResult;
  }
};
