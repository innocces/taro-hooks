
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
  name: 'Piechart',
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
        const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M864 518H506V160c0-4.4-3.6-8-8-8h-26c-54 0-106.4 10.6-155.7 31.4-47.6 20.1-90.4 49-127.1 85.7-36.7 36.7-65.6 79.5-85.7 127.1C82.6 445.6 72 498 72 552c0 54 10.6 106.4 31.4 155.7 20.1 47.6 49 90.4 85.7 127.1 36.7 36.7 79.5 65.6 127.1 85.7C365.6 941.4 418 952 472 952c54 0 106.4-10.6 155.7-31.4 47.6-20.1 90.4-49 127.1-85.7 36.7-36.7 65.6-79.5 85.7-127.1C861.4 658.4 872 606 872 552v-26c0-4.4-3.6-8-8-8zM705.7 787.8c-62.6 62.1-147.1 96.6-235.3 96.2-88.1-0.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552c0-88.7 34.5-172.1 97.2-234.8 54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8z' fill='<%= color %>' /><path d='M952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6-65.8-65.7-152.8-106.5-245.2-115L560.7 72c-4.7-0.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6z m-332.2-58.2V147.6c62.6 13.1 120.7 44.2 166.4 89.8 45.7 45.6 77 103.6 90 166.1l-256.4 0.7z' fill='<%= color %>' /></svg>", { size: renderSize(), color: hex2rgb(color || '') });
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
