<script setup>
import { ref, onMounted } from 'vue';
import Toolbar from "@/portfolio/components/toolbar.component.vue";
import Homepage from "@/portfolio/pages/homepage.component.vue";
import Bottombar from "@/portfolio/components/bottombar.component.vue";
import Loadingpage from "@/portfolio/pages/loadingpage.component.vue";

const loading = ref(true);

onMounted(() => {
  window.onload = () => {
    loading.value = false;
  };
});
</script>

<template>
  <loadingpage v-if="loading" />
  <toolbar/>
  <homepage/>
  <bottombar/>
</template>

<style scoped>

</style>
