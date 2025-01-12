<script setup>
import { ref, watch} from 'vue';
import { ProjectService } from "../services/project.service.js";
import ProjectCard from "./project-card.component.vue";
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();

const projects = ref([]);

watch(locale, (newLang) => {
  const lang = t('lang');  // Get the current language
  projects.value = ProjectService.getProjects(lang);  // Update the projects based on the new language
}, { immediate: true });

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

</script>

<template>
  <section id="projects-section">
    <h2>{{t("projects-title")}}</h2>
    <pv-carousel :value="projects" :num-visible="3" :num-scroll="3" :responsive-options="responsiveOptions">
      <template #item="project">
        <project-card :project="project.data"/>
      </template>
    </pv-carousel>
  </section>
</template>

<style scoped>
#projects-section{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>