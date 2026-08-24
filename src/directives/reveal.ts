import type { Directive } from 'vue'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer?.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px' },
  )
  return observer
}

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      el.classList.add('is-revealed')
      return
    }

    if (binding.value) {
      el.style.transitionDelay = `${binding.value}ms`
    }

    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
