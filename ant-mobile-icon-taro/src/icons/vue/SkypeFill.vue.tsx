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
  name: 'SkypeFill',
  props: taroIconProps,
  emits: ['click'],
  setup(props, { emit, attrs }) {
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
        return usePX ? (size + 'px') : pxTransform(size!);
      }

      const background = () => {
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5 0-51-10-100.5-29.7-147-19-45-46.3-85.4-81-120.1-34.7-34.7-75.1-61.9-120.1-80.9-46.6-19.7-96-29.7-147-29.7-24 0-48.1 2.3-71.5 6.8-32.3-17.1-68.5-26.2-105.1-26.2-59.7 0-115.9 23.3-158.1 65.5-42.2 42.2-65.5 98.4-65.5 158.1 0 38 9.8 75.4 28.1 108.4-3.7 21.4-5.7 43.3-5.7 65.1 0 51 10 100.5 29.7 147 19 45 46.2 85.4 80.9 120.1 34.7 34.7 75.1 61.9 120.1 80.9 46.6 19.7 96 29.7 147 29.7 22.2 0 44.4-2 66.2-5.9 33.5 18.9 71.3 29 110 29 59.7 0 115.9-23.2 158.1-65.5 42.3-42.2 65.5-98.4 65.5-158.1 0.1-38-9.7-75.5-28.2-108.7z m-370 162.9c-134.2 0-194.2-66-194.2-115.4 0-25.4 18.7-43.1 44.5-43.1 57.4 0 42.6 82.5 149.7 82.5 54.9 0 85.2-29.8 85.2-60.3 0-18.3-9-38.7-45.2-47.6l-119.4-29.8c-96.1-24.1-113.6-76.1-113.6-124.9 0-101.4 95.5-139.5 185.2-139.5 82.6 0 180 45.7 180 106.5 0 26.1-22.6 41.2-48.4 41.2-49 0-40-67.8-138.7-67.8-49 0-76.1 22.2-76.1 53.9s38.7 41.8 72.3 49.5l88.4 19.6c96.8 21.6 121.3 78.1 121.3 131.3 0 82.3-63.3 143.9-191 143.9z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
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