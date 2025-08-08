<script setup>
import { Project } from "@/portfolio/models/project.entity.js";
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

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
      <img :alt="`${t('project-image')} ${project.image}`" :src="getImagePath(project.image)" />
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
  height: 18rem;
  object-fit: cover;
  border-radius: 5px;
}

@media screen and (max-width: 1024px){
  .project-card img {
    height: 13rem;
  }
}

@media screen and (max-width: 600px) {
  :deep(.p-card-header) {
    margin: 0.5rem;
  }

  :deep(.p-card-title) {
    font-size: 16px;
  }


  :deep(.p-card-body) {
    padding: 0;
  }

  .project-card{
    text-align: center;
  }

  .project-date {
    font-size: 12px;
  }

  .project-description {
    font-size: 10px;
  }

  .project-card img {
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
  }

  .project-link{
    font-size: 12px;
    padding: 8px 12px;
  }

  :deep(.p-button-icon){
    font-size: 12px;
  }
}

@media screen and (max-width: 400px){
  :deep(.p-card-header) {
    margin: 0;
  }

  .project-card img {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
  }

  .project-link{
    font-size: 8px;
    padding: 8px 12px;
  }

  :deep(.p-button-icon){
    font-size: 8px;
  }
}

</style>
