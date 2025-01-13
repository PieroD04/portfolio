<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import {FormService} from "@/portfolio/services/form.service.js";

const toast = useToast();

const initialValues = ref({
  name: '',
  email: '',
  message: ''
});

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

  return {
    errors
  };
}

const onFormSubmit = async (e) => {
  if (e.valid) {
    const formData = {
      name: e.states.name?.value,
      email: e.states.email?.value,
      message: e.states.message?.value
    };
    const success = await FormService.sendForm(formData);
    if (success) {
      toast.add({ severity: 'success', summary: t('success-message'), life: 3000 });
    } else {
      toast.add({ severity: 'error', summary: t('error-message'), life: 3000 });
    }
  } else {
    toast.add({ severity: 'error', summary: t('error-message'), life: 3000 });
  }
};
</script>

<template>

  <section id="contact-section">
    <div id="contact-intro">
      <h2>{{ t("contact-title") }}</h2>
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
        <pv-form v-slot="$form" :validate-on-blur="true" :initialValues :resolver @submit="onFormSubmit">
          <div id="contact-form-fields">
            <div class="contact-form-field">
              <pv-inputtext name="name" type="text" :placeholder="t('contact-name')" fluid />
              <pv-message v-if="$form.name?.invalid" severity="error" size="small" variant="simple">{{ $form.name.error.message }}</pv-message>
            </div>
            <div class="contact-form-field">
              <pv-inputtext name="email" type="email" :placeholder="t('contact-email')" fluid />
              <pv-message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error.message }}</pv-message>
            </div>
            <div class="contact-form-field">
              <pv-textarea style="resize: none;" name="message" :placeholder="t('contact-message')" rows="5" fluid />
              <pv-message v-if="$form.message?.invalid" severity="error" size="small" variant="simple">{{ $form.message.error.message }}</pv-message>
            </div>
          </div>
          <pv-button :disabled="!$form.valid" type="submit" :label="t('contact-button')" />
        </pv-form>
      </div>
    </div>

    <pv-toast position="bottom-right"/>
  </section>
</template>

<style scoped>

h2{
  margin: 0;
}

:deep(h3 span) {
  color: var(--p-primary-color);
}

#contact-section{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 3rem 0;
}

#contact-intro{
  text-align: center;
  margin: 0 1rem;
}

#contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

#contact-information {
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.contact-item i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.contact-item p {
  margin: 0;
  text-align: center;
  font-size: 1rem;
}

#contact-information a {
  color: var(--p-secondary-color);
  font-size: 1.2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

#contact-information a:hover {
  color: var(--p-primary-color);
}

#contact-form {
  width: 25rem;
  max-width: 95%;
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

@media screen and (max-width: 768px) {
  #contact-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  #contact-form {
    width: 100%;
  }

  .contact-item {
    margin-top: 0.75rem;
  }

  .contact-item i {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .contact-item p {
    margin: 0;
    text-align: center;
    font-size: 0.75rem;
  }
}

</style>