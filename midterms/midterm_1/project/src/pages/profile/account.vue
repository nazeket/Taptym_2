<template>
  <div class="main">
    <div class="account px-4 pt-8">
      <div class="d-flex align-center justify-space-between">
        <return-back routeName="profile"/>
        <h4>Личные данные</h4>
        <icon name="Trash" @click.prevent="dialog = true"/>
      </div>
      <div class="account__avatar d-flex align-center justify-center">
        <img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""/>
      </div>
      <the-text-input bindKey="name" label="Имя" placeholder="Arman"/>
      <the-text-input bindKey="email" label="Электронная почта" rule-type="email" placeholder="taptym@gmail.com"
                      class="mt-4"/>
      <the-phone-input bindKey="phoneNumber" label="Телефон" placeholder="+7 (000) 000 00 00" class="mt-4"/>
      <the-password-input bindKey="password1" label="Пароль" class="mt-4"/>
      <the-password-input bindKey="password2" label="Повторите пароль" class="mt-4"/>
      <the-button :loading="store.state.isLoading" name="Сохранить"/>
    </div>
    <v-dialog
        v-model="dialog"
        class="glassBg"
    >
      <v-card class="px-4 pt-5 pb-2">
        <h2>Хотите удалить аккаунт?</h2>
        <p class="mt-1">Все ваши заявки будут удалены и вы не сможете их восстановить.</p>
        <div class="actions d-flex align-center justify-space-between mt-2">
          <button class="cancel" @click="dialog = !dialog">Отмена</button>
          <button class="delete" @click="deleteAccount">Удалить</button>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import ReturnBack from "@/components/ReturnBack.vue"
import Icon from "@/components/icon.vue";
import TheTextInput from "@/components/form/TheTextInput.vue";
import ThePhoneInput from "@/components/form/ThePhoneInput.vue";
import ThePasswordInput from "@/components/form/ThePasswordInput.vue"
import {provide} from "vue";
import TheButton from "@/components/form/TheButton.vue";
import {ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const dialog = ref(false)
provide('formName', 'ProfileData')
const store = useStore()
const router = useRouter()
const deleteAccount = async () => {
  localStorage.clear()
  await router.push({name: 'login'})
}
</script>