<template>
  <div class="page__header">
    <div class="page__title px-4 mt-2">{{ pageHeader }}</div>
    <div class="page__menu d-flex justify-space-between align-center">
      <router-link :to="{name: 'more'}" class="page__menu__item"><span>Прочее</span></router-link>
      <router-link :to="{name: 'auto'}" class="page__menu__item"><span>Авто</span></router-link>
      <router-link :to="{name: 'quarter'}" class="page__menu__item"><span>Жилье</span></router-link>
      <router-link :to="{name: 'services'}" class="page__menu__item"><span>Услуги</span></router-link>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const pageHeader = ref()
watch(() => route.params.tradeType,
    (value) => {
      pageHeader.value = value === 'buy' ? 'Куплю' : 'Продаю'
    }, {
      deep: true,
      immediate: true
    })
</script>