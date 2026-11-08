<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <section id="not-found-page">
    <h1 class="section-title">{{ t('not-found-title') }}</h1>
    <router-link to="/" class="back-link"><i class="pi pi-arrow-left"/> {{ t('projects-back') }}</router-link>
  </section>
</template>

<style scoped>
#not-found-page{
  flex: 1;
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
</style>

<style>
/* this page is shorter than the viewport, so stretch it to keep the footer at the bottom */
#app:has(#not-found-page){
  display: flex;
  flex-direction: column;
}
</style>
