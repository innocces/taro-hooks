import { ref, onMounted, onUnmounted } from 'vue'

export default function useTimeout(
  fn: () => void,
  delay: number | null | undefined
) {
  const timer = ref<NodeJS.Timeout>()

  onMounted(() => {
    if (delay === undefined || delay === null) return
    timer.value = setTimeout(function () {
      fn()
      clearTimeout(timer.value!)
    }, delay)
  })

  onUnmounted(() => {
    if (timer.value) {
      clearTimeout(timer.value)
    }
  })
}
