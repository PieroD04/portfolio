<script setup>
import { defineAsyncComponent } from 'vue';
import HeroSection from '../components/hero-section.component.vue';
import ProjectSection from '../components/project-section.component.vue';
import KnowledgeSection from '../components/knowledge-section.component.vue';
import ExperienceSection from '../components/experience-section.component.vue';
// the form and its PrimeVue inputs load in a separate chunk, after the rest of the page
const ContactSection = defineAsyncComponent(() => import('../components/contact-section.component.vue'));
</script>

<template>
  <hero-section/>
  <experience-section/>
  <knowledge-section/>
  <project-section/>
  <contact-section/>
</template>
