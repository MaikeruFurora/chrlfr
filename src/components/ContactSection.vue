<script setup lang="ts">
import { profile, socials } from '../data/site'

const year = new Date().getFullYear()
</script>

<template>
  <section id="contact" class="contact gutter">
    <h2 v-reveal class="contact__headline">Hiring a character animator?</h2>

    <div class="contact__row">
      <p class="contact__details">
        {{ profile.email }}<br />{{ profile.location }}<br />{{ profile.availability }}
      </p>

      <div class="contact__actions">
        <a class="btn" :href="`mailto:${profile.email}`">Email me&ensp;<span aria-hidden="true">↗</span></a>
        <a
          class="btn btn--outline"
          :href="profile.resumeUrl"
          download="Christian-Flora-Resume.pdf"
        >
          <span aria-hidden="true">↓</span>Download résumé<span class="btn__hint">PDF · 85 KB</span>
        </a>
      </div>
    </div>

    <footer class="footer">
      <span>{{ profile.name }} © {{ year }}</span>
      <ul class="footer__socials">
        <li v-for="social in socials" :key="social.label">
          <a :href="social.href">{{ social.label }}</a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<style scoped>
.contact {
  padding-top: 70px;
  padding-bottom: 40px;
  border-top: 1px solid var(--surface-line);
}

.contact__headline {
  max-width: 1000px;
  font-size: clamp(38px, 5.6vw, 88px);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.055em;
}

.contact__row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 38px;
}

.contact__details {
  font: 500 10px/2 var(--font-mono);
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--fg-mute);
}

.contact__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.footer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px 24px;
  margin-top: 46px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
  font: 500 9px/1 var(--font-mono);
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--fg-hint);
}

.footer__socials {
  display: flex;
}

.footer__socials li + li::before {
  content: '·';
  padding: 0 9px;
}

.footer__socials a {
  transition: color 0.2s;
}

.footer__socials a:hover {
  color: var(--fg);
}
</style>
