import { ViteSSG } from 'vite-ssg'
import { createI18n } from "vue-i18n";
import App from './App.vue'
import PrimeVue from 'primevue/config';
import laraBase from '@primeuix/themes/lara/base';
import laraButton from '@primeuix/themes/lara/button';
import laraCard from '@primeuix/themes/lara/card';
import laraInputText from '@primeuix/themes/lara/inputtext';
import laraTextarea from '@primeuix/themes/lara/textarea';
import laraMessage from '@primeuix/themes/lara/message';
import laraToast from '@primeuix/themes/lara/toast';
import laraRipple from '@primeuix/themes/lara/ripple';
import Button from "primevue/button";
import Card from "primevue/card";
import ToastService from 'primevue/toastservice';
import './style.css'
import 'primeicons/primeicons.css';
import en from './locale/en.json'
import es from './locale/es.json'
import { routes, scrollBehavior } from './router.js'

export const createApp = ViteSSG(App, { routes, scrollBehavior }, ({ app, router }) => {
    const i18n = createI18n({
        legacy: false,
        locale: 'en',
        fallbackLocale: 'en',
        messages: {
            en: en,
            es: es,
        }
    });

    // the URL decides the language, so each prerendered page comes out in its own
    router.beforeEach(to => {
        i18n.global.locale.value = to.meta.lang;
    });

    app.use(PrimeVue, {
        ripple: true,
        theme: {
            preset: {
                ...laraBase,
                components: {
                    button: laraButton,
                    card: laraCard,
                    inputtext: laraInputText,
                    textarea: laraTextarea,
                    message: laraMessage,
                    toast: laraToast,
                    ripple: laraRipple
                }
            },
            options: {
                darkModeSelector: '.dark-mode'
            }
        }
    });
    app.use(i18n);
    app.use(ToastService);
    app.component('pv-button', Button);
    app.component('pv-card', Card);
});
