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
  name: 'IE',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M852.6 367.6c16.3-36.9 32.1-90.7 32.1-131.8 0-109.1-119.5-147.6-314.5-57.9-161.4-10.8-316.8 110.5-355.6 279.7 46.3-52.3 117.4-123.4 183-151.7C316.1 378.3 246.7 470 194 565.6c-31.1 56.9-66 148.8-66 217.5 0 147.9 139.3 129.8 270.4 63 47.1 23.1 99.8 23.4 152.5 23.4 145.7 0 276.4-81.4 325.2-219H694.9c-78.8 132.9-295.2 79.5-295.2-71.2h493.2c9.6-65.4-2.5-143.6-40.3-211.7zM224.8 648.3c26.6 76.7 80.6 143.8 150.4 185-133.1 73.4-259.9 43.6-150.4-185z m174-163.3c3-82.7 75.4-142.3 156-142.3 80.1 0 153 59.6 156 142.3h-312z m276.8-281.4c32.1-15.4 72.8-33 108.8-33 47.1 0 81.4 32.6 81.4 80.6 0 30-11.1 73.5-21.9 101.8-39.3-63.5-98.9-122.4-168.3-149.4z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
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