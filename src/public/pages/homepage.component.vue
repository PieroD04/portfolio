<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>

<template>
  <section id="hero-section">
    <div id="hero-information">
      <h1>{{t("hero-title")}}</h1>
      <h3><i class="pi pi-spin pi-cog" style="font-size: 1.5rem"/>  {{t("hero-subtitle")}}</h3>
      <p>{{t("hero-description")}}</p>
    </div>
    <div id="hero-image">
      <img src="../../assets/images/hero-image.png" alt="hero image"/>
    </div>
  </section>
  <section id="projects-section">
    <h2>{{t("projects-title")}}</h2>
    <div id="project-carrousel">

    </div>
  </section>

</template>

<style scoped>
section {
  height: 100%;
  margin: 5rem 0;
  text-align: center;
}

#hero-section{
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 5rem;
  text-align: center;
}

#hero-information{
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;

  & p {
    width: 90%;
    margin: 0 auto;
  }
}

#hero-image {
  padding: 5rem;

  & img {
    text-align: center;
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    object-fit: cover;
  }
}

#project-carrousel {
  height: 30vh;
}

@media screen and (max-width: 1024px) {
  section {
    margin: 1rem 0;
  }

  #hero-section{
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

}

@media screen and (max-width: 768px) {
  #hero-information{
    width: 90%;
    margin: 0 auto;

    & p {
      width: 100%;
      margin: 0 auto;
    }
  }

  #hero-image {
    padding: 3rem;

    & img {
      width: 15rem;
      height: 15rem;
    }
  }
}

</style>