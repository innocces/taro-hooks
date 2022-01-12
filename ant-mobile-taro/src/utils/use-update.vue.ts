import { ref } from 'vue'

export default function useUpdate() {
  const state = ref({})

  return () => (state.value = {})
}
