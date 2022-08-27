import { createCameraContext, useTaroRef } from '@tarojs/taro';
import usePromise from '../usePromise';

import type { CameraContext, CameraFrameListener } from '@tarojs/taro';
import type {
  ExcludeOption,
  PromiseAction,
  PromiseOptionalAction,
} from '../type';

export type Zoom = PromiseAction<
  number,
  CameraContext.StartRecordSuccessCallbackResult
>;

export type Start = PromiseOptionalAction<
  ExcludeOption<CameraContext.StartRecordOption>
>;

export type Stop = PromiseOptionalAction<
  boolean,
  CameraContext.StopRecordSuccessCallbackResult
>;

export type Take = PromiseOptionalAction<
  ExcludeOption<CameraContext.TakePhotoOption>,
  CameraContext.TakePhotoSuccessCallbackResult
>;

export type Listener = (
  callback: CameraContext.OnCameraFrameCallback,
) => CameraFrameListener;

function useCamera(): [
  CameraContext,
  {
    zoom: Zoom;
    start: Start;
    stop: Stop;
    take: Take;
    listener: Listener;
  },
] {
  const cameraContext = useTaroRef<CameraContext>(createCameraContext());

  const zoomAsync = usePromise<
    ExcludeOption<CameraContext.SetZoomOption>,
    CameraContext.StartRecordSuccessCallbackResult
  >(cameraContext.current.setZoom);

  const zoom: Zoom = (zoomNumber) => {
    return zoomAsync({ zoom: zoomNumber });
  };

  const start: Start = usePromise<
    ExcludeOption<CameraContext.StartRecordOption>
  >(cameraContext.current.startRecord);

  const stopAsync = usePromise<
    ExcludeOption<CameraContext.StopRecordOption>,
    CameraContext.StopRecordSuccessCallbackResult
  >(cameraContext.current.stopRecord);
  const stop: Stop = (compressed) => {
    return stopAsync({ compressed });
  };

  const take: Take = usePromise<
    ExcludeOption<CameraContext.TakePhotoOption>,
    CameraContext.TakePhotoSuccessCallbackResult
  >(cameraContext.current.takePhoto);

  const listener: Listener = (callback) => {
    return cameraContext.current.onCameraFrame(callback);
  };

  return [
    cameraContext.current,
    {
      zoom,
      start,
      stop,
      take,
      listener,
    },
  ];
}

export default useCamera;
