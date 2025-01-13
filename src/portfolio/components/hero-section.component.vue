<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>

<template>
  <section id="hero-section">
    <div id="hero-information">
      <h1>{{t("hero-title")}}</h1>
      <h3 style="display: flex; align-items: center; justify-content: center;">
        <i class="pi pi-spin pi-cog" style="font-size: 1.5rem; margin-right: 8px;" />
        {{ t("hero-subtitle") }}
      </h3>
      <p>{{t("hero-description")}}</p>
    </div>
    <div id="hero-image">
      <img src="/assets/images/hero-image.jpeg" alt="hero image"/>
    </div>
  </section>
</template>

<style scoped>
#hero-section{
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 5rem;
  height: 100%;
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

@media screen and (max-width: 1024px) {
  #hero-section{
    display: flex;
    flex-direction: column;
    margin: 5rem 1rem 1rem;
  }

  #hero-image {
    padding: 3rem;

    & img {
      width: 15rem;
      height: 15rem;
    }
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

@media screen and (max-width: 400px) {
  #hero-image {
    padding: 1rem;

    & img {
      width: 8rem;
      height: 8rem;
    }
  }
}
</style>