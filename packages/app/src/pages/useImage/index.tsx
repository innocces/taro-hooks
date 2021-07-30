import React, { useCallback, useState } from 'react';
import { AtButton, AtFloatLayout, AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';
import { Swiper, SwiperItem, Image } from '@tarojs/components';

import { useImage, useEnv, useToast } from 'taro-hooks';
import { ENV_TYPE } from '@tarojs/taro';

import './index.less';

export default () => {
  const [show] = useToast({ mask: true });
  const [open, changeOpen] = useState<boolean>(false);
  const [imageInfo, setImageInfo] = useState({});
  const env = useEnv();
  const [
    fileInfo,
    { choose, chooseMessageFile, preview, save, getInfo, compress },
  ] = useImage({
    count: 15,
  });

  const getImageInfo = useCallback(
    async (src: string) => {
      const info = await getInfo(src);
      setImageInfo(info);
      changeOpen(true);
    },
    [getInfo],
  );

  const getMessageFileInfo = useCallback(async () => {
    const info = await chooseMessageFile(1);
    setImageInfo(info.tempFiles[0]);
    changeOpen(true);
  }, [chooseMessageFile]);

  const compressInfo = useCallback(
    async (src: string) => {
      const info = await compress(src);
      setImageInfo(info);
      changeOpen(true);
    },
    [compress],
  );

  const saveInfo = useCallback(() => {
    save(fileInfo.tempFilePaths[0])
      .then(() => {
        show({
          title: '保存成功',
        });
      })
      .catch(() => {
        show({
          title: '保存失败',
        });
      });
  }, [save, fileInfo, show]);

  return (
    <>
      <DocPage title="useImage 图片" panelTitle="useImage">
        <Swiper className="taro-hooks-swiper" autoplay>
          {(fileInfo.tempFilePaths || []).map((v: string) => (
            <SwiperItem key={v}>
              <Image className="taro-hooks-image" mode="aspectFit" src={v} />
            </SwiperItem>
          ))}
        </Swiper>
        <AtButton onClick={() => choose()}>选择图片</AtButton>
        <AtButton
          disabled={!fileInfo.tempFilePaths}
          className="gap"
          onClick={() => preview({ urls: fileInfo.tempFilePaths })}
        >
          预览照片
        </AtButton>
        <AtButton disabled={!fileInfo.tempFilePaths} onClick={saveInfo}>
          保存图片
        </AtButton>
        <AtButton
          className="gap"
          disabled={!fileInfo.tempFilePaths}
          onClick={() => getImageInfo(fileInfo.tempFilePaths[0])}
        >
          获取图片信息
        </AtButton>
        <AtButton
          disabled={env !== ENV_TYPE.WEAPP}
          onClick={getMessageFileInfo}
        >
          获取会话文件(仅小程序)
        </AtButton>
        <AtButton
          className="gap"
          disabled={!fileInfo.tempFilePaths}
          onClick={() => compressInfo(fileInfo.tempFilePaths[0])}
        >
          压缩图片
        </AtButton>
        <AtFloatLayout isOpened={open} onClose={() => changeOpen(false)}>
          <AtList>
            {Object.entries(imageInfo).map(([key, value]) => (
              <AtListItem key={key} title={key} note={String(value)} />
            ))}
          </AtList>
        </AtFloatLayout>
      </DocPage>
    </>
  );
};
