
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'Viewer',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M956 686.5l-0.1-0.1-0.1-0.1C911.7 593 843.4 545 752.5 545s-159.2 48.1-203.4 141.3v0.1c-5.4 11.5-5.4 24.9 0 36.4C593.3 816 661.6 864 752.5 864s159.2-48.1 203.4-141.3c5.4-11.5 5.4-24.8 0.1-36.2zM752.5 800c-62.1 0-107.4-30-141.1-95.5C645 639 690.4 609 752.5 609c62.1 0 107.4 30 141.1 95.5C860 770 814.6 800 752.5 800z' fill='<%= color %>' /><path d='M753 705m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z' fill='<%= color %>' /><path d='M136 232h704v253h72V192c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h352v-72H136V232z' fill='<%= color %>' /><path d='M724.9 338.1l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L493 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L251.3 543.4c-3.1 3.1-3.1 8.2 0 11.3l36.8 36.8c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.2-3.1 3.2-8.2 0-11.3z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
        const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
        return `url("data:image/svg+xml, ${escape}") no-repeat`;
      };

      return (
        // @ts-ignore
        <view onClick={onClick} class="adm-icon" {...restProps} style={{...style, background: background(), width: renderSize(), height: renderSize()}}></view>
      )
    }
  }
})
