<script setup lang="ts">
import { jobs } from '../data/jobs'
</script>

<template>
  <section id="experience" class="experience">
    <header v-reveal class="section-head gutter experience__head">
      <h2 class="section-title">Experience</h2>
      <p class="kicker">2023 → 2025</p>
    </header>

    <article
      v-for="(job, i) in jobs"
      :key="`${job.company}-${job.title}-${job.period}`"
      v-reveal="i * 90"
      class="job gutter"
    >
      <p class="job__period">{{ job.period }}<br />{{ job.commitment }}</p>

      <div class="job__main">
        <div class="job__ident">
          <img
            v-if="job.logo"
            class="job__logo"
            :src="job.logo"
            :alt="`${job.company} logo`"
            loading="lazy"
            decoding="async"
          />
          <h3 class="job__company">{{ job.company }}</h3>
        </div>
        <p class="job__role">{{ job.title }}</p>
        <p class="job__summary">{{ job.summary }}</p>

        <ul class="job__skills" :aria-label="`${job.title} skills`">
          <li v-for="skill in job.skills" :key="skill">{{ skill }}</li>
        </ul>
      </div>

      <p class="job__address">
        <template v-for="(line, j) in job.address" :key="line">
          {{ line }}<br v-if="j < job.address.length - 1" />
        </template>
      </p>
    </article>
  </section>
</template>

<style scoped>
.experience {
  padding: 60px 0;
  background: var(--bg-raised);
  border-top: 1px solid var(--surface-line);
}

.job {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr) 260px;
  gap: 30px;
  padding-top: 26px;
  padding-bottom: 26px;
  border-bottom: 1px solid var(--line);
}

.job__period {
  font: 500 10px/1.6 var(--font-mono);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--fg-faint);
}

.job__ident {
  display: flex;
  align-items: center;
  gap: 12px;
}

.job__logo {
  flex: none;
  height: 38px;
  width: auto;
  max-width: 130px;
  object-fit: contain;
}

.job__company {
  font-size: 26px;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.job__role {
  margin-top: 7px;
  font: 600 12px/1 var(--font-mono);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(242, 241, 238, 0.6);
}

.job__summary {
  margin-top: 14px;
  max-width: 560px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--fg-dim);
  text-wrap: pretty;
}

.job__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 16px;
}

.job__skills li {
  padding: 5px 10px;
  border: 1px solid rgba(242, 241, 238, 0.2);
  border-radius: var(--radius-pill);
  font: 600 9px/1 var(--font-mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(242, 241, 238, 0.7);
}

.job__address {
  font: 500 10px/1.8 var(--font-mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--fg-hint);
}

@media (max-width: 900px) {
  .job {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .job__address br {
    display: none;
  }

  .job__address {
    line-height: 2;
  }
}
</style>
