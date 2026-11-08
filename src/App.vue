<script setup>
import { useHead } from '@unhead/vue';
import { useRoute } from 'vue-router';
import Toolbar from "@/portfolio/components/toolbar.component.vue";
import Bottombar from "@/portfolio/components/bottombar.component.vue";

const route = useRoute();
const url = () => 'https://pierodelgado.dev' + route.path;

useHead({
  title: () => route.meta.title,
  link: () => route.meta.noindex ? [] : [{ rel: 'canonical', href: url() }],
  meta: () => [
    { name: 'description', content: route.meta.description },
    { name: 'robots', content: route.meta.noindex ? 'noindex' : 'index, follow' },
    { property: 'og:url', content: url() },
    { property: 'og:title', content: route.meta.title },
    { property: 'og:description', content: route.meta.description }
  ]
});
</script>

<template>
  <toolbar/>
  <router-view/>
  <bottombar/>
</template>

<style scoped>

</style>
