import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui';

import { Current, navigateTo } from '@tarojs/taro';
import { useModal, useNavigationBar } from 'taro-hooks';

import {
  List,
  APIListItem,
  ChildrenList,
  APIChildrenItem,
} from '../../constant';

import './index.less';

export interface IPanelProps {}

const Panel = ({}: IPanelProps) => {
  const [panelInfo, setPanelInfo] = useState<APIListItem>();
  const [panelItemInfo, setPanelItemInfo] = useState<APIChildrenItem[]>();
  const [show] = useModal({ mask: true, title: '温馨提示', showCancel: false });
  const [_, { setTitle }] = useNavigationBar({ title: 'Taro-hooks' });

  useEffect(() => {
    const { id } = Current.router?.params || {};
    if (id) {
      const currentPanelInfo = List.find((v) => v.id.toLowerCase() === id);
      const currentPanelItemInfo = ChildrenList[id];
      setPanelInfo(currentPanelInfo);
      setPanelItemInfo(currentPanelItemInfo);
    }
  }, []);

  useEffect(() => {
    if (panelInfo && panelInfo.title) {
      setTitle(panelInfo.title);
    }
  }, [panelInfo, setTitle]);

  const handleItemAction = useCallback(
    (id: string) => {
      if (BUILD_MODE && id === 'useVideo') {
        show({
          content: '由于个人账号限制, 无法在线预览useVideo. 可至github查看',
        });
      } else {
        navigateTo({
          url: `/pages/${id}/index`,
        });
      }
    },
    [show],
  );

  if (!panelInfo) return <View />;

  return (
    <View className="page">
      <View className="panel-header">
        <AtIcon
          prefixClass="iconfont"
          value={panelInfo.icon}
          className="panel-header__icon"
        />
        <View className="panel-header__title">{panelInfo.title}</View>
      </View>
      <View className="panel-body">
        <View className="component-list">
          {panelItemInfo &&
            panelItemInfo.map(({ id, name }) => (
              <View
                className="component-list__item"
                key={id}
                onClick={() => handleItemAction(id)}
              >
                <Text className="name">{name}</Text>
                <AtIcon value="chevron-right" />
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

export default Panel;
