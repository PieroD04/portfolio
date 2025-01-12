<script setup>
import { ref } from 'vue';
import enIcon from '@/assets/icons/en.svg';
import esIcon from '@/assets/icons/es.svg';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const { t } = useI18n();

const selectedLanguage = ref('en');
const languages = ref([
  {
    label: 'English',
    code: 'en'
  },
  {
    label: 'Español',
    code: 'es'
  }
]);

const changeLanguage = (event) => {
  locale.value = event;
}

</script>

<template>
  <pv-toolbar aria-label="Main Navigation">
    <template #start>
      <div class="logo">
        <!--img alt="logo" src="../../assets/icons/logo.ico" width="40" height="40" /-->
        <h2>Piero Delgado</h2>
      </div>
    </template>
    <template #center>

    </template>
    <template #end>
      <pv-select v-model="selectedLanguage" :options="languages" option-label="label" option-value="code" @update:model-value="changeLanguage">
        <template #option="language">
          <div class="language-option">
            <img :alt="`${language.option.label} flag`" :src="language.option.code === 'en' ? enIcon : esIcon" width="20" height="20" />
            <span>{{ language.option.label }}</span>
          </div>
        </template>
      </pv-select>
    </template>
  </pv-toolbar>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  font-weight: 300;
}

.logo {
  display: flex;
  gap: 10px;
  align-items: center;
}

.language-option {
  display: flex;
  gap: 5px;
  align-items: center;
}

</style>