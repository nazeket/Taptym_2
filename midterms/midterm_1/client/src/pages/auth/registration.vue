<template>
  <div class="page">
    <v-form v-model="valid" lazy-validation ref="form" class="auth d-flex flex-column">
      <div class="flex-shrink-1 flex-grow-1">
        <return-back/>
        <h3 class="login__header">Регистрация</h3>
        <the-text-input bindKey="name" label="ФИО" placeholder="ФИО"/>
        <the-text-input bindKey="email" rule-type="email" label="Электронная почта" placeholder="taptym@gmail.com"/>
        <the-phone-input bindKey="phone" label="Телефон" placeholder="+7 (000) 000 00 00" class="mt-4"/>
        <the-password-input bindKey="password" label="Пароль" class="mt-4"/>
        <the-password-input bindKey="password_confirmation" label="Повторите пароль" class="mt-4"/>
      </div>
      <div>
        <the-button class="mt-5" :loading="store.state['isLoading']" name="Зарегистрироваться" @click.prevent="submit"/>
        <div class="register__btn">
          У вас уже есть аккаунт?
          <router-link to="login">Войти</router-link>
        </div>
      </div>
      <v-dialog
          v-model="dialog"
      >
        <v-card>
          <icon name="checked"/>
          <h2>Регистрация прошла успешно!</h2>
        </v-card>
      </v-dialog>
    </v-form>
  </div>
</template>

<script setup>
import ReturnBack from "@/components/ReturnBack.vue";
import TheTextInput from "@/components/form/TheTextInput.vue";
import ThePasswordInput from "@/components/form/ThePasswordInput.vue"
import TheButton from "@/components/form/TheButton.vue"
import ThePhoneInput from "@/components/form/ThePhoneInput.vue";
import Icon from "@/components/icon.vue";
import {provide, ref} from 'vue'
import {useStore} from "vuex";

const store = useStore()
const dialog = ref(false);
provide('formName', 'RegisterCredentials')
const form = ref(null)
const valid = ref(false)
const submit = async() => {
  const registered = await store.dispatch('register')
  if (!registered) return
  dialog.value = true
}
</script>