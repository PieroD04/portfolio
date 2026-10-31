<script setup>
import { computed } from 'vue';
import { ProjectService } from "../services/project.service.js";
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();

const projects = computed(() => ProjectService.getProjects(locale.value));
</script>

<template>
  <section id="projects-page">
    <router-link to="/" class="back-link"><i class="pi pi-arrow-left"/> {{ t('projects-back') }}</router-link>
    <h1 class="section-title">{{ t('projects-title') }}</h1>

    <article v-for="project in projects" :key="project.url" class="project-detail">
      <img :src="`/assets/images/${project.image}`" :alt="`${t('project-image')} ${project.name}`" loading="lazy"/>
      <div class="project-info">
        <h2>{{ project.name }}</h2>
        <p class="project-meta">
          <span v-if="project.role" class="project-role">{{ project.role }} · </span>{{ project.date }}
        </p>
        <p class="project-description">{{ project.description }}</p>
        <ul v-if="project.highlights.length">
          <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
        <div class="project-tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <pv-button as="a" :href="project.url" target="_blank" rel="noopener" :label="t('project-button')"
                   icon="pi pi-github" outlined size="small" class="project-link"/>
      </div>
    </article>
  </section>
</template>

<style scoped>
#projects-page{
  margin-top: 6rem;
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
  margin-top: 1rem;
}

.project-detail{
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  padding: 2rem 0;
  border-top: 1px solid var(--p-content-border-color);
}

.project-detail img{
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: top;
  border-radius: 12px;
  border: 1px solid var(--p-content-border-color);
}

.project-info h2{
  margin: 0;
  font-size: 1.35rem;
}

.project-meta{
  margin: 0.25rem 0 1rem;
  font-size: 0.9rem;
  color: var(--p-text-muted-color);
}

.project-role{
  font-weight: 600;
  color: var(--p-primary-color);
}

.project-description{
  line-height: 1.7;
}

ul{
  padding-left: 1.1rem;
  margin: 1rem 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

li + li{
  margin-top: 0.4rem;
}

.project-tags{
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 1rem 0 1.25rem;
}

.project-link{
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .project-detail{
    grid-template-columns: 2fr 3fr;
    gap: 2.5rem;
    align-items: start;
  }

  .project-info h2{
    font-size: 1.6rem;
  }
}
</style>
