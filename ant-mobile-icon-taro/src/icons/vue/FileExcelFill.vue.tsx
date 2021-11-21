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
  name: 'FileExcelFill',
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
        return usePX ? (size + 'px') : pxTransform(size!);
      }

      const background = () => {
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM575.341 477.839l-61.216 102.307-61.839-102.351a12 12 0 0 0-10.27-5.795h-38.437a12 12 0 0 0-6.406 1.853c-5.604 3.538-7.279 10.949-3.741 16.553l82.333 130.422-83.449 132.787a12 12 0 0 0-1.84 6.385c0 6.627 5.373 12 12 12h34.466a12 12 0 0 0 10.208-5.692l62.707-101.474 62.29 101.445A12 12 0 0 0 582.375 772h37.486a12 12 0 0 0 6.484-1.903c5.577-3.58 7.195-11.004 3.614-16.58l-83.831-130.551 85.296-132.47a12 12 0 0 0 1.91-6.496c0-6.627-5.372-12-12-12h-35.695a12 12 0 0 0-10.297 5.839z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
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