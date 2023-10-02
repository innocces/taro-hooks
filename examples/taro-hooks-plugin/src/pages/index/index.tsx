import React from 'react';
import { useState } from '@taro-hooks/core';
import { View, Image } from '@tarojs/components';
import { Collapse, Cell, Flex, Badge } from '@taroify/core';
// @ts-ignore
import { generateIndexMenu } from '@root/public/constant';
// @ts-ignore
import Icon from '@root/public/image/hook.png';
// @ts-ignore
import type { MenuItem } from '@root/public/constant';

const Index = () => {
  const [activeCollapseItem, setActiveCollapseItem] = useState();
  const [, { navigate, switchTab, preload }] = useRouter();

  const handleNavigate = ({ path, name, onlyMini = false }: MenuItem) => {
    const navigateAction = path.includes('TabBar') ? switchTab : navigate;
    const payload = { title: name, onlyMini: Number(onlyMini) };
    preload(payload);
    navigateAction(path, payload);
  };

  return (
    <View className="index">
      <Flex align="center" justify="center">
        <Badge
          content="beta:Serro"
          position="bottom-right"
          style={{ '--badge-background-color': 'var(--primary-color)' }}
        >
          <Image className="demo-index-icon" src={Icon} mode="widthFix" />
        </Badge>
      </Flex>
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
                onClick={() =>
                  handleNavigate({ name, path, onlyMini, id: name })
                }
              ></Cell>
            ))}
          </Collapse.Item>
        ))}
      </Collapse>
    </View>
  );
};

export default Index;
