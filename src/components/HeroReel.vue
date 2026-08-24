<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { hero } from '../data/site'
import { totalClipCount } from '../data/films'
import { usePlayer } from '../composables/usePlayer'

const { open } = usePlayer()

const videoEl = ref<HTMLVideoElement | null>(null)
const muted = ref(true)
let gestureHooked = false

function applyMute(value: boolean) {
  const video = videoEl.value
  if (!video) return
  muted.value = value
  video.muted = value
  if (!value && video.paused) {
    video.play().catch(() => {})
  }
}

function unhookGesture() {
  document.removeEventListener('pointerdown', tryUnmuteOnGesture)
  document.removeEventListener('keydown', tryUnmuteOnGesture)
  gestureHooked = false
}

function tryUnmuteOnGesture(event: Event) {
  if ((event.target as HTMLElement | null)?.closest?.('.hero__sound')) return
  unhookGesture()
  applyMute(false)
}

function hookGesture() {
  if (gestureHooked) return
  gestureHooked = true
  document.addEventListener('pointerdown', tryUnmuteOnGesture)
  document.addEventListener('keydown', tryUnmuteOnGesture)
}

onMounted(async () => {
  const video = videoEl.value
  if (!video) return

  video.muted = true
  try {
    await video.play()
  } catch {
    return
  }

  try {
    video.muted = false
    await video.play()
    muted.value = false
  } catch {
    video.muted = true
    muted.value = true
    hookGesture()
  }
})

function toggleMute() {
  unhookGesture()
  applyMute(!muted.value)
}
</script>

<template>
  <section id="reel" class="hero" :class="{ 'hero--video': hero.videoSrc }">
    <video
      v-if="hero.videoSrc"
      class="hero__video"
      :src="hero.videoSrc"
      :poster="hero.poster || undefined"
      autoplay
      muted
      loop
      playsinline
    ></video>

    <p v-if="!hero.videoSrc" class="hero__slot" aria-hidden="true">
      showreel · autoplay muted<br />2560 × 1440 mp4
    </p>

    <button
      v-if="hero.videoSrc"
      class="hero__sound"
      type="button"
      :aria-pressed="!muted"
      @click="toggleMute"
    >
      <svg v-if="!muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M11 5 6 9H2v6h4l5 4V5Z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
        <path d="M18.5 5.5a9.5 9.5 0 0 1 0 13" />
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M11 5 6 9H2v6h4l5 4V5Z" />
        <path d="m23 9-6 6" />
        <path d="m17 9 6 6" />
      </svg>
      <span>{{ muted ? 'Muted' : 'Sound on' }}</span>
    </button>

    <div class="hero__shade" aria-hidden="true"></div>

    <div class="hero__inner gutter">
      <div class="hero__copy">
        <p class="kicker hero__kicker">Showreel · 3D character animation</p>
        <h1 class="hero__title">Weight, timing, acting.</h1>
        <p class="hero__blurb">{{ hero.blurb }}</p>
      </div>

      <div class="hero__cta">
        <button
          v-if="hero.videoSrc"
          class="btn"
          type="button"
          @click="open(hero.videoSrc, 'Showreel — Christian Flora')"
        >
          <span aria-hidden="true">▶</span>Play reel<span class="btn__hint">{{
            hero.reelDuration
          }}</span>
        </button>
        <a v-else class="btn" href="#work">
          <span aria-hidden="true">▶</span>Play reel<span class="btn__hint">{{
            hero.reelDuration
          }}</span>
        </a>

        <a class="hero__scroll" href="#work">
          <span class="hero__arrow" aria-hidden="true">↓</span>{{ totalClipCount }} pieces below
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  --drift-x: 60px;
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 88vh;
  min-height: 600px;
  overflow: hidden;
  isolation: isolate;
  background-color: var(--stripe-b);
  background-image: repeating-linear-gradient(
    115deg,
    var(--stripe-a) 0 15px,
    transparent 15px 30px
  );
  animation: drift 2.2s linear infinite;
}

.hero--video {
  animation: none;
}

.hero__video {
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__slot {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  text-align: center;
  font: 500 11px/1.8 var(--font-mono);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--fg-ghost);
}

.hero__sound {
  position: absolute;
  top: 18px;
  right: var(--gutter);
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  background: rgba(11, 11, 12, 0.55);
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-pill);
  color: var(--fg);
  font: 600 9px/1 var(--font-mono);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition:
    border-color 0.25s,
    background-color 0.25s;
}

.hero__sound:hover {
  border-color: var(--fg);
  background: rgba(11, 11, 12, 0.78);
}

.hero__sound svg {
  width: 14px;
  height: 14px;
}

.hero__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(11, 11, 12, 0.55),
    rgba(11, 11, 12, 0) 38%,
    rgba(11, 11, 12, 0.92) 100%
  );
}

.hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px 40px;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 38px;
}

.hero__copy {
  max-width: 840px;
}

.hero__kicker {
  color: rgba(242, 241, 238, 0.75);
}

.hero__title {
  margin-top: 14px;
  font-size: clamp(40px, 6.4vw, 104px);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.055em;
}

.hero__blurb {
  margin-top: 18px;
  max-width: 520px;
  font-size: 15px;
  line-height: 1.55;
  color: rgba(242, 241, 238, 0.72);
  text-wrap: pretty;
}

.hero__cta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  flex: none;
}

.hero__scroll {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font: 500 10px/1 var(--font-mono);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(242, 241, 238, 0.65);
  transition: color 0.2s;
}

.hero__scroll:hover {
  color: var(--fg);
}

.hero__arrow {
  display: inline-block;
  animation: bob 2.4s ease-in-out infinite;
}

@media (max-width: 760px) {
  .hero__inner {
    align-items: flex-start;
    flex-direction: column;
    padding-bottom: 30px;
  }

  .hero__cta {
    align-items: flex-start;
  }
}
</style>
