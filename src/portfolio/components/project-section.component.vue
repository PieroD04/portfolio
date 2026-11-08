<script setup>
import { computed } from 'vue';
import { ProjectService } from "../services/project.service.js";
import ProjectCard from "./project-card.component.vue";
import { useI18n } from 'vue-i18n';
import { localePath } from '@/locale-path.js';
const { locale, t } = useI18n();

// projects.json is ordered newest first; the full list lives on /projects
const projects = computed(() => ProjectService.getProjects(locale.value).slice(0, 3));
</script>

<template>
  <section id="project-section">
    <h2 class="section-title">{{t("projects-title")}}</h2>
    <div id="project-grid">
      <project-card v-for="project in projects" :key="project.url" :project="project"/>
    </div>
    <div id="view-all">
      <pv-button as="router-link" :to="localePath('/projects', locale)" :label="t('projects-view-all')" icon="pi pi-arrow-right" icon-pos="right" class="view-all-link"/>
    </div>
  </section>
</template>

<style scoped>
#project-grid{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 18rem), 1fr));
  gap: 1.5rem;
}

#view-all{
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.view-all-link{
  text-decoration: none;
}
</style>
