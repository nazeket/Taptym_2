<template>
    <div class="px-4 py-4">
      <div class="d-flex my-10 align-center justify-center">
        <img src="@/assets/logo.svg" alt="" style="height: 35px">
      </div>
      <div class="d-flex justify-center banner1">
        <img src="@/assets/banner1.png" alt="">
      </div>
      <h3>Создавайте заявку в пару <br> кликов </h3>
      <p>Добавляйте свою услуги, жилье, автомобиль, или вещи которые хотите продать или купить.</p>
      <the-button name="Начать" class="btn-primary py-4 mt-6 mb-4"/>
      <div class="d-flex bottom align-center justify-center">
        <span>Уже есть аккаунт? <router-link to="/auth/login"> Войти</router-link></span>
      </div>
    </div>
  </template>
  
  <script setup>
  
  import TheButton from "@/components/form/TheButton.vue";
  </script>
  <style lang="scss">
  .banner1 {
    img {
      max-width: 285px;
    }
  }
  
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-top: 23px;
    margin-bottom: 12px;
  }
  
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
  }
  
  .bottom{
    padding-bottom: 30px;
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 18px;
      color: #8E8E93;
  
      a {
        color: #2580D5;
      }
    }
  }
  
  .v-btn {
    &__content {
      color: white;
    }
  }
  </style>