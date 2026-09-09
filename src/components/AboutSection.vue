<script setup lang="ts">
import { about, profile } from '../data/site'
</script>

<template>
  <section id="about" class="about">
    <div class="about__inner gutter">
      <div v-reveal class="portrait">
        <img
          v-if="about.portraitSrc"
          class="portrait__img"
          :src="about.portraitSrc"
          :alt="`Portrait of ${profile.name}`"
        />
        <span v-else class="portrait__ph">Drop your photo — portrait, 4:5</span>
      </div>

      <div v-reveal="120" class="body">
        <p class="kicker">Who I am</p>
        <h2 class="section-title body__name">{{ profile.name }}</h2>
        <p class="body__text">{{ about.intro }}</p>
        <p class="body__text body__text--tight">{{ about.closing }}</p>

        <dl class="facts">
          <div v-for="fact in about.facts" :key="fact.term" class="facts__item">
            <dt class="facts__term">{{ fact.term }}</dt>
            <dd class="facts__detail">
              <template v-for="(line, i) in fact.lines" :key="line">
                {{ line }}<br v-if="i < fact.lines.length - 1" />
              </template>
            </dd>
          </div>
        </dl>

        <a
          class="btn body__cta"
          :href="profile.resumeUrl"
          :download="profile.resumeFileName"
        >
          <span aria-hidden="true">↓</span>Download résumé<span class="btn__hint">PDF</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding-block: 64px;
  border-top: 1px solid var(--surface-line);
}

.about__inner {
  display: grid;
  grid-template-columns: minmax(0, 380px) minmax(0, 1fr);
  gap: 48px;
  align-items: start;
  max-width: 1120px;
  margin-inline: auto;
}

.portrait {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius-m);
  background: var(--bg-panel);
}

.portrait__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease-out);
}

.portrait:hover .portrait__img {
  transform: scale(1.04);
}

.portrait__ph {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 16px;
  text-align: center;
  font: 500 9px/1.7 var(--font-mono);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--fg-ghost);
}

.body__name {
  margin-top: 12px;
}

.body__text {
  margin-top: 18px;
  max-width: 640px;
  font-size: 15px;
  line-height: 1.6;
  color: var(--fg-dim);
  text-wrap: pretty;
}

.body__text--tight {
  margin-top: 14px;
}

.facts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px 32px;
  margin-top: 28px;
  max-width: 720px;
}

.facts__item {
  padding-top: 11px;
  border-top: 1px solid var(--line-strong);
}

.facts__term {
  font: 500 9px/1 var(--font-mono);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(242, 241, 238, 0.4);
}

.facts__detail {
  margin-top: 7px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
}

.body__cta {
  margin-top: 30px;
}

@media (max-width: 980px) {
  .about__inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .portrait {
    max-width: 380px;
  }
}

@media (max-width: 640px) {
  .facts {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
