<script setup lang="ts">
import { navLinks, profile } from '../data/site'
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top">CHRISTIAN<span class="brand__dim"> FLORA</span></a>

    <nav class="site-nav" aria-label="Primary">
      <a
        v-for="link in navLinks"
        :key="link.href"
        class="site-nav__link"
        :href="link.href"
      >
        {{ link.label }}
      </a>
    </nav>

    <div class="actions">
      <p class="status">
        <span class="status__dot" aria-hidden="true"></span>{{ profile.availability }}
      </p>
      <a class="btn btn--sm" :href="profile.resumeUrl" :download="profile.resumeFileName">
        <span aria-hidden="true">↓</span>Résumé<span class="btn__hint">PDF</span>
      </a>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px 24px;
  padding: 14px var(--gutter);
  background: rgba(11, 11, 12, 0.82);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.brand {
  font-size: 16px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.05em;
}

.brand__dim {
  color: rgba(242, 241, 238, 0.45);
}

.site-nav {
  display: flex;
  gap: 22px;
  overflow-x: auto;
  scrollbar-width: none;
}

.site-nav::-webkit-scrollbar {
  display: none;
}

.site-nav__link {
  font: 500 10px/1 var(--font-mono);
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--fg-mute);
  white-space: nowrap;
  transition: color 0.2s;
}

.site-nav__link:hover {
  color: var(--fg);
}

.actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.status {
  display: flex;
  align-items: center;
  gap: 8px;
  font: 500 10px/1 var(--font-mono);
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--fg-mute);
}

.status__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--fg);
  animation: blip 1.9s ease-in-out infinite;
}

@media (max-width: 1180px) {
  .status {
    display: none;
  }
}

@media (max-width: 880px) {
  .site-nav {
    order: 3;
    flex-basis: 100%;
    padding-bottom: 2px;
  }
}

@media (max-width: 480px) {
  .site-header {
    padding-block: 10px;
    gap: 10px 16px;
  }

  .site-nav {
    gap: 16px;
  }

  .actions {
    gap: 10px;
  }
}
</style>
