
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'EUROCircleFill',
  props: taroIconProps,
  emits: ['click'],
  setup(props, { emit }) {
    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return () => {
      const {
        size = 18,
        style = {},
        color,
        usePX,
        ...restProps
      } = props;

      const renderSize = () => {
        return usePX ? pxTransform(size!).replace(/rpx|rem/ig, 'px') : pxTransform(size!);
      }

      const background = () => {
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m63.5 375.8c4.4 0 8 3.6 8 8V475c0 4.4-3.6 8-8 8h-136c-0.3 4.4-0.3 9.1-0.3 13.8v36h136.2c4.4 0 8 3.6 8 8V568c0 4.4-3.6 8-8 8H444.9c15.3 62 61.3 98.6 129.8 98.6 19.9 0 37.1-1.2 51.8-4.1 4.9-1 9.5 2.8 9.5 7.8v42.8c0 3.8-2.7 7-6.4 7.8-15.9 3.4-34.3 5.1-55.3 5.1-109.8 0-183-58.8-200.2-158H344c-4.4 0-8-3.6-8-8v-27.2c0-4.4 3.6-8 8-8h26.1v-36.9c0-4.4 0-8.8 0.3-12.8H344c-4.4 0-8-3.6-8-8v-27.2c0-4.4 3.6-8 8-8h31.7c19.7-94.2 92-149.9 198.6-149.9 20.9 0 39.4 1.9 55.3 5.4 3.7 0.8 6.3 4 6.3 7.8V346h0.1c0 5.1-4.6 8.8-9.6 7.8-14.7-2.9-31.8-4.4-51.7-4.4-65.4 0-110.4 33.5-127.6 90.4h128.4z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
        const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
        return `url("data:image/svg+xml, ${escape}") no-repeat`;
      };

      return (
        // @ts-ignore
        <Text onClick={onClick} class="adm-icon" {...restProps} style={{...style, background: background(), width: renderSize(), height: renderSize()}}></Text>
      )
    }
  }
})
