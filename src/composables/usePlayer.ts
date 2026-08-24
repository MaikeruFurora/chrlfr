import { readonly, ref } from 'vue'

export interface PlayerSource {
  src: string
  title: string
}

const current = ref<PlayerSource | null>(null)

export function usePlayer() {
  function open(src: string, title: string) {
    current.value = { src, title }
  }

  function close() {
    current.value = null
  }

  return {
    current: readonly(current),
    open,
    close,
  }
}
