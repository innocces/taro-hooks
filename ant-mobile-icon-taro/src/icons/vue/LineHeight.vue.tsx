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
  name: 'LineHeight',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M648 160H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V168c0-4.4-3.6-8-8-8zM920.8 706H856V318h64.8c6 0 9.4-7 5.7-11.7L825.7 178.7c-2.9-3.7-8.5-3.7-11.3 0L713.6 306.3c-3.7 4.7-0.4 11.7 5.7 11.7H784v388h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.8-4.7 0.4-11.7-5.6-11.7z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
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