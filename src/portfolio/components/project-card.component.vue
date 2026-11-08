<script setup>
import { Project } from "@/portfolio/models/project.entity.js";
import { useI18n } from 'vue-i18n';
import { localePath } from '@/locale-path.js';
const { t, locale } = useI18n();

defineProps({
  project: {
    type: Project,
    required: true
  }
});

const getImagePath = (image) => {
  return `/assets/images/${image}`;
};

</script>

<template>
  <pv-card class="project-card">
    <template #header>
      <img :alt="`${t('project-image')} ${project.name}`" :src="getImagePath(project.image)" loading="lazy" />
    </template>
    <template #title>{{project.name}}</template>
    <template #subtitle>{{project.date}}</template>
    <template #content>
      <p class="project-description">{{project.description}}</p>
      <div class="project-tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{tag}}</span>
      </div>
    </template>
    <template #footer>
      <div class="project-actions">
        <pv-button class="project-link" as="router-link" :to="localePath(`/projects/${project.slug}`, locale)"
                   :label="t('project-details')" icon="pi pi-folder-open" size="small"/>
        <pv-button class="project-link" as="a" :href="project.url" target="_blank" rel="noopener"
                   :label="t('project-button')" icon="pi pi-github" outlined size="small"/>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.project-card{
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

:deep(.p-card-body) {
  flex: 1;
}

:deep(.p-card-content) {
  flex: 1;
}

.project-card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: top;
  display: block;
}

.project-description {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.project-link{
  text-decoration: none;
}

.project-actions{
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
