<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <footer id="bottombar">
    <p>{{ t('copyright', { year: new Date().getFullYear() }) }}</p>
  </footer>
</template>

<style scoped>
#bottombar{
  padding: 1.5rem 1rem;
  text-align: center;
  background: var(--p-content-background);
  border-top: 1px solid var(--p-content-border-color);
}

p{
  font-size: 0.85rem;
}
</style>
