<script setup lang="ts">
import { ref } from 'vue'
import type { Clip } from '../data/films'
import { usePlayer } from '../composables/usePlayer'

const props = defineProps<{
  clip: Clip
  workName: string
  index?: number
}>()

const { open } = usePlayer()

const videoEl = ref<HTMLVideoElement | null>(null)

function playPreview() {
  videoEl.value?.play().catch(() => {})
}

function stopPreview() {
  const video = videoEl.value
  if (!video) return
  video.pause()
  video.currentTime = 0
}

function openFull() {
  open(props.clip.src, `${props.workName} — ${props.clip.label}`)
}
</script>

<template>
  <figure class="clip">
    <button
      class="clip__frame"
      :class="{ 'clip__frame--portrait': clip.portrait }"
      type="button"
      :aria-label="`Play ${clip.label} full size`"
      @click="openFull"
    >
      <video
        ref="videoEl"
        class="clip__video"
        :src="clip.src"
        :poster="clip.poster"
        muted
        loop
        playsinline
        preload="metadata"
        @mouseenter="playPreview"
        @mouseleave="stopPreview"
      ></video>

      <span class="clip__duration">{{ clip.duration }}</span>
      <span class="clip__hint" aria-hidden="true">▶ play with sound</span>
    </button>

    <figcaption class="clip__caption">
      <span v-if="index" class="clip__num">{{ String(index).padStart(2, '0') }}</span>
      <span class="clip__label">{{ clip.label }}</span>
      <span class="clip__len">{{ clip.duration }}</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.clip {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
}

.clip__frame {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  padding: 0;
  overflow: hidden;
  background: var(--stripe-b);
  border: 1px solid var(--surface-line);
  border-radius: var(--radius-m);
  cursor: pointer;
  transition:
    border-color 0.35s,
    transform 0.35s var(--ease-out),
    box-shadow 0.35s var(--ease-out);
}

/* 1920x2160 source — matching the frame keeps the whole shot visible. */
.clip__frame--portrait {
  aspect-ratio: 8 / 9;
}

.clip__frame:hover {
  border-color: var(--line-focus);
  transform: scale(1.025) translateY(-4px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
}

.clip__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.clip__duration {
  position: absolute;
  right: 11px;
  bottom: 11px;
  z-index: 1;
  padding: 3px 7px;
  background: rgba(9, 9, 10, 0.75);
  border-radius: 2px;
  font: 600 9px/1 var(--font-mono);
  color: rgba(242, 241, 238, 0.85);
  pointer-events: none;
}

.clip__hint {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: grid;
  place-items: center;
  font: 600 10px/1 var(--font-mono);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--fg);
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.7);
  opacity: 0;
  transform: scale(0.92);
  transition:
    opacity 0.35s var(--ease-out),
    transform 0.35s var(--ease-out);
  pointer-events: none;
}

.clip__frame:hover .clip__hint,
.clip__frame:focus-visible .clip__hint {
  opacity: 1;
  transform: scale(1);
}

.clip__caption {
  display: flex;
  align-items: baseline;
  gap: 10px;
  min-width: 0;
}

.clip__num {
  font: 600 10px/1 var(--font-mono);
  color: var(--fg-faint);
}

.clip__label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--fg-dim);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.clip__len {
  margin-left: auto;
  font: 500 10px/1 var(--font-mono);
  letter-spacing: 0.08em;
  color: var(--fg-hint);
}
</style>
