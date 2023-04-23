<template>
  <div class="px-4 pt-2 pb-5 footer__menu d-flex align-center justify-space-between">
    <router-link class="menu__item" :to="{name: 'tradeType', params: {tradeType: 'sell'}}">
      <Icon name="home"/>
      <div class="item__title">Главная</div>
    </router-link>
    <router-link :to="{name: 'favorites'}" class="menu__item">
      <Icon name="document"/>
      <div class="item__title">Избранное</div>
    </router-link>
    <div class="menu__item" @click="store.state.createPanel = true">
      <Icon name="plus"/>
      <div class="item__title">Создать</div>
    </div>
    <router-link :to="{name: 'chat'}" class="menu__item">
      <Icon name="chat"/>
      <div class="item__title">Сообщения</div>
    </router-link>
    <router-link :to="{name: 'profile'}" class="menu__item">
      <Icon name="profile"/>
      <div class="item__title">Профиль</div>
    </router-link>
  </div>
</template>

<script setup>
import Icon from "@/components/icon.vue";
import {useStore} from 'vuex'

const store = useStore()
</script>