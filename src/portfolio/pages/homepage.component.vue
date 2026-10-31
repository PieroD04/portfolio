<script setup>
import HeroSection from '../components/hero-section.component.vue';
import ProjectSection from '../components/project-section.component.vue';
import ContactSection from '../components/contact-section.component.vue';
import KnowledgeSection from '../components/knowledge-section.component.vue';
import ExperienceSection from '../components/experience-section.component.vue';
</script>

<template>
  <hero-section id="hero-section"/>
  <experience-section id="experience-section"/>
  <knowledge-section id="knowledge-section"/>
  <project-section id="project-section"/>
  <contact-section id="contact-section"/>
</template>

<style scoped>

#hero-section, #experience-section, #knowledge-section {
  width: 70%;
  margin: 5rem auto;
}

@media (max-width: 768px) {
  #hero-section {
    margin-top: 10rem;
  }

  #hero-section, #experience-section, #knowledge-section {
    width: 90%;
  }
}

</style>