<script setup lang="ts">
import { disciplines } from '../data/site'
</script>

<template>
  <section class="marquee" aria-label="Disciplines">
    <ul class="sr-only">
      <li v-for="item in disciplines" :key="item">{{ item }}</li>
    </ul>

    <div class="marquee__track" aria-hidden="true">
      <ul v-for="copy in 6" :key="copy" class="marquee__list">
        <li
          v-for="(item, i) in disciplines"
          :key="item"
          class="marquee__item"
          :class="{ 'marquee__item--lead': i === 0 }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  padding: 13px 0;
  border-bottom: 1px solid var(--line);
  background: var(--bg-raised);
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

.marquee__list {
  display: flex;
  align-items: center;
}

.marquee__item {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.015em;
  white-space: nowrap;
  color: rgba(242, 241, 238, 0.42);
}

.marquee__item--lead {
  color: var(--fg);
}

.marquee__item::after {
  content: '·';
  margin-left: 36px;
  color: rgba(242, 241, 238, 0.42);
}
</style>
