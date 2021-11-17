import { FunctionalComponent } from 'vue';

export interface ITaroIconType extends FunctionalComponent {
  displayName: string;
}

export const taroIconProps = {
  size: Number,
  color: String,
  usePX: Boolean,
  style: Object,
};
