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
  name: 'AntCloud',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M378.9 738c-3.1 0-6.1-0.5-8.8-1.5l4.4 30.7h26.3l-15.5-29.9c-2.1 0.5-4.2 0.7-6.4 0.7z' fill='<%= color %>' /><path d='M799.9 446.8c-12.6 0-24.8 1.5-36.5 4.2-21.4-38.4-62.3-64.3-109.3-64.3-6.9 0-13.6 0.6-20.2 1.6-35.4-77.4-113.4-131.1-203.9-131.1-112.3 0-205.3 82.6-221.6 190.4C127.3 455.5 64 523.8 64 607c0 88.4 71.6 160.1 160 160.2h50l13.2-27.6c-26.2-8.3-43.3-29-39.1-48.8 4.6-21.6 32.8-33.9 63.1-27.5 22.9 4.9 40.4 19.1 45.5 35.1 4.6-7.4 12.8-12.4 22.1-12.4h0.2c-0.8-3.2-1.2-6.5-1.2-9.9 0-20.1 14.8-36.7 34.1-39.6v-25.4c0-4.4 3.6-8 8-8s8 3.6 8 8v26.3c4.6 1.2 8.8 3.2 12.6 5.8l19.5-21.4c3-3.3 8-3.5 11.3-0.5 3.3 3 3.5 8 0.5 11.3l-20 22-0.2 0.2c3.9 6.2 6.2 13.5 6.2 21.4 0 22.1-17.9 40-40 40-4.6 0-9-0.8-13.1-2.2-0.4 5.6-2.6 10.7-6 14.8l20 38.4H804v-0.1c86.5-2.2 156-73 156-160.1 0-88.5-71.7-160.2-160.1-160.2z' fill='<%= color %>' /><path d='M338.2 737.2l-4.3 30h24.4l-5.9-41.5c-3.5 4.6-8.3 8.5-14.2 11.5z' fill='<%= color %>' /><path d='M845.5 305m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z' fill='<%= color %>' /><path d='M755.8 366.3m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z' fill='<%= color %>' /><path d='M303.4 742.9l-11.6 24.3h26l3.5-24.7c-5.7 0.8-11.7 1-17.9 0.4z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
        const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
        return `url("data:image/svg+xml, ${escape}") no-repeat`;
      };

      return (
        // @ts-ignore
        <Text {...restProps} className="adm-icon" onClick={onClick} style={{...style, background: background(), width: renderSize(), height: renderSize()}}></Text>
      )
    }
  }
})