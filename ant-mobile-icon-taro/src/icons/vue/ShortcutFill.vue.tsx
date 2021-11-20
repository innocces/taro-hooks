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
  name: 'ShortcutFill',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M624 672c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48h-48v48zM720 352c0-26.5-21.5-48-48-48s-48 21.5-48 48v48h48c26.5 0 48-21.5 48-48z' fill='<%= color %>' /><path d='M928 64H96c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM672 560c61.9 0 112 50.1 112 112s-50.1 112-112 112-112-50.1-112-112v-48h-96v48c0 61.9-50.1 112-112 112s-112-50.1-112-112 50.1-112 112-112h48v-96h-48c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112v48h96v-48c0-61.9 50.1-112 112-112s112 50.1 112 112-50.1 112-112 112h-48v96h48z' fill='<%= color %>' /><path d='M464 464h96v96h-96zM352 304c-26.5 0-48 21.5-48 48s21.5 48 48 48h48v-48c0-26.5-21.5-48-48-48zM304 672c0 26.5 21.5 48 48 48s48-21.5 48-48v-48h-48c-26.5 0-48 21.5-48 48z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
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