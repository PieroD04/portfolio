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
    numScroll: 2
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  }
]);

</script>

<template>
  <section id="projects-section">
    <div id="projects-intro">
      <h2>{{t("projects-title")}}</h2>
      <h3>{{t("projects-subtitle")}}</h3>
    </div>
    <div id="project-carousel">
      <pv-carousel :value="projects" :num-visible="3" :num-scroll="3" :responsive-options="responsiveOptions">
        <template #item="project">
          <project-card :project="project.data"/>
        </template>
      </pv-carousel>
    </div>
  </section>
</template>

<style scoped>
#projects-section{
  display: flex;
  flex-direction: column;
  align-items: center;
}

#projects-intro{
  text-align: center;
}

#project-carousel{
  width: 90%;
  margin: 0 auto;
}

@media screen and (max-width: 1024px) {
  #projects-intro{
    margin: 0 1rem;
  }
}
</style>