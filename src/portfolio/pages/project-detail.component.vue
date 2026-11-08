<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { ProjectService } from "../services/project.service.js";
import { localePath } from '@/locale-path.js';
const { locale, t } = useI18n();
const route = useRoute();

const project = computed(() => ProjectService.getProjects(locale.value).find(p => p.slug === route.meta.slug));
</script>

<template>
  <article id="project-page">
    <router-link :to="localePath('/projects', locale)" class="back-link"><i class="pi pi-arrow-left"/> {{ t('project-all') }}</router-link>
    <h1>{{ project.name }}</h1>
    <p class="project-meta">
      <span v-if="project.role" class="project-role">{{ project.role }} · </span>
      <template v-if="project.teamSize">{{ t('project-team', { n: project.teamSize }) }} · </template>{{ project.date }}
    </p>
    <div class="project-tags">
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <img :src="`/assets/images/${project.image}`" :alt="`${t('project-image')} ${project.name}`"/>

    <h2>{{ t('project-problem') }}</h2>
    <p>{{ project.problem }}</p>

    <h2>{{ t('project-decisions') }}</h2>
    <ul>
      <li v-for="decision in project.decisions" :key="decision">{{ decision }}</li>
    </ul>

    <h2>{{ t('project-result') }}</h2>
    <p>{{ project.result }}</p>

    <div class="project-actions">
      <pv-button as="a" :href="project.url" target="_blank" rel="noopener" :label="t('project-button')" icon="pi pi-github" outlined size="small" class="project-link"/>
      <pv-button v-if="project.demo" as="a" :href="project.demo" target="_blank" rel="noopener" :label="t('project-demo')" icon="pi pi-external-link" outlined size="small" class="project-link"/>
    </div>

    <template v-if="project.repos.length">
      <h2>{{ t('project-original-repos') }}</h2>
      <ul>
        <li v-for="repo in project.repos" :key="repo.url"><a :href="repo.url" target="_blank" rel="noopener">{{ repo.name }}</a></li>
      </ul>
    </template>
  </article>
</template>

<style scoped>
#project-page{
  margin: 6rem auto 4rem;
  max-width: 48rem;
}

.back-link{
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--p-primary-color);
  text-decoration: none;
  font-weight: 500;
}

h1{
  margin: 1rem 0 0.25rem;
}

h2{
  margin: 2rem 0 0.75rem;
  font-size: 1.35rem;
}

.project-meta{
  margin: 0 0 1rem;
  font-size: 0.9rem;
  color: var(--p-text-muted-color);
}

.project-role{
  font-weight: 600;
  color: var(--p-primary-color);
}

.project-tags, .project-actions{
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.project-actions{
  gap: 0.75rem;
  margin-top: 2rem;
}

img{
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: top;
  border-radius: 12px;
  border: 1px solid var(--p-content-border-color);
  margin-top: 1.5rem;
  display: block;
}

p, li{
  line-height: 1.7;
}

ul{
  padding-left: 1.1rem;
  margin: 0;
}

li + li{
  margin-top: 0.5rem;
}

li a{
  color: var(--p-primary-color);
}

.project-link{
  text-decoration: none;
}
</style>
