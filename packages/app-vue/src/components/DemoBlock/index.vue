<template>
  <view class="demo-lock">
    <view class="title">{{ title }}</view>
    <view class="content" :style="style"><slot /></view>
  </view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import './index.less';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    padding: {
      type: String,
      default: '12px 12px',
    },
    background: {
      type: String,
      default: '#ffffff',
    },
    border: String,
  },
  setup(props) {
    const { padding, background, border } = props;
    return {
      style: `padding: ${padding}; background: ${background}; ${
        border ? 'border: ' + border : ''
      }`,
      title: props.title,
    };
  },
});
</script>
