import Homepage from '@/portfolio/pages/homepage.component.vue';
import { localePath } from '@/locale-path.js';

const description = 'Android Developer at Fitia, building mobile apps with Kotlin and Jetpack Compose. UPC Software Engineering student; side projects in Vue, React and Spring Boot.';

const pages = [
    {
        path: '/',
        component: Homepage,
        en: { title: 'Piero Delgado | Software Engineer', description },
        es: {
            title: 'Piero Delgado | Desarrollador Android',
            description: 'Desarrollador Android en Fitia, creando aplicaciones móviles con Kotlin y Jetpack Compose. Estudiante de Ingeniería de Software en la UPC (Perú); proyectos personales en Vue, React y Spring Boot.'
        }
    },
    {
        path: '/projects',
        component: () => import('@/portfolio/pages/projects.component.vue'),
        en: {
            title: 'Projects | Piero Delgado',
            description: 'Software projects by Piero Delgado, with the role, highlights and source code of each, including web apps built with Vue, React and Spring Boot.'
        },
        es: {
            title: 'Proyectos | Piero Delgado',
            description: 'Proyectos de software de Piero Delgado, con el rol, los logros y el código fuente de cada uno, incluidas aplicaciones web con Vue, React y Spring Boot.'
        }
    }
];

export const routes = [
    ...pages.flatMap(page => ['en', 'es'].map(lang => ({
        path: localePath(page.path, lang),
        component: page.component,
        meta: { ...page[lang], lang, base: page.path }
    }))),
    // prerendered to 404.html, which Netlify serves with a real 404 status for unknown URLs
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/portfolio/pages/not-found.component.vue'),
        meta: { title: 'Page not found | Piero Delgado', description, lang: 'en', noindex: true }
    }
];

export function scrollBehavior(to, from, savedPosition) {
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
    // switching language shows the same page, so stay where the reader is
    if (to.meta.base === from.meta.base && to.meta.lang !== from.meta.lang) return false;
    return { top: 0 };
}

// polls up to 3s, enough for the contact chunk on a slow connection
function waitFor(condition, attemptsLeft = 60) {
    return new Promise(resolve => {
        if (condition() || attemptsLeft === 0) resolve();
        else setTimeout(() => waitFor(condition, attemptsLeft - 1).then(resolve), 50);
    });
}
