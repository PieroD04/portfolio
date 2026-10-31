import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/portfolio/pages/homepage.component.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Homepage, meta: { title: 'Piero Delgado | Software Engineer' } },
        { path: '/projects', component: () => import('@/portfolio/pages/projects.component.vue'), meta: { title: 'Projects | Piero Delgado' } },
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ],
    scrollBehavior(to, from, savedPosition) {
        // on reload the saved position points into the lazy contact section, so wait until
        // the page is tall enough again; otherwise the browser clamps the scroll to projects
        if (savedPosition) {
            return waitFor(() => document.documentElement.scrollHeight >= savedPosition.top + window.innerHeight)
                .then(() => savedPosition);
        }
        // leave room for the fixed navbar when jumping to a section
        if (to.hash) {
            return waitFor(() => document.querySelector(to.hash))
                .then(() => ({ el: to.hash, top: 72, behavior: 'smooth' }));
        }
        return { top: 0 };
    }
});

// every route shares index.html, so point the canonical at the real URL or Google treats /projects as a copy of /
router.afterEach(to => {
    document.title = to.meta.title;
    document.querySelector('link[rel="canonical"]').href = 'https://pierodelgado.dev' + to.path;
});

// polls up to 3s, enough for the contact chunk on a slow connection
function waitFor(condition, attemptsLeft = 60) {
    return new Promise(resolve => {
        if (condition() || attemptsLeft === 0) resolve();
        else setTimeout(() => waitFor(condition, attemptsLeft - 1).then(resolve), 50);
    });
}
