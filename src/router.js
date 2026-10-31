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
        if (to.hash) return { el: to.hash, top: 72, behavior: 'smooth' };
        return { top: 0 };
    }
});
