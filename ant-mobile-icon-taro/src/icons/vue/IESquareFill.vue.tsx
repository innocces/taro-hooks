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
  name: 'IESquareFill',
  props: taroIconProps,
  emits: ['click'],
  setup(props, { emit, attrs }) {
    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return () => {
      const {
        size,
        style,
        color,
        usePX,
        ...restProps
      } = props;

      const renderSize = () => {
        return typeof size === 'number' ? usePX ? (size + 'px') : pxTransform(size!) : size;
      }

      const background = () => {
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM765.9 556.9H437.1c0 100.4 144.3 136 196.8 47.4h120.8c-32.6 91.7-119.7 146-216.8 146-35.1 0-70.3-0.1-101.7-15.6-87.4 44.5-180.3 56.6-180.3-42 0-45.8 23.2-107.1 44-145C335 484 381.3 422.8 435.6 374.5c-43.7 18.9-91.1 66.3-122 101.2 25.9-112.8 129.5-193.6 237.1-186.5 130-59.8 209.7-34.1 209.7 38.6 0 27.4-10.6 63.3-21.4 87.9 25.2 45.5 33.3 97.6 26.9 141.2z' fill='<%= color %>' /><path d='M693.6 284.4c-24 0-51.1 11.7-72.6 22 46.3 18 86 57.3 112.3 99.6 7.1-18.9 14.6-47.9 14.6-67.9 0-32-22.8-53.7-54.3-53.7zM540.5 399.1c-53.7 0-102 39.7-104 94.9h208c-2-55.1-50.6-94.9-104-94.9zM320.6 602.9c-73 152.4 11.5 172.2 100.3 123.3-46.6-27.5-82.6-72.2-100.3-123.3z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
        const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
        return `url("data:image/svg+xml, ${escape}") no-repeat`;
      };

      return (
        // @ts-ignore
        <Text {...restProps} {...attrs} className={`adm-icon ${restProps.className} ${attrs.class}`} onClick={onClick} style={{...style, background: background(), width: renderSize(), height: renderSize()}}></Text>
      )
    }
  }
})