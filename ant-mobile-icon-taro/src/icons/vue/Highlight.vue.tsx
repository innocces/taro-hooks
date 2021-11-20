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
  name: 'Highlight',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M957.6 507.4L603.2 158.2c-3.1-3.1-8.1-3.1-11.2 0L353.3 393.4c-3.1 3.1-3.2 8.2-0.1 11.3l0.1 0.1 40 39.4-117.2 115.3c-3.1 3.1-3.2 8.2-0.1 11.3l0.1 0.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-0.8 5.6-2.3l76.1-75.6 40.4 39.8c3.1 3.1 8.1 3.1 11.2 0l117.1-115.6 40.1 39.5c3.1 3.1 8.1 3.1 11.2 0l238.7-235.2c3.4-3 3.4-8 0.3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1z m154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
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