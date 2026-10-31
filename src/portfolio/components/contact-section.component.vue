<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import {FormService} from "@/portfolio/services/form.service.js";
// registered here instead of globally so they ship in this section's lazy-loaded chunk
import PvForm from "@primevue/forms/form";
import PvInputtext from "primevue/inputtext";
import PvTextarea from "primevue/textarea";
import PvMessage from "primevue/message";
import PvToast from "primevue/toast";

const toast = useToast();

const initialValues = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const botField = ref('');
// a field shows its error only from a send attempt until it becomes valid; clearing it again stays quiet until the next send
const showError = ref({ name: false, email: false, message: false });

const resolver = ({ values }) => {
  const errors = {};
  if (!values.name) {
    errors.name = [{ message: t('invalid-name') }];
  }
  if (!values.email || !values.email.includes('@')) {
    errors.email = [{ message: t('invalid-email') }];
  }
  if (!values.message) {
    errors.message = [{ message: t('invalid-message') }];
  }

  for (const field in showError.value) {
    if (!errors[field]) showError.value[field] = false;
  }

  return {
    errors
  };
}

const onFormSubmit = async (e) => {
  for (const field in showError.value) {
    showError.value[field] = !!e.states[field]?.invalid;
  }
  if (!e.valid) return;

  if (isSubmitting.value) return;
  isSubmitting.value = true;

  try {
    const formData = {
      name: e.states.name?.value,
      email: e.states.email?.value,
      message: e.states.message?.value,
      'bot-field': botField.value
    };
    const success = await FormService.sendForm(formData);
    if (success) {
      e.reset();
    }

    toast.add({
      severity: success ? 'success' : 'error',
      summary: t(success ? 'success-message' : 'error-message'),
      life: 3000
    });
  } catch (error) {
    toast.add({ severity: 'error', summary: t('error-message'), life: 3000 });
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>

  <section id="contact-section">
    <div id="contact-intro">
      <h2 class="section-title">{{ t("contact-title") }}</h2>
      <h3>
        <span>{{t('contact-subtitle.bold')}}</span>
        {{ t('contact-subtitle.normal') }}
      </h3>
    </div>
    <div id="contact-container">
      <div id="contact-information">
        <div class="contact-item">
          <a href="mailto:pierod0411@gmail.com">
            <i class="pi pi-envelope"/>
            <p>Email</p>
          </a>
        </div>
        <div class="contact-item">
          <a href="https://github.com/PieroD04">
            <i class="pi pi-github"/>
            <p>GitHub</p>
          </a>
        </div>
        <div class="contact-item">
          <a href="https://www.linkedin.com/in/piero-delgado/">
            <i class="pi pi-linkedin"/>
            <p>Linkedin</p>
          </a>
        </div>
      </div>
      <div id="contact-form">
        <pv-form v-slot="$form" :initialValues :resolver @submit="onFormSubmit">
          <div id="contact-form-fields">
            <div class="contact-form-field">
              <pv-inputtext name="name" type="text" :placeholder="t('contact-name')" :invalid="showError.name && $form.name?.invalid" fluid />
              <pv-message v-if="showError.name && $form.name?.invalid" severity="error" size="small" variant="simple">{{ $form.name.error.message }}</pv-message>
            </div>
            <div class="contact-form-field">
              <pv-inputtext name="email" type="email" :placeholder="t('contact-email')" :invalid="showError.email && $form.email?.invalid" fluid />
              <pv-message v-if="showError.email && $form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error.message }}</pv-message>
            </div>
            <div class="contact-form-field">
              <pv-textarea style="resize: none;" name="message" :placeholder="t('contact-message')" rows="5" :invalid="showError.message && $form.message?.invalid" fluid />
              <pv-message v-if="showError.message && $form.message?.invalid" severity="error" size="small" variant="simple">{{ $form.message.error.message }}</pv-message>
            </div>
          </div>
          <!-- honeypot: invisible to people, bots that fill it get their submission dropped by Netlify -->
          <input v-model="botField" name="bot-field" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true"/>
          <pv-button :disabled="isSubmitting" type="submit" :label="t('contact-button')" />
        </pv-form>
      </div>
    </div>

    <pv-toast position="bottom-right"/>
  </section>
</template>

<style scoped>
.honeypot{
  position: absolute;
  left: -9999px;
}

.section-title::after{
  margin-left: auto;
  margin-right: auto;
}

:deep(h3 span) {
  color: var(--p-primary-color);
}

#contact-section{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#contact-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
}

#contact-information {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  align-items: center;
}

.contact-item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--p-secondary-color);
  text-decoration: none;
}

.contact-item a:hover {
  color: var(--p-primary-color);
}

.contact-item i {
  font-size: 1.5rem;
}

.contact-item p {
  font-size: 0.9rem;
}

#contact-form {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 1rem;
  background-color: var(--p-content-background);
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075);
}

#contact-form-fields {
  display: grid;
  gap: 0.5rem;
  margin: 0.5rem;
}

.contact-form-field{
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

@media screen and (min-width: 768px) {
  #contact-container {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  .contact-item i {
    font-size: 2rem;
  }

  .contact-item p {
    font-size: 1rem;
  }

  #contact-form {
    max-width: 25rem;
  }
}
</style>
