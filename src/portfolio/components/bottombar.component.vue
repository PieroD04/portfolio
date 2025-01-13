<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <pv-toolbar id="bottombar">
    <template #start>
      <!--img alt="logo" src="../../assets/icons/logo.ico" width="40" height="40"/-->
    </template>
    <template #center>
      <p>{{ t('copyright')}}</p>
    </template>
    <template #end>

    </template>
  </pv-toolbar>
</template>

<style scoped>
#bottombar{
  border: 0;
  border-radius: 0;
}
</style>