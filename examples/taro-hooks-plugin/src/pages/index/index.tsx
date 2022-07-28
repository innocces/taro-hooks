import React from 'react';
import { navigateTo, useTaroState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Collapse, Cell } from '@taroify/core';
// @ts-ignore
import { generateIndexMenu } from '@root/public/constant';
// @ts-ignore
import type { MenuItem } from '@root/public/constant';

const Index = () => {
  const [activeCollapseItem, setActiveCollapseItem] = useTaroState(0);

  const handleNavigate = ({ path, name, onlyMini = false }: MenuItem) => {
    navigateTo({ url: `${path}?title=${name}&onlyMini=${Number(onlyMini)}` });
  };

  return (
    <View className="index">
      <Collapse
        accordion
        value={activeCollapseItem}
        onChange={setActiveCollapseItem}
      >
        {generateIndexMenu().map(({ groupName, menu, tip }) => (
          <Collapse.Item title={groupName} key={groupName} extra={tip}>
            {menu.map(({ name, path, onlyMini }) => (
              <Cell
                title={name}
                key={name}
                clickable
                onClick={() => handleNavigate({ name, path, onlyMini })}
              ></Cell>
            ))}
          </Collapse.Item>
        ))}
      </Collapse>
    </View>
  );
};

export default Index;
