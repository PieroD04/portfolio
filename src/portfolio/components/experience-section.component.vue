<script setup>
import { computed } from 'vue';
import experienceData from '@/data/experience.json';
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();

const jobs = computed(() => experienceData.experience.map(job => ({
  ...job,
  role: job.role[locale.value],
  date: job.date[locale.value],
  location: job.location[locale.value],
  highlights: job.highlights[locale.value]
})));
</script>

<template>
  <section id="experience-section">
    <h2 class="section-title">{{t("experience-title")}}</h2>
    <pv-card v-for="job in jobs" :key="job.company" class="experience-card">
      <template #title>
        <div class="experience-header">
          <img :src="`/assets/images/${job.logo}`" :alt="`${job.company} logo`" class="experience-logo" width="48" height="48"/>
          <div>
            <span class="experience-role">{{job.role}}</span>
            <span class="experience-company">{{job.company}}</span>
          </div>
        </div>
      </template>
      <template #subtitle>
        <span class="experience-meta">{{job.date}} · {{job.location}}</span>
      </template>
      <template #content>
        <ul>
          <li v-for="highlight in job.highlights" :key="highlight">{{highlight}}</li>
        </ul>
        <div class="experience-skills">
          <span v-for="skill in job.skills" :key="skill" class="tag">{{skill}}</span>
        </div>
      </template>
    </pv-card>
  </section>
</template>

<style scoped>
.experience-card{
  border-left: 4px solid var(--p-primary-color);
}

:deep(.p-card-body) {
  padding: 1rem;
}

:deep(.p-card-title) {
  font-size: 1.1rem;
}

.experience-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.experience-logo {
  flex-shrink: 0;
  border-radius: 12px;
}

.experience-role {
  display: block;
}

.experience-company {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--p-primary-color);
}

.experience-meta {
  display: block;
  font-size: 0.85rem;
}

ul {
  padding-left: 1.1rem;
  margin: 0.5rem 0 1rem;
  font-size: 0.9rem;
  line-height: 1.55;
}

li + li {
  margin-top: 0.4rem;
}

.experience-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

@media screen and (min-width: 768px) {
  :deep(.p-card-body) {
    padding: 1.5rem;
  }

  :deep(.p-card-title) {
    font-size: 1.25rem;
  }

  ul {
    font-size: 1rem;
    line-height: 1.7;
  }
}
</style>
