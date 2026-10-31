import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'
import PrimeVue from 'primevue/config';
import laraBase from '@primevue/themes/lara/base';
import laraButton from '@primevue/themes/lara/button';
import laraCard from '@primevue/themes/lara/card';
import laraInputText from '@primevue/themes/lara/inputtext';
import laraTextarea from '@primevue/themes/lara/textarea';
import laraMessage from '@primevue/themes/lara/message';
import laraToast from '@primevue/themes/lara/toast';
import laraRipple from '@primevue/themes/lara/ripple';
import Button from "primevue/button";
import Card from "primevue/card";
import ToastService from 'primevue/toastservice';
import './style.css'
import 'primeicons/primeicons.css';
import en from './locale/en.json'
import es from './locale/es.json'
import { router } from './router.js'


const app = createApp(App);
const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: en,
        es: es,
    }
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
app.use(router);
app.use(ToastService);
app.component('pv-button', Button);
app.component('pv-card', Card);
app.mount('#app')
