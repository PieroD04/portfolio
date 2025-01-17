<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref, watch } from "vue";
import { KnowledgeService } from "../services/knowledge.service.js";
const { locale, t } = useI18n();

const technologies = ref([]);
const certificates = ref([]);
const tools = ref([]);

const loadKnowledge = () => {
  const lang = locale.value === 'es' ? 'es' : 'en';
  technologies.value = KnowledgeService.getTechnologies(lang);
  certificates.value = KnowledgeService.getCertificates(lang);
  tools.value = KnowledgeService.getTools(lang);
};

onMounted(() => {
  loadKnowledge();
});

watch(() => locale.value, () => {
  loadKnowledge();
});

</script>

<template>
  <section id="knowledge-section">
    <h2>{{ t('knowledge-title') }}</h2>
    <h3>{{ t('knowledge-subtitle') }}</h3>
    <div id="knowledge-accordion">
      <pv-accordion multiple>
        <pv-accordionpanel value="0">
          <pv-accordionheader>
            <div class="accordion-header">
              <i class="pi pi-wrench" /> {{ t('technologies-title') }}
            </div>
          </pv-accordionheader>
          <pv-accordioncontent>
            <ul>
              <li v-for="(tech, index) in technologies" :key="index">
                <strong>{{ t(tech.category.replace(' ', '-').toLowerCase()) }}:</strong>
                {{ Array.isArray(tech.technologies) ? tech.technologies.join(', ') : tech.technologies }}
              </li>
            </ul>
          </pv-accordioncontent>
        </pv-accordionpanel>
        <pv-accordionpanel value="1">
          <pv-accordionheader>
            <div class="accordion-header">
              <i class="pi pi-book" /> {{ t('certificates-title') }}
            </div>
          </pv-accordionheader>
          <pv-accordioncontent>
            <ul>
              <li v-for="certificate in certificates" :key="certificate.title">
                <a :href="certificate.link"> <!--target="_blank" ref="noopener noreferrer"-->
                  <strong>{{ certificate.title }}</strong> - {{ certificate.issuer }} ({{ certificate.date }})
                </a>
              </li>
            </ul>
          </pv-accordioncontent>
        </pv-accordionpanel>
        <pv-accordionpanel value="3">
          <pv-accordionheader>
            <div class="accordion-header">
              <i class="pi pi-hammer" /> {{ t('tools-title') }}
            </div>
          </pv-accordionheader>
          <pv-accordioncontent>
            <ul>
              <li v-for="(tool, index) in tools" :key="index">
                <strong>{{ t(tool.category.replace(' ', '-').toLowerCase()) }}:</strong>
                {{ Array.isArray(tool.tools) ? tool.tools.join(', ') : tool.tools }}
              </li>
            </ul>
          </pv-accordioncontent>
        </pv-accordionpanel>
      </pv-accordion>
    </div>
  </section>
</template>

<style scoped>
#knowledge-section{
  text-align: center;
  margin-bottom: 3rem;
}

#knowledge-accordion{
  width: 90%;
  margin: 0 auto;
}

ul{
  margin: 0;
  padding-left: 20px;
  list-style: square;
  text-align: left;
}

ul li{
  margin-bottom: 10px;
}

li strong{
  color: var(--p-primary-color);
}

li {
  color: var(--p-secondary-color);
}

.accordion-header{
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

a {
  color: var(--p-secondary-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>