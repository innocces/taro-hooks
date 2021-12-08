import { ref, Ref } from 'vue'
import useUpdate from './use-update.vue'

type Options<T> = {
  value?: Ref<T>
  defaultValue: Ref<T>
  onChange?: (v: T) => void
}

export function usePropsValue<T>(options: Options<T>) {
  const { value, defaultValue, onChange } = options
  console.log(value, defaultValue, onChange)

  const update = useUpdate()
  const stateRef = ref<any>(value?.value ?? defaultValue?.value)
  if (value !== undefined) {
    stateRef.value = value.value
  }

  const setState = (v: T) => {
    console.log('setState', v)
    if (value === undefined) {
      stateRef.value = v
      update()
    }
    onChange?.(v)
  }
  return [stateRef, setState] as const
}
