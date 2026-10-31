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
    <div id="experience-intro">
      <h2>{{t("experience-title")}}</h2>
      <h3>{{t("experience-subtitle")}}</h3>
    </div>
    <pv-card v-for="job in jobs" :key="job.company" class="experience-card">
      <template #title>{{job.role}} · {{job.company}}</template>
      <template #subtitle>
        <p class="experience-date">{{job.date}} · {{job.location}}</p>
      </template>
      <template #content>
        <ul>
          <li v-for="highlight in job.highlights" :key="highlight">{{highlight}}</li>
        </ul>
        <div class="experience-skills">
          <span v-for="skill in job.skills" :key="skill" class="skill">{{skill}}</span>
        </div>
      </template>
    </pv-card>
  </section>
</template>

<style scoped>
#experience-intro{
  text-align: center;
}

.experience-card{
  padding: 1rem;
  margin: 1rem 0;
}

.experience-date {
  font-weight: 300;
}

ul {
  padding-left: 1.25rem;
  line-height: 1.6;
}

.experience-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.85rem;
  background: var(--p-primary-color);
  color: var(--p-primary-contrast-color);
}
</style>
