<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroReel from './components/HeroReel.vue'
import ClientMarquee from './components/ClientMarquee.vue'
import WorkGallery from './components/WorkGallery.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import PlayerModal from './components/PlayerModal.vue'
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <SiteHeader />
  <main id="main">
    <HeroReel />
    <ClientMarquee />
    <WorkGallery />
    <AboutSection />
    <ExperienceSection />
    <ContactSection />
  </main>
  <PlayerModal />
</template>
