<script setup lang="ts">
import { characterWorks, totalClipCount } from '../data/films'
import WorkGroup from './WorkGroup.vue'

const multiShotGroups = characterWorks.filter((work) => work.clips.length > 1)
const singleShotGroups = characterWorks.filter((work) => work.clips.length === 1)
</script>

<template>
  <section id="work" class="work">
    <header v-reveal class="section-head gutter work__head">
      <h2 class="section-title">Selected work</h2>
      <p class="kicker">
        {{ totalClipCount }} shots ·
        <span class="only-hover">hover to preview · click for sound</span>
        <span class="only-touch">tap any shot to play with sound</span>
      </p>
    </header>

    <div
      v-for="(work, g) in multiShotGroups"
      :key="work.id"
      v-reveal="(g % 2) * 60"
      class="gutter work__group"
    >
      <WorkGroup :work="work" />
    </div>

    <div v-if="singleShotGroups.length" class="gutter work__duo">
      <WorkGroup
        v-for="(work, g) in singleShotGroups"
        :key="work.id"
        v-reveal="(g % 2) * 60"
        :work="work"
        class="work__duo-item"
      />
    </div>
  </section>
</template>

<style scoped>
.work {
  padding: 64px 0 40px;
}

.only-touch {
  display: none;
}

@media (hover: none) {
  .only-hover {
    display: none;
  }

  .only-touch {
    display: inline;
  }
}

@media (max-width: 640px) {
  .work {
    padding-top: 48px;
  }
}

.work__head {
  margin-bottom: 34px;
}

.work__group {
  margin-bottom: 46px;
}

.work__duo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 30px 40px;
}

.work__duo-item {
  margin-bottom: 0;
}
</style>
