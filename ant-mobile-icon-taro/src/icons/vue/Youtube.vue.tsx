
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
  name: 'Youtube',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M960 509.2c0-2.2 0-4.7-0.1-7.6-0.1-8.1-0.3-17.2-0.5-26.9-0.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8-12.8-47.9-50.4-85.6-98.3-98.5-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-0.2-26.8-0.3-38.4-0.4H497.3c-11.6 0.1-24.5 0.2-38.4 0.4-39.7 0.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2-47.8 12.8-85.5 50.5-98.3 98.5-6.1 22.6-10.4 52.7-13.4 88.8-2.2 26.2-3.6 54-4.4 81.9-0.3 9.7-0.4 18.8-0.5 26.9 0 2.9-0.1 5.4-0.1 7.6v5.6c0 2.2 0 4.7 0.1 7.6 0.1 8.1 0.3 17.2 0.5 26.9 0.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9 0.2 26.8 0.3 38.4 0.4H526.7c11.6-0.1 24.5-0.2 38.4-0.4 39.7-0.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9 0.3-9.7 0.4-18.8 0.5-26.9 0-2.9 0.1-5.4 0.1-7.6V512v-2.8z m-72 5.2c0 2.1 0 4.4-0.1 7.1-0.1 7.8-0.3 16.4-0.5 25.7-0.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7 0.2-26.4 0.3-37.8 0.3h-28.6c-11.4-0.1-24.1-0.2-37.8-0.3-39.1-0.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-0.3-9.3-0.4-18-0.5-25.7 0-2.7-0.1-5.1-0.1-7.1v-3-1.8c0-2.1 0-4.4 0.1-7.1 0.1-7.8 0.3-16.4 0.5-25.7 0.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-0.2 26.4-0.3 37.8-0.3h28.6c11.4 0.1 24.1 0.2 37.8 0.3 39.1 0.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9 0.3 9.3 0.4 18 0.5 25.7 0 2.7 0.1 5.1 0.1 7.1v4.8z' fill='<%= color %>' /><path d='M423 646l232-135-232-133z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
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
