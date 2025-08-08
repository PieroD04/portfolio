<script setup>
import HeroSection from '../components/hero-section.component.vue';
import ProjectSection from '../components/project-section.component.vue';
import ContactSection from '../components/contact-section.component.vue';
import KnowledgeSection from '../components/knowledge-section.component.vue';
</script>

<template>
  <hero-section id="hero-section"/>
  <knowledge-section id="knowledge-section"/>
  <project-section id="project-section"/>
  <contact-section id="contact-section"/>
</template>

<style scoped>

#hero-section, #knowledge-section {
  width: 70%;
  margin: 5rem auto;
}

@media (max-width: 768px) {
  #hero-section {
    margin-top: 10rem;
  }

  #hero-section, #knowledge-section {
    width: 90%;
  }
}

</style>