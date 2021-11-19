
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'SketchCircleFill',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M582.3 625.6l147.9-166.3h-63.4zM672.3 423.3h62.5l-92.1-115.1zM397.6 459.3L512 684.5l114.4-225.2z' fill='<%= color %>' /><path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m286.7 380.2L515.8 762.3c-1 1.1-2.4 1.7-3.8 1.7s-2.8-0.6-3.8-1.7L225.3 444.2c-1.7-1.9-1.7-4.7-0.2-6.6L365.6 262c1-1.2 2.4-1.9 4-1.9h284.6c1.6 0 3 0.7 4 1.9l140.5 175.6c1.7 1.9 1.7 4.7 0 6.6z' fill='<%= color %>' /><path d='M608.2 423.3L512 326.1l-96.2 97.2zM420.3 301.1l-23.1 89.8 88.8-89.8zM603.7 301.1H538l88.8 89.8zM381.3 308.2l-92.1 115.1h62.5zM293.8 459.3l147.9 166.3-84.5-166.3z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
        const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
        return `url("data:image/svg+xml, ${escape}") no-repeat`;
      };

      return (
        // @ts-ignore
        <View onClick={onClick} class="adm-icon" {...restProps} style={{...style, background: background(), width: renderSize(), height: renderSize()}}></View>
      )
    }
  }
})