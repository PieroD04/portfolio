<script setup>
import { Project } from "@/public/models/project.entity.js";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

defineProps({
  project: {
    type: Project,
    required: true
  }
});

</script>

<template>
  <pv-card class="project-card">
    <template #header>
      <img :alt="`${t('project-image')} ${project.id}`" :src="project.image" />
    </template>
    <template #title>{{project.name}}</template>
    <template #content>
      <p class="project-description">{{project.description}}</p>
      <p class="project-date">{{project.date}}</p>
    </template>
    <template #footer>
      <div class="card-footer">
        <pv-button class="project-link" as="a" :href="project.url" :label="t('project-button')" icon="pi pi-search"/>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.project-card{
  padding: 1rem;
  margin: 1rem;
}

.card-footer{
  text-align: center;
}

.project-link{
  text-decoration: none;

}

</style>
