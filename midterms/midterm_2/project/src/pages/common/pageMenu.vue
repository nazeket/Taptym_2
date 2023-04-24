<template>
  <div class="page__header">
    <div class="d-flex align-center justify-center px-4 pt-4 mb-4">
      <the-text-input bind-key="term" placeholder="Что ищете?" class="flex-shrink-1 flex-grow-1"/>
      <the-button name="Поиск" class="ml-2 mt-2 w-auto px-5" @click.prevent="store.dispatch('search')"/>
    </div>
    <div class="d-flex align-center justify-space-between">
      <div class="page__title px-4 mt-2">{{store.state.profileData.uid === 1 ? 'Непроверенные объявления' : 'Рекомендованное вам'}}</div>
      <div v-if="store.state.profileData.uid !== 1" class="filter px-4 d-flex align-center" @click.prevent="filterToggle = true">
        <span class="mr-3">Фильтр</span>
        <img style="height: 18px" src="https://pixlok.com/wp-content/uploads/2021/10/Filter-Icon-d038imc3.png" alt="">
      </div>
    </div>
    <filters :toggle="filterToggle" @update-toggle="closePointModal"/>
  </div>
</template>

<script setup>
import TheTextInput from "@/components/form/TheTextInput.vue";
import {provide, ref} from "vue";
import TheButton from "@/components/form/TheButton.vue";
import {useStore} from "vuex";
import Filters from "@/pages/common/filters.vue";

provide('formName', 'search')
const store = useStore()
const filterToggle = ref(false)
const closePointModal = () => {
  setTimeout(() => {
    filterToggle.value = false
  }, 300)
}
</script>