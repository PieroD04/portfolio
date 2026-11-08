<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { localePath } from '@/locale-path.js';
const { t, locale } = useI18n();
const route = useRoute();

const isDarkMode = ref(false);
const isMenuOpen = ref(false);
const languages = ['en', 'es'];

const navLinks = [
  { target: 'experience-section', label: 'experience-title' },
  { target: 'knowledge-section', label: 'knowledge-title' },
  { target: 'project-section', label: 'projects-title' },
  { target: 'contact-section', label: 'nav-contact' }
];

// the 404 page has no translated twin, so its switch goes to that language's home
const languagePath = (code) => localePath(route.meta.base ?? '/', code);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  const theme = isDarkMode.value ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  document.documentElement.classList.toggle('dark-mode', isDarkMode.value);
}

// the saved theme only exists in the browser, and must apply after hydration so it matches the prerendered HTML
onMounted(() => {
  isDarkMode.value = document.documentElement.classList.contains('dark-mode');
});
</script>

<template>
  <header id="navbar">
    <div id="navbar-bar">
      <router-link :to="localePath('/', locale)" class="logo" @click="isMenuOpen = false">
        <img src="/favicon.svg" alt="Piero Delgado" width="36" height="36"/>
      </router-link>

      <nav class="nav-links desktop-only">
        <router-link v-for="link in navLinks" :key="link.target" :to="{ path: localePath('/', locale), hash: `#${link.target}` }">{{ t(link.label) }}</router-link>
      </nav>

      <div class="nav-actions desktop-only">
        <pv-button :icon="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'" :aria-label="t('nav-theme')" text rounded @click="toggleDarkMode"/>
        <div class="language-switch">
          <pv-button v-for="code in languages" :key="code" as="router-link" :to="languagePath(code)" :label="code.toUpperCase()" size="small"
                     :outlined="locale !== code"/>
        </div>
      </div>

      <button type="button" class="mobile-only menu-toggle" :aria-label="t('nav-menu')" :aria-expanded="isMenuOpen"
              @click="isMenuOpen = !isMenuOpen">
        <i :class="isMenuOpen ? 'pi pi-times' : 'pi pi-bars'"/>
      </button>
    </div>

    <Transition name="menu">
      <div v-if="isMenuOpen" id="mobile-menu" class="mobile-only">
        <nav class="nav-links">
          <router-link v-for="link in navLinks" :key="link.target" :to="{ path: localePath('/', locale), hash: `#${link.target}` }" @click="isMenuOpen = false">{{ t(link.label) }}</router-link>
        </nav>
        <div class="menu-row">
          <span>{{ t('nav-theme') }}</span>
          <pv-button :icon="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'" :aria-label="t('nav-theme')" text rounded @click="toggleDarkMode"/>
        </div>
        <div class="menu-row">
          <span>{{ t('nav-language') }}</span>
          <div class="language-switch">
            <pv-button v-for="code in languages" :key="code" as="router-link" :to="languagePath(code)" :label="code.toUpperCase()" size="small"
                       :outlined="locale !== code"/>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: color-mix(in srgb, var(--p-content-background) 92%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--p-content-border-color);
}

#navbar-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: min(1100px, calc(100% - 2rem));
  height: 3.5rem;
  margin: 0 auto;
}

.logo {
  display: flex;
}

.nav-links a {
  color: inherit;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--p-primary-color);
}

.nav-actions, .language-switch {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-actions {
  gap: 0.75rem;
}

.language-switch a {
  text-decoration: none;
}

#mobile-menu {
  width: calc(100% - 2rem);
  margin: 0 auto;
  padding: 0.5rem 0 1rem;
}

#mobile-menu .nav-links {
  display: flex;
  flex-direction: column;
}

#mobile-menu .nav-links a {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--p-content-border-color);
}

.menu-enter-active,
.menu-leave-active {
  overflow: hidden;
  transition: max-height 0.25s ease, opacity 0.2s ease, padding 0.25s ease;
}

/* max-height just needs to exceed the menu's real height */
.menu-enter-to,
.menu-leave-from {
  max-height: 24rem;
}

.menu-enter-from,
.menu-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

@media (prefers-reduced-motion: reduce) {
  .menu-enter-active,
  .menu-leave-active {
    transition: none;
  }
}

.menu-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
}

.menu-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--p-text-color);
  cursor: pointer;
  font-size: 1.25rem;
}
.desktop-only {
  display: none !important;
}

@media screen and (min-width: 768px) {
  .desktop-only {
    display: flex !important;
  }

  .mobile-only {
    display: none !important;
  }

  .nav-links {
    gap: 2rem;
  }
}
</style>
