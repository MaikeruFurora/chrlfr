<script setup lang="ts">
import type { CharacterWork } from '../data/films'
import ClipCard from './ClipCard.vue'

const props = defineProps<{
  work: CharacterWork
}>()

const GRID_CLASS = {
  1: 'group__grid--1',
  2: 'group__grid--2',
  3: 'group__grid--3',
} as const

// One vertical take beside landscape ones: stack the landscape takes in the left
// column and let the portrait fill the full height on the right. Two 16:9 frames
// stacked are exactly as tall as one 8:9 at the same width (2 / 1.778 = 9 / 8).
const isSplit =
  props.work.clips.length === 3 && props.work.clips.filter((clip) => clip.portrait).length === 1

const columnCount = props.work.clips.length === 4 ? 2 : Math.min(props.work.clips.length, 3)
const gridClass = isSplit ? 'group__grid--split' : GRID_CLASS[columnCount as 1 | 2 | 3]
</script>

<template>
  <section class="group" :aria-label="`${work.name} — ${work.tagline}`">
    <header class="group__head">
      <h3 class="group__name">{{ work.name }}</h3>
      <p class="group__meta">
        {{ work.tagline }}
        <span class="group__count"
        >{{ work.clips.length }} shot{{ work.clips.length > 1 ? 's' : '' }}</span
        >
      </p>
    </header>

    <div class="group__grid" :class="gridClass">
      <ClipCard
        v-for="(clip, i) in work.clips"
        :key="clip.id"
        v-reveal="i * 70"
        :class="{ group__feature: isSplit && clip.portrait }"
        :clip="clip"
        :work-name="work.name"
        :index="i + 1"
      />
    </div>
  </section>
</template>

<style scoped>
.group__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--line-strong);
  margin-bottom: 18px;
}

.group__name {
  font-size: clamp(26px, 3vw, 40px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.05em;
}

.group__meta {
  font: 500 10px/1 var(--font-mono);
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--fg-faint);
  display: flex;
  align-items: baseline;
  gap: 14px;
}

.group__count {
  color: var(--fg-hint);
}

.group__grid {
  display: grid;
  gap: 22px;
}

.group__grid--1 {
  grid-template-columns: minmax(0, 1fr);
}

.group__grid--2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.group__grid--3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.group__grid--split {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

/* landscape takes stack down the left column */
.group__grid--split > * {
  grid-column: 1;
}

.group__feature {
  grid-column: 2;
  grid-row: 1 / span 2;
  height: 100%;
}

/* drop the fixed ratio so the frame fills both rows exactly */
.group__feature :deep(.clip__frame) {
  flex: 1;
  aspect-ratio: auto;
}

@media (max-width: 720px) {
  .group__grid--2,
  .group__grid--3,
  .group__grid--split {
    grid-template-columns: minmax(0, 1fr);
  }

  .group__grid--split > *,
  .group__feature {
    grid-column: 1;
    grid-row: auto;
    height: auto;
  }

  .group__feature :deep(.clip__frame) {
    flex: initial;
    aspect-ratio: 8 / 9;
  }
}
</style>
