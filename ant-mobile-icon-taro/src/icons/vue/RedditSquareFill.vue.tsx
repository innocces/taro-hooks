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
  name: 'RedditSquareFill',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M296 440c-19.9 0-36 16.1-36 36 0 15.1 9.4 28.1 22.6 33.4 11.5-18.1 27.1-34.5 45.9-48.8-5.7-12.2-18.2-20.6-32.5-20.6zM585.7 624.9c-14.9 11.7-44.3 24.3-73.7 24.3s-58.9-12.6-73.7-24.3c-9.3-7.3-22.7-5.7-30 3.6-7.3 9.3-5.7 22.7 3.6 30 25.7 20.4 65 33.5 100.1 33.5 35.1 0 74.4-13.1 100.2-33.5 9.3-7.3 10.9-20.8 3.6-30-7.3-9.3-20.8-10.9-30.1-3.6z' fill='<%= color %>' /><path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM757 541.9c4.6 13.5 7 27.6 7 42.1 0 99.4-112.8 180-252 180s-252-80.6-252-180c0-14.5 2.4-28.6 7-42.1-25.3-11.2-43-36.4-43-65.9 0-39.8 32.2-72 72-72 27.1 0 50.6 14.9 62.9 37 36.2-19.8 80.2-32.8 128.1-36.1l58.4-131.1c4.3-9.8 15.2-14.8 25.5-11.8l91.6 26.5c9.1-16.9 27-28.4 47.6-28.4 29.8 0 54 24.2 54 54s-24.2 54-54 54c-23.5 0-43.5-15.1-50.9-36.1L577 308.3l-43 96.5c49.1 3 94.2 16.1 131.2 36.3 12.3-22.1 35.8-37 62.9-37 39.8 0 72 32.2 72 72-0.1 29.3-17.8 54.6-43.1 65.8z' fill='<%= color %>' /><path d='M620 548m-36 0a36 36 0 1 0 72 0 36 36 0 1 0-72 0Z' fill='<%= color %>' /><path d='M728 440c-14.3 0-26.8 8.4-32.5 20.6 18.8 14.3 34.4 30.7 45.9 48.8 13.2-5.3 22.6-18.3 22.6-33.4 0-19.9-16.1-36-36-36z' fill='<%= color %>' /><path d='M404 548m-36 0a36 36 0 1 0 72 0 36 36 0 1 0-72 0Z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
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