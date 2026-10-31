<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>

<template>
  <section id="hero-section">
    <div id="hero-information">
      <h1>Piero Delgado</h1>
      <h2 class="hero-role">{{ t("hero-subtitle") }}</h2>
      <p class="hero-description">{{ t("hero-description") }}</p>
      <div id="hero-buttons">
        <pv-button as="a" :href="t('hero-cv-url')" target="_blank" rel="noopener"
                   :label="t('hero-button')" icon="pi pi-file-pdf" class="hero-link"/>
        <pv-button as="a" href="https://github.com/PieroD04" target="_blank" rel="noopener"
                   icon="pi pi-github" label="GitHub" severity="secondary" outlined class="hero-link"/>
        <pv-button as="a" href="https://www.linkedin.com/in/piero-delgado/" target="_blank" rel="noopener"
                   icon="pi pi-linkedin" label="LinkedIn" severity="secondary" outlined class="hero-link"/>
      </div>
    </div>
    <div id="hero-image">
      <img src="/assets/images/hero-image.jpeg" alt="Piero Delgado"/>
    </div>
  </section>
</template>

<style scoped>
#hero-section{
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 2rem;
  text-align: center;
  margin-top: 7rem;
}

#hero-information h1 {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0;
}

.hero-role {
  font-size: 1.15rem;
  font-weight: 500;
  margin: 0.5rem 0 1.5rem;
  color: var(--p-text-muted-color);
}

.hero-description {
  font-size: 1rem;
  line-height: 1.7;
  max-width: 38rem;
  margin: 0 auto;
}

#hero-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

.hero-link {
  text-decoration: none;
}

#hero-image {
  display: flex;
  justify-content: center;
  order: -1;

  & img {
    width: 100%;
    max-width: 8rem;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--p-primary-color);
  }
}

@media screen and (min-width: 768px) {
  #hero-section{
    grid-template-columns: 3fr 2fr;
    gap: 3rem;
    text-align: left;
    min-height: calc(100vh - 10rem);
    margin-top: 6rem;
  }

  #hero-information h1 {
    font-size: 3.5rem;
  }

  .hero-role {
    font-size: 1.5rem;
  }

  .hero-description {
    font-size: 1.1rem;
    margin: 0;
  }

  #hero-buttons {
    justify-content: flex-start;
  }

  #hero-image {
    order: 0;

    & img {
      max-width: 22rem;
      border-width: 6px;
    }
  }
}
</style>
