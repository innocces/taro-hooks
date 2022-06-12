import React, { useMemo } from 'react';

import DocCardList from '@theme/DocCardList';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type LocationSettingItem = {
  path: string;
  id: string;
};

interface ILocationSetting {
  docs: LocationSettingItem[];
  path: string;
}

export const PATH2LABEL = {
  basic: '基础',
  device: '设备',
  env: '环境判断',
  feedback: '操作反馈',
  layout: '布局',
  media: '媒体',
  network: '网络',
  wechat: '小程序',
};

const HooksCardList = () => {
  const { globalData } = useDocusaurusContext();

  const sidebarItems = useMemo(() => {
    const {
      // @ts-ignore
      versions: [locationSetting] = [],
    } = globalData?.['docusaurus-plugin-content-docs']?.hooks ?? {};
    // generate sidebar
    const { docs } = locationSetting as ILocationSetting;
    console.log(docs);
    return (
      docs
        ?.filter?.((item) => item.id.startsWith('/category'))
        ?.map?.(({ path, id }) => ({
          id,
          href: path,
          type: 'link',
          label: PATH2LABEL[id.replace('/category/', '')],
        })) ?? []
    );
  }, [globalData]);

  // @ts-ignore
  return <DocCardList items={sidebarItems} />;
};

export default HooksCardList;
