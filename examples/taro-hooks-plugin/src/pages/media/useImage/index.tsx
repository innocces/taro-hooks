import React from 'react';
import { useState } from '@taro-hooks/core';
import { escapeState } from '@taro-hooks/shared';
import { useToast, useImage } from 'taro-hooks';
import { Image } from '@tarojs/components';
import DemoContent from '@src/components/DemoContent';
import { Button, Swiper, Cell } from '@taroify/core';

import './index.less';

export default () => {
  const { show } = useToast({ title: 'useImage', mask: true });
  const [imageInfo, setImageInfo] =
    useState<Taro.getImageInfo.SuccessCallbackResult>();
  const [
    fileInfo,
    { choose, compress, get, preview, previewMedia, save, edit },
  ] = useImage({
    count: 15,
  });

  const handleGetFileInfo = async () => {
    try {
      const info = await get(escapeState(fileInfo)?.tempFilePaths?.[0]);
      setImageInfo(info);
    } catch (e) {
      show({
        title: '获取信息失败',
        icon: 'error',
      });
    }
  };

  const handleCompress = async () => {
    try {
      const info = await compress(escapeState(fileInfo)?.tempFilePaths?.[0]);
      setImageInfo(info);
    } catch (e) {
      show({
        title: '压缩失败',
        icon: 'error',
      });
    }
  };

  return (
    <DemoContent>
      <Swiper className="demo-swiper gap" height={200}>
        {(fileInfo?.tempFilePaths ?? []).map((url) => (
          <Swiper.Item key={url}>
            <Image className="demo-swiper-item" src={url} />
          </Swiper.Item>
        ))}
      </Swiper>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => choose()}
        shape="square"
      >
        选择图片
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => preview({ urls: fileInfo?.tempFilePaths })}
        shape="square"
      >
        预览照片
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => save(fileInfo?.tempFilePaths?.[0])}
        shape="square"
      >
        保存照片
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleGetFileInfo()}
        shape="square"
      >
        获取图片信息
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => choose({}, true)}
        shape="square"
      >
        获取会话文件(仅小程序)
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => edit(fileInfo?.tempFilePaths?.[0])}
        shape="square"
      >
        编辑图片(仅小程序)
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() =>
          previewMedia({ sources: [{ url: fileInfo?.tempFilePaths?.[0] }] })
        }
        shape="square"
      >
        预览媒体(仅小程序)
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleCompress()}
        shape="square"
      >
        压缩图片
      </Button>
      <Cell.Group title="图片信息">
        {Object.entries(imageInfo ?? {}).map(([key, value]) => (
          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
        ))}
      </Cell.Group>
    </DemoContent>
  );
};
