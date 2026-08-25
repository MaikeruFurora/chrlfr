<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { hero } from '../data/site'
import { totalClipCount } from '../data/films'
import { usePlayer } from '../composables/usePlayer'

const { open, current } = usePlayer()

const videoEl = ref<HTMLVideoElement | null>(null)

// Browsers only allow unmuted playback after a real user activation gesture.
// Scrolling does not count as one, so listening for wheel events would burn
// the handler without earning the right to unmute.
const GESTURES = ['pointerdown', 'keydown', 'touchend']

let soundUnlocked = false

function unhookGestures() {
  for (const type of GESTURES) {
    document.removeEventListener(type, unlockSound)
  }
}

function unlockSound() {
  if (soundUnlocked) return
  soundUnlocked = true
  unhookGestures()

  const video = videoEl.value
  if (!video) return

  // If that first gesture was the click that opened the modal, the modal owns
  // the audio; the watcher below hands it back when the modal closes.
  if (!current.value) {
    video.muted = false
    video.play().catch(() => {})
  }
}

onMounted(async () => {
  const video = videoEl.value
  if (!video) return

  video.muted = true
  try {
    await video.play()
  } catch {
    // Autoplay refused outright — the first gesture starts it, with sound.
  }

  for (const type of GESTURES) {
    document.addEventListener(type, unlockSound, { passive: true })
  }
})

// Never let the hero and the modal play over each other.
watch(current, (value) => {
  const video = videoEl.value
  if (!video) return
  video.muted = Boolean(value) || !soundUnlocked
})

onBeforeUnmount(unhookGestures)
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
  animation: slideInUp 0.6s var(--ease-snap) both;
}

.hero__title {
  margin-top: 14px;
  font-size: clamp(40px, 6.4vw, 104px);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.055em;
  animation: slideInUp 0.7s var(--ease-snap) 0.08s both;
}

.hero__blurb {
  margin-top: 18px;
  max-width: 520px;
  font-size: 15px;
  line-height: 1.55;
  color: rgba(242, 241, 238, 0.72);
  text-wrap: pretty;
  animation: slideInUp 0.7s var(--ease-snap) 0.18s both;
}

.hero__cta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  flex: none;
  animation: slideInUp 0.7s var(--ease-snap) 0.28s both;
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
