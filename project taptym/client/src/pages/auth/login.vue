<template>
  <div class="page">
    <v-form ref="form" v-model="valid" class="auth login" lazy-validation>
      <div class="flex-shrink-1 flex-grow-1">
        <return-back/>
        <h3 class="login__header">Вход</h3>
        <the-text-input bindKey="email" rule-type="email" label="Электронная почта или телефон"
                        placeholder="taptym@gmail.com"/>
        <the-password-input bindKey="password" label="Пароль" class="mt-4 pb-8"/>
        <the-button :disabled="!canSubmit" :loading="store.state['isLoading']" name="Войти" @click.prevent="submit"/>
        <div class="dotted__label my-5">
          <span>ИЛИ</span>
        </div>
        <div class="login__with">
          <icon name="google"/>
          <div class="text">Войти через Google</div>
        </div>
        <div class="login__with" @click.prevent="loginBy('telegram')">
          <icon name="telegram"/>
          <div class="text">Войти через Telegram</div>
        </div>
      </div>
      <div class="register__btn">
        Нет аккаунта?
        <router-link to="registration">Зарегистрируйтесь</router-link>
      </div>
    </v-form>
  </div>
</template>

<script setup>
import ReturnBack from "@/components/ReturnBack.vue";
import ThePasswordInput from "@/components/form/ThePasswordInput.vue";
import TheTextInput from "@/components/form/TheTextInput.vue";
import TheButton from "@/components/form/TheButton.vue";
import Icon from "@/components/icon.vue";
import {useStore} from 'vuex'
import {onMounted, provide, ref, watch} from 'vue'
import {useRouter} from "vue-router";

const router = useRouter()
const valid = ref(false)
const canSubmit = ref(true)
const form = ref(null)
const store = useStore()
provide('formName', 'LoginCredentials')
const submit = async () => {
  const loggedIn = await store.dispatch('login')
  if (loggedIn) {
    await router.push('/dashboard/sell/more')
  }
}
const loginBy = async (providerName) => {
  await store.dispatch('loginBy', providerName)
}

onMounted(async () => {
  if (localStorage.getItem('accessToken')) {
    await router.push({name: 'main'})
  }
})
</script>