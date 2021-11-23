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
  name: 'FileWord',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326z m1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494z' fill='<%= color %>' /><path d='M528.1 472h-32.2c-5.5 0-10.3 3.7-11.6 9.1L434.6 680l-46.1-198.7c-1.3-5.4-6.1-9.3-11.7-9.3h-35.4c-1.1 0-2.1 0.1-3.1 0.4-6.4 1.7-10.2 8.3-8.5 14.7l74.2 276c1.4 5.2 6.2 8.9 11.6 8.9h32c5.4 0 10.2-3.6 11.6-8.9l52.8-197 52.8 197c1.4 5.2 6.2 8.9 11.6 8.9h31.8c5.4 0 10.2-3.6 11.6-8.9l74.4-276c0.3-1 0.4-2.1 0.4-3.1 0-6.6-5.4-12-12-12H647c-5.6 0-10.4 3.9-11.7 9.3l-45.8 199.1-49.8-199.3c-1.3-5.4-6.1-9.1-11.6-9.1z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
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