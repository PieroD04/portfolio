import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara'
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";
import Select from "primevue/select";
import Carousel from "primevue/carousel";
import Toast from "primevue/toast";
import ToastService from 'primevue/toastservice';
import TextArea from "primevue/textarea";
import Message from "primevue/message";
import InputText from "primevue/inputtext";
import Form from "@primevue/forms/form";
import './style.css'
import 'primeicons/primeicons.css';
import en from './locale/en.json'
import es from './locale/es.json'


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
        preset: Lara,
        options: {
            darkModeSelector: '.dark-mode'
        }
    }
});
app.use(i18n);
app.use(ToastService);
app.component('pv-button', Button);
app.component('pv-toolbar', Toolbar);
app.component('pv-card', Card);
app.component('pv-select', Select);
app.component('pv-carousel', Carousel);
app.component('pv-toast', Toast);
app.component('pv-message', Message);
app.component('pv-inputtext', InputText);
app.component('pv-textarea', TextArea);
app.component('pv-form', Form);
app.mount('#app')