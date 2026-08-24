<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { usePlayer } from '../composables/usePlayer'

const { current, close } = usePlayer()

const closeBtn = ref<HTMLButtonElement | null>(null)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

watch(current, async (value) => {
  if (value) {
    document.addEventListener('keydown', onKeydown)
    document.body.style.overflow = 'hidden'
    await nextTick()
    closeBtn.value?.focus()
  } else {
    document.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="current"
      class="player"
      role="dialog"
      aria-modal="true"
      :aria-label="`Video player — ${current.title}`"
    >
      <div class="player__backdrop" @click="close"></div>

      <figure class="player__panel">
        <figcaption class="player__bar">
          <span class="player__title">{{ current.title }}</span>
          <button
            ref="closeBtn"
            class="player__close"
            type="button"
            aria-label="Close player"
            @click="close"
          >
            ×
          </button>
        </figcaption>

        <video
          :key="current.src"
          class="player__video"
          :src="current.src"
          controls
          autoplay
          playsinline
        ></video>
      </figure>
    </div>
  </Teleport>
</template>

<style scoped>
.player {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: clamp(14px, 3vw, 32px);
}

.player__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(8, 8, 9, 0.93);
}

.player__panel {
  position: relative;
  width: min(1200px, 100%);
}

.player__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 10px;
}

.player__title {
  font: 600 10px/1.5 var(--font-mono);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--fg-mute);
}

.player__close {
  flex: none;
  width: 34px;
  height: 34px;
  padding: 0;
  background: rgba(242, 241, 238, 0.08);
  color: var(--fg);
  border: 1px solid var(--line-strong);
  border-radius: 50%;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition:
    background-color 0.25s,
    border-color 0.25s;
}

.player__close:hover {
  background: rgba(242, 241, 238, 0.16);
  border-color: var(--fg);
}

.player__video {
  display: block;
  width: 100%;
  max-height: 78vh;
  background: #000;
  border: 1px solid var(--surface-line);
  border-radius: var(--radius-m);
}
</style>
