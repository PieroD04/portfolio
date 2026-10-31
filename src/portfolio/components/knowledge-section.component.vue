<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from "vue";
import { KnowledgeService } from "../services/knowledge.service.js";
const { locale, t } = useI18n();

const groups = computed(() => [
  ...KnowledgeService.getTechnologies().map(tech => ({ category: tech.category, items: tech.technologies })),
  ...KnowledgeService.getTools().map(tool => ({ category: tool.category, items: tool.tools }))
]);
const certificates = computed(() => KnowledgeService.getCertificates(locale.value));

const categoryKey = (category) => category.replaceAll(' ', '-').toLowerCase();
</script>

<template>
  <section id="knowledge-section">
    <h2 class="section-title">{{ t('knowledge-title') }}</h2>
    <div id="skill-groups">
      <div v-for="group in groups" :key="group.category" class="skill-group">
        <h3>{{ t(categoryKey(group.category)) }}</h3>
        <div class="skill-tags">
          <span v-for="item in group.items" :key="item" class="tag">{{ item }}</span>
        </div>
      </div>
    </div>

    <h3 id="certificates-title">{{ t('certificates-title') }}</h3>
    <ul id="certificates">
      <li v-for="certificate in certificates" :key="certificate.title">
        <a :href="certificate.link" target="_blank" rel="noopener">
          <i class="pi pi-verified"/>
          <span><strong>{{ certificate.title }}</strong> · {{ certificate.issuer }} · {{ certificate.date }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
#skill-groups{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 1fr));
  gap: 1rem;
}

.skill-group{
  padding: 1.25rem;
  border-radius: 12px;
  background: var(--p-content-background);
  border: 1px solid var(--p-content-border-color);
}

.skill-group h3, #certificates-title{
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
}

.skill-tags{
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

#certificates-title{
  margin-top: 2.5rem;
}

#certificates{
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
}

#certificates a{
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: inherit;
  text-decoration: none;
}

#certificates a:hover{
  color: var(--p-primary-color);
}

#certificates i{
  color: var(--p-primary-color);
}
</style>
