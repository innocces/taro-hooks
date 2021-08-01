import {
  chooseVideo,
  saveVideoToPhotosAlbum,
  createVideoContext,
  VideoContext,
  General,
  ENV_TYPE,
} from '@tarojs/taro';
import { useCallback, useState } from 'react';
import { useEnv } from '..';

import { saveImageForH5 } from '../useImage/utils';

export type IOptions = Pick<
  chooseVideo.Option,
  'camera' | 'sourceType' | 'maxDuration'
>;

export type IVideoContext = VideoContext | undefined;

export type ChooseVideoAction = (
  option?: IOptions,
) => Promise<chooseVideo.SuccessCallbackResult>;

export type CreateContextAction = (
  id: string,
  component?: Record<string, any>,
) => IVideoContext;

export type SaveVideoAction = (
  filePath: string,
) => Promise<General.CallbackResult>;

export interface IAction {
  choose: ChooseVideoAction;
  create: CreateContextAction;
  save: SaveVideoAction;
}

function useVideo(options?: IOptions): [IVideoContext, IAction] {
  const [videoContext, setVideoContext] = useState<IVideoContext>();
  const env = useEnv();

  const chooseVideoAsync = useCallback<ChooseVideoAction>(
    (option) => {
      const payload = Object.assign({}, options || {}, option);
      return new Promise((resolve, reject) => {
        if (env === ENV_TYPE.WEB) {
          reject({ errMsg: 'not support for web' });
        } else {
          chooseVideo({
            ...payload,
            success: resolve,
            fail: reject,
          }).catch(reject);
        }
      });
    },
    [env],
  );

  const createVideoContextAsync = useCallback<CreateContextAction>(
    (id, component) => {
      if (env !== ENV_TYPE.WEB) {
        const videoContext = createVideoContext(id, component);
        if (videoContext) setVideoContext(videoContext);
        return videoContext;
      }
    },
    [env],
  );

  const saveVideoAsync = useCallback<SaveVideoAction>(
    (filePath) => {
      return new Promise((resolve, reject) => {
        if (!filePath) {
          reject('please input a filepath to save');
        } else {
          if (env === ENV_TYPE.WEB) {
            saveImageForH5(filePath)
              .then((saveResult) => {
                resolve({
                  errMsg: saveResult ? '保存成功' : '保存失败',
                });
              })
              .catch(reject);
          } else {
            saveVideoToPhotosAlbum({
              filePath,
              success: resolve,
              fail: reject,
            }).catch(reject);
          }
        }
      });
    },
    [env],
  );

  return [
    videoContext,
    {
      choose: chooseVideoAsync,
      create: createVideoContextAsync,
      save: saveVideoAsync,
    },
  ];
}

export default useVideo;
