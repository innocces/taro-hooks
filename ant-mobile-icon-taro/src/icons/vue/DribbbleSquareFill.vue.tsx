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
  name: 'DribbbleSquareFill',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M498.6 432c-40.8-72.5-84.7-133.4-91.2-142.3-68.8 32.5-120.3 95.9-136.2 172.2 11 0.2 112.4 0.7 227.4-29.9zM565.1 453.8c5.7 11.7 11.2 23.6 16.3 35.6 1.8 4.2 3.6 8.4 5.3 12.7 81.8-10.3 163.2 6.2 171.3 7.9-0.5-58.1-21.3-111.4-55.5-153.3-5.3 7.1-46.5 60-137.4 97.1z' fill='<%= color %>' /><path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM512 800c-158.8 0-288-129.2-288-288s129.2-288 288-288 288 129.2 288 288-129.2 288-288 288z' fill='<%= color %>' /><path d='M601.7 540.9c32.2 88.4 45.3 160.4 47.8 175.4 55.2-37.3 94.5-96.4 105.4-164.9-8.4-2.6-76.1-22.8-153.2-10.5zM529.2 514.5c3.2-1 6.4-2 9.7-2.9-6.2-14-12.9-28-19.9-41.7-122.8 36.8-242.1 35.2-252.8 35-0.1 2.5-0.1 5-0.1 7.5 0 63.2 23.9 120.9 63.2 164.5 5.5-9.6 73-121.4 199.9-162.4zM675.1 328.3c-43.4-38.5-100.6-62-163.1-62-19.4 0-38.8 2.3-57.7 6.9 6.8 9.1 51.5 69.9 91.8 144 87.5-32.8 124.5-82.6 129-88.9zM554 552.8c-138.7 48.3-188.6 144.6-193 153.6 41.7 32.5 94.1 51.9 151 51.9 34.1 0 66.6-6.9 96.1-19.5-3.7-21.6-17.9-96.8-52.5-186.6l-1.6 0.6z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
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