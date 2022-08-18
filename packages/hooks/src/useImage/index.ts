import Taro, {
  previewImage,
  previewMedia as taroPreviewMedia,
  getImageInfo,
  chooseImage,
  chooseMessageFile,
  editImage,
  useTaroState,
} from '@tarojs/taro';
import usePromise from '../usePromise';

import type {
  PromiseAction,
  PromiseParamsAction,
  PromiseOptionalAction,
  UnionResult,
  ExcludeOption,
} from '../type';
import { saveImageToPhotosAlbum, compressImage } from './utils/index';

export type CompressImage = typeof compressImage;

export type CompressSuccessResult = Taro.compressImage.SuccessCallbackResult;

export type CompressResult = UnionResult<CompressSuccessResult>;

export type Compress = PromiseParamsAction<
  (src: string, quality?: number) => void,
  CompressSuccessResult
>;

export type SaveImage = typeof saveImageToPhotosAlbum;

export type ChooseOption = ExcludeOption<Taro.chooseImage.Option>;

export type Choose = PromiseParamsAction<
  (
    option?: ChooseOption | ExcludeOption<Taro.chooseMessageFile.Option>,
    messageFile?: boolean,
  ) => void,
  | Taro.chooseImage.SuccessCallbackResult
  | Taro.chooseMessageFile.SuccessCallbackResult
>;

export type Edit = PromiseAction<string, Taro.editImage.SuccessCallbackResult>;

export type Save = PromiseAction<string>;

export type Preview = PromiseAction<ExcludeOption<Taro.previewImage.Option>>;

export type PreviewMedia = PromiseAction<
  ExcludeOption<Taro.previewMedia.Option>
>;

export type Get = PromiseAction<
  string,
  Taro.getImageInfo.SuccessCallbackResult
>;

export type FileInfo = Omit<Taro.chooseImage.SuccessCallbackResult, 'errMsg'>;

const INIT: FileInfo = {
  tempFilePaths: [],
  tempFiles: [],
};

function useImage(options?: ChooseOption): [
  FileInfo,
  {
    choose: Choose;
    preview: Preview;
    previewMedia: PreviewMedia;
    save: Save;
    get: Get;
    compress: Compress;
    edit: Edit;
  },
] {
  const [fileInfo, setFileInfo] = useTaroState<FileInfo>(INIT);

  const chooseAsync = usePromise<
    ChooseOption,
    Taro.chooseImage.SuccessCallbackResult
  >(chooseImage);
  const chooseMessageAsync = usePromise<
    ExcludeOption<Taro.chooseMessageFile.Option>,
    Taro.chooseMessageFile.SuccessCallbackResult
  >(chooseMessageFile);

  const choose: Choose = (chooseOption = {}, messageFile) => {
    if (messageFile) {
      return chooseMessageAsync({ count: 1, ...chooseOption });
    }

    return chooseAsync({ ...(options ?? {}), ...chooseOption }).then((res) => {
      const { tempFilePaths, tempFiles } = res;
      setFileInfo({ tempFilePaths, tempFiles });
      return res;
    });
  };

  const compressAsync = usePromise<
    ExcludeOption<Taro.compressImage.Option>,
    CompressResult
  >(compressImage);

  const compress: Compress = (src, quality = 80) => {
    return compressAsync({ src, quality });
  };

  const getAsync = usePromise<
    ExcludeOption<Taro.getImageInfo.Option>,
    Taro.getImageInfo.SuccessCallbackResult
  >(getImageInfo);

  const get: Get = (src) => {
    return getAsync({ src });
  };

  const saveAsync = usePromise<
    ExcludeOption<Taro.saveImageToPhotosAlbum.Option>
  >(saveImageToPhotosAlbum);

  const save: Save = (filePath) => {
    return saveAsync({ filePath });
  };

  const preview: Preview =
    usePromise<ExcludeOption<Taro.previewImage.Option>>(previewImage);
  const previewMedia: PreviewMedia =
    usePromise<ExcludeOption<Taro.previewMedia.Option>>(taroPreviewMedia);

  const editAsync = usePromise<
    ExcludeOption<Taro.editImage.Option>,
    Taro.editImage.SuccessCallbackResult
  >(editImage);
  const edit: Edit = (src) => {
    return editAsync({ src });
  };

  return [
    fileInfo,
    {
      choose,
      compress,
      get,
      preview,
      previewMedia,
      save,
      edit,
    },
  ];
}

export default useImage;
