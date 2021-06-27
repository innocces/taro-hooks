import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui';

import { Current, navigateTo } from '@tarojs/taro';

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

  useEffect(() => {
    const { id } = Current.router.params;
    if (id) {
      const currentPanelInfo = List.find((v) => v.id.toLowerCase() === id);
      const currentPanelItemInfo = ChildrenList[id];
      setPanelInfo(currentPanelInfo);
      setPanelItemInfo(currentPanelItemInfo);
    }
  }, []);

  const handleItemAction = useCallback((id: string) => {
    navigateTo({
      url: `/pages/${id}/index`,
    });
  }, []);

  if (!panelInfo) return <View />;

  return (
    <View className="page">
      <View className="panel-header">
        <AtIcon value={panelInfo.icon} className="panel-header__icon" />
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
