<script setup>
import { useHead } from '@unhead/vue';
import { useRoute } from 'vue-router';
import Toolbar from "@/portfolio/components/toolbar.component.vue";
import Bottombar from "@/portfolio/components/bottombar.component.vue";
import { localePath } from '@/locale-path.js';

const route = useRoute();
const absolute = path => 'https://pierodelgado.dev' + path;

const alternate = (hreflang, lang) => ({ rel: 'alternate', hreflang, href: absolute(localePath(route.meta.base, lang)) });

useHead({
  title: () => route.meta.title,
  htmlAttrs: { lang: () => route.meta.lang },
  link: () => route.meta.noindex ? [] : [
    { rel: 'canonical', href: absolute(route.path) },
    alternate('en', 'en'),
    alternate('es', 'es'),
    alternate('x-default', 'en')
  ],
  meta: () => [
    { name: 'description', content: route.meta.description },
    { name: 'robots', content: route.meta.noindex ? 'noindex' : 'index, follow' },
    { property: 'og:url', content: absolute(route.path) },
    { property: 'og:locale', content: route.meta.lang === 'es' ? 'es_PE' : 'en_US' },
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
