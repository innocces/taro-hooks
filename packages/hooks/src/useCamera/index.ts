import {
  General,
  ENV_TYPE,
  createCameraContext,
  CameraContext,
  CameraFrameListener,
} from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import useEnv from '../useEnv';

export type ICameraContext = CameraContext | undefined;

export type CreateContextAction = () => ICameraContext;

export type IStartRecordAction = (
  callback?: CameraContext.StartRecordTimeoutCallback,
) => Promise<General.CallbackResult>;

export type IStopRecordAction = () => Promise<
  General.CallbackResult | CameraContext.StopRecordSuccessCallbackResult
>;

export type ITakePhotoAction = (
  option: Partial<Pick<CameraContext.TakePhotoOption, 'quality'>>,
) => Promise<CameraContext.TakePhotoSuccessCallbackResult>;

export type IOnCameraFrameAction = (
  callback: CameraContext.OnCameraFrameCallback,
) => CameraFrameListener | undefined;

export interface IAction {
  create: CreateContextAction;
  startRecord: IStartRecordAction;
  stopRecord: IStopRecordAction;
  takePhoto: ITakePhotoAction;
  onCameraFrame: IOnCameraFrameAction;
}

function useCamera(): [ICameraContext, IAction] {
  const [cameraContext, setCameraContext] = useState<ICameraContext>();
  const env = useEnv();

  useEffect(() => {
    if (env) {
      create();
    }
  }, [env]);

  const create = useCallback<CreateContextAction>(() => {
    if (env !== ENV_TYPE.WEB) {
      const context = createCameraContext();
      setCameraContext(context);
      return context;
    }
  }, [env]);

  const startRecord = useCallback<IStartRecordAction>(
    (callback) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEB && cameraContext) {
          try {
            cameraContext.startRecord({
              success: resolve,
              fail: reject,
              ...(callback ? { timeoutCallback: callback } : {}),
            });
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [env, cameraContext],
  );

  const stopRecord = useCallback<IStopRecordAction>(() => {
    return new Promise((resolve, reject) => {
      if (env !== ENV_TYPE.WEB && cameraContext) {
        try {
          cameraContext.stopRecord({
            success: resolve,
            fail: reject,
          });
        } catch (e) {
          reject(e);
        }
      }
    });
  }, [env, cameraContext]);

  const takePhoto = useCallback<ITakePhotoAction>(
    (option = {}) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEB && cameraContext) {
          try {
            cameraContext.takePhoto({
              ...option,
              success: resolve,
              fail: reject,
            });
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [env, cameraContext],
  );

  const onCameraFrame = useCallback<IOnCameraFrameAction>(
    (callback) => {
      if (env !== ENV_TYPE.WEB && cameraContext && callback) {
        try {
          const listener = cameraContext.onCameraFrame(callback);
          listener.start();
          return listener;
        } catch (e) {
          console.log(e);
        }
      }
    },
    [env, cameraContext],
  );

  return [
    cameraContext,
    {
      create,
      startRecord,
      stopRecord,
      takePhoto,
      onCameraFrame,
    },
  ];
}

export default useCamera;
