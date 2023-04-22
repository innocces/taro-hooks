import React from 'react';
import { useRef, useEffect, useState } from '@taro-hooks/core';
import { escapeState } from '@taro-hooks/shared';
import { useLocation, useModal } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button, Cell } from '@taroify/core';

export default () => {
  const [locationInfo, setLocationInfo] = useState({});
  const updateStatus = useRef<boolean>(false);
  const listenStatus = useRef<boolean>(false);

  const show = useModal({
    title: 'useLocation',
    showCancel: false,
  });

  const [location, { get, choose, choosePOI, open, toggleUpdate, on, off }] =
    useLocation({
      isHighAccuracy: true,
      altitude: true,
      type: 'gcj02',
    });

  useEffect(() => {
    setLocationInfo(escapeState(location));
  }, [location]);

  const handleChoose = async () => {
    try {
      const chooseInfo = await choose();
      setLocationInfo(chooseInfo);
      show({ content: JSON.stringify(chooseInfo) });
    } catch (e) {
      show({ content: '获取位置失败' });
    }
  };

  const handleChoosePOI = async () => {
    try {
      const chooseInfo = await choosePOI();
      show({ content: JSON.stringify(chooseInfo) });
    } catch (e) {
      show({ content: '获取POI失败' });
    }
  };

  const handleOpen = () => {
    open({
      latitude: escapeState(locationInfo).latitude,
      longitude: escapeState(locationInfo).longitude,
    });
  };

  const handleToggle = async () => {
    try {
      await toggleUpdate(!updateStatus.current);
      show({
        content: (updateStatus.current ? '关闭' : '打开') + '前台接收成功',
      });
      updateStatus.current = !updateStatus.current;
    } catch (e) {
      show({
        content: (updateStatus.current ? '关闭' : '打开') + '前台接收失败',
      });
    }
  };

  const listener = (result) => {
    setLocationInfo(result);
  };

  const handleToggleListener = async () => {
    try {
      const method = listenStatus.current ? off : on;
      await method(listener);
      show({ content: (listenStatus.current ? '关闭' : '打开') + '监听成功' });
      listenStatus.current = !listenStatus.current;
    } catch (e) {
      show({ content: (listenStatus.current ? '关闭' : '打开') + '监听失败' });
    }
  };

  return (
    <DemoContent>
      <Cell.Group title="位置信息">
        {Object.entries(locationInfo ?? {}).map(([key, value]) => (
          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
        ))}
      </Cell.Group>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => get()}
        shape="square"
      >
        获取当前位置
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleChoose()}
        shape="square"
      >
        选择地理位置
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleChoosePOI()}
        shape="square"
      >
        选择POI位置
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleOpen()}
        shape="square"
      >
        查看位置
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleToggle()}
        shape="square"
      >
        切换前台接受地理
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => handleToggleListener()}
        shape="square"
      >
        切换监听地理位置
      </Button>
    </DemoContent>
  );
};
