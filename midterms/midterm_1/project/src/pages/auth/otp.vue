<template>
  <div class="page">
    <div class="auth login">
      <div class="flex-shrink-1 flex-grow-1">
        <return-back route-name="login"/>
        <h3 class="login__header">Вход</h3>
        <p>На ваш номер было отправлено сообщение с 6 значным кодом, введите его ниже</p>
        <div class="d-flex flex-row align-center px-2 mt-4">
          <v-otp-input
              style="justify-content: space-between; width: 100%;"
              input-classes="otp-input"
              separator=" "
              :num-inputs="6"
              :should-auto-focus="true"
              :is-input-num="true"
              @on-complete="handleOnComplete"
          />
        </div>
      </div>
      <div>
        <div class="register__btn">
          Не получили код?
          <a href="#">Отправить код заново</a>
        </div>
        <the-button class="mt-5" name="Войти" @click="$router.push({
        name: 'main'
        })"/>
      </div>
      <v-dialog
          v-model="dialog"
      >
        <v-card>
          <icon name="checked"/>
          <h2>Добро пожаловать!</h2>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import VOtpInput from 'vue3-otp-input';
import ReturnBack from "@/components/ReturnBack.vue";
import TheButton from "@/components/form/TheButton.vue"
import Icon from "@/components/icon.vue";
import {ref} from 'vue'

export default {
  name: "otp",
  components: {
    VOtpInput,
    TheButton,
    Icon,
    ReturnBack,
  },
  setup() {
    const otpInput = ref(null)
    const dialog = ref(false)
    const handleOnComplete = (value) => {
      dialog.value = true
    };
    return {handleOnComplete, otpInput, dialog};
  }
}
</script>
<style>
.otp-input {
  width: 40px;
  height: 48px;
  border: 1px solid #D1D1D6;
  border-radius: 8px;
  padding: 5px;
  font-size: 20px;
  text-align: center;
}

.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
</style>