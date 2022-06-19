<template>
  <view class="index">
    <text>{{ msg }}</text>
    <nut-collapse
      v-model:active="activeCollapseItem"
      :accordion="true"
      icon="down-arrow"
    >
      <nut-collapse-item
        v-for="item in collapseData"
        :key="item.groupName"
        :title="item.groupName"
        :name="item.groupName"
        class="demo-collapse-item"
      >
        <nut-cell
          v-for="menuItem in item.menu"
          :key="menuItem.name"
          :title="menuItem.name"
          @click="handleNavigate(menuItem.path)"
        ></nut-cell>
      </nut-collapse-item>
    </nut-collapse>
  </view>
</template>

<script lang="ts">
import { navigateTo } from '@tarojs/taro';
import { ref } from 'vue';
// @ts-ignore
import { generateIndexMenu } from '@root/public/constant';

export default {
  setup() {
    const msg = ref('Hello world');
    const collapseData = generateIndexMenu(true);
    const activeCollapseItem = ref('');

    const handleNavigate = (path: string) => {
      navigateTo({ url: path });
    };

    return {
      msg,
      activeCollapseItem,
      collapseData,
      handleNavigate,
      test: console.log,
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
</style>
