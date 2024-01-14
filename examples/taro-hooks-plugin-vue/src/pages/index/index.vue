<template>
  <view class="demo-index">
    <nut-row type="flex" justify="center" align="center">
      <nut-badge value="beta:Serro" top="20">
        <image
          class="demo-index-icon"
          :src="require('@root/public/image/hook.png')"
          mode="widthFix"
        />
      </nut-badge>
    </nut-row>
    <nut-collapse
      v-model:active="activeCollapseItem"
      :accordion="true"
      icon="down-arrow"
    >
      <nut-collapse-item
        v-for="item in collapseData"
        :key="item.groupName"
        :title="item.groupName"
        :sub-title="item.tip"
        :name="item.groupName"
        class="demo-collapse-item"
      >
        <nut-cell
          v-for="menuItem in item.menu"
          :key="menuItem.name"
          :title="menuItem.name"
          @click="handleNavigate(menuItem)"
        ></nut-cell>
      </nut-collapse-item>
    </nut-collapse>
  </view>
</template>

<script lang="ts">
import { useRouter, useModal, useEnv, useLayoutEffect } from 'taro-hooks';
import { ref } from 'vue';
import { ENV_TYPE } from '@tarojs/taro';
import {
  generateIndexMenu,
  PRODUCTIONDISABLEPANEL,
  // @ts-ignore
} from '@root/public/constant';
// @ts-ignore
import type { MenuItem } from '@root/public/constant';

let checkParams: any = undefined;

export default {
  setup() {
    const collapseData = generateIndexMenu(true);
    const env = useEnv();
    const activeCollapseItem = ref('');
    const [pageInfo, { navigate, switchTab, preload }] = useRouter();
    const show = useModal({
      title: 'Taro-Hooks',
      content: '由于个人账号限制. 暂无法使用线上示例!',
      showCancel: false,
      confirmText: '知道了',
    });

    const handleNavigate = ({ path, name, id, onlyMini = false }: MenuItem) => {
      const navigateAction = path.includes('TabBar') ? switchTab : navigate;
      if (
        // @ts-ignore
        process.env.NODE_ENV === 'production' &&
        PRODUCTIONDISABLEPANEL.includes(id)
      ) {
        show();
        return;
      }
      const payload = { title: name, onlyMini: Number(onlyMini) };
      preload(payload);
      navigateAction(path);
    };

    const handleCheckNavigate = () => {
      const checkQueryField = ['type', 'hook', 'sub', 'function'];
      const pageParams = pageInfo.params;
      // 包含前两个即可
      if (checkQueryField.slice(0, 2).every((v) => pageParams[v])) {
        // 对比两个是否一致
        const isEqual = Object.keys(pageParams).reduce((result, key) => {
          if (!result) {
            return result;
          }

          return pageParams[key] === checkParams?.[key];
        }, true);

        if (!isEqual) {
          const path = checkQueryField.reduce(
            (forwardPath, key) => [forwardPath, `/${pageParams[key]}`].join(''),
            '/pages',
          );
          checkParams = pageParams;
          navigate(path);
        }
      }
    };

    useLayoutEffect(() => {
      // @ts-ignore
      if (env === ENV_TYPE['WEB'] && CF !== '0') {
        handleCheckNavigate();
      }
    }, [pageInfo]);

    return {
      activeCollapseItem,
      collapseData,
      handleNavigate,
    };
  },
};
</script>

<style>
.demo-collapse-item .collapse-item {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.demo-collapse-item .collapse-content {
  padding: 0 26px !important;
}

.demo-collapse-item .nut-cell {
  /* box-shadow: none; */
  padding: 13px 0;
}

.demo-collapse-item .nut-cell:first-child {
  margin-top: 0;
}

.demo-collapse-item .nut-cell:last-child {
  margin-bottom: 0;
}

.demo-index-icon {
  width: 200px;
}
</style>
