<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>

<template>
  <section id="projects-section">
    <h2>{{t("projects-title")}}</h2>
    <div id="project-carrousel">
    </div>
  </section>
</template>

<style scoped>

</style>