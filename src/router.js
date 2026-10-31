import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/portfolio/pages/homepage.component.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Homepage },
        { path: '/projects', component: () => import('@/portfolio/pages/projects.component.vue') },
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        // leave room for the fixed navbar when jumping to a section
        if (to.hash) {
            // sections like contact load lazily, so wait briefly for the target to exist
            return new Promise(resolve => {
                const tryScroll = (attemptsLeft) => {
                    if (document.querySelector(to.hash) || attemptsLeft === 0) {
                        resolve({ el: to.hash, top: 72, behavior: 'smooth' });
                    } else {
                        setTimeout(() => tryScroll(attemptsLeft - 1), 50);
                    }
                };
                tryScroll(20);
            });
        }
        return { top: 0 };
    }
});
