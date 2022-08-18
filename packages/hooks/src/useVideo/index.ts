import Taro, {
  chooseVideo,
  chooseMedia as taroChooseMedia,
  compressVideo,
  createVideoContext,
  getVideoInfo,
  openVideoEditor,
  useTaroRef,
} from '@tarojs/taro';
import type { VideoContext } from '@tarojs/taro';
import type {
  ExcludeOption,
  PromiseOptionalAction,
  PromiseAction,
} from '../type';

import usePromise from '../usePromise';
import { saveVideoToPhotosAlbum } from './utils/index';

export type ChooseOption = ExcludeOption<Taro.chooseVideo.Option>;

export type Choose = PromiseOptionalAction<
  ChooseOption,
  Taro.chooseVideo.SuccessCallbackResult
>;

export type ChooseMedia = PromiseOptionalAction<
  ExcludeOption<Taro.chooseMedia.Option>,
  Taro.chooseMedia.SuccessCallbackResult
>;

export type Save = PromiseAction<string>;

export type Get = PromiseAction<
  string,
  Taro.getVideoInfo.SuccessCallbackResult
>;

export type Open = PromiseAction<
  string,
  Taro.openVideoEditor.SuccessCallbackResult
>;

export type Compress = PromiseAction<
  ExcludeOption<Taro.compressVideo.Option>,
  Taro.compressVideo.SuccessCallbackResult
>;

export type Option = {
  component?: TaroGeneral.IAnyObject;
} & ChooseOption;

function useVideo(
  id: string,
  option?: Option,
): [
  VideoContext,
  {
    choose: Choose;
    chooseMedia: ChooseMedia;
    get: Get;
    open: Open;
    save: Save;
    compress: Compress;
  },
] {
  const videoContext = useTaroRef<VideoContext>(
    createVideoContext(id, option?.component),
  );

  const chooseAsync = usePromise<
    ExcludeOption<ChooseOption>,
    Taro.chooseVideo.SuccessCallbackResult
  >(chooseVideo);
  const choose: Choose = (chooseOption = {}) => {
    const { component, ...restOption } = option ?? {};
    return chooseAsync({ ...chooseOption, ...restOption });
  };

  const chooseMedia: ChooseMedia = usePromise<
    ExcludeOption<Taro.chooseMedia.Option>,
    Taro.chooseMedia.SuccessCallbackResult
  >(taroChooseMedia);

  const openAsync = usePromise<
    ExcludeOption<Taro.openVideoEditor.Option>,
    Taro.openVideoEditor.SuccessCallbackResult
  >(openVideoEditor);
  const open = (filePath) => {
    return openAsync({ filePath });
  };

  const saveAsync = usePromise<
    ExcludeOption<Taro.saveVideoToPhotosAlbum.Option>
  >(saveVideoToPhotosAlbum);
  const save: Save = (filePath) => {
    return saveAsync({ filePath });
  };

  const compress: Compress = usePromise<
    ExcludeOption<Taro.compressVideo.Option>,
    Taro.compressVideo.SuccessCallbackResult
  >(compressVideo);

  const getAsync = usePromise<
    ExcludeOption<Taro.getVideoInfo.Option>,
    Taro.getVideoInfo.SuccessCallbackResult
  >(getVideoInfo);
  const get: Get = (src) => {
    return getAsync({ src });
  };

  return [
    videoContext.current,
    {
      choose,
      chooseMedia,
      open,
      save,
      compress,
      get,
    },
  ];
}

export default useVideo;
