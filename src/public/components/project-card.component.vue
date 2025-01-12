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

const getImagePath = (image) => {
  return `/src/assets/images/${image}`;
};

</script>

<template>
  <pv-card class="project-card">
    <template #header>
      <img :alt="`${t('project-image')} ${project.id}`" :src="getImagePath(project.image)" />
    </template>
    <template #title>{{project.name}}</template>
    <template #subtitle>
      <p class="project-date">{{project.date}}</p>
    </template>
    <template #content>
      <div class="card-content">
        <p class="project-description">{{project.description}}</p>
      </div>
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

.project-date {
  font-weight: 300;
}

.project-link{
  text-decoration: none;

}

.project-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
}

@media screen and (max-width: 600px) {
  :deep .p-card-body {
    padding: 0;
  }
}

</style>
