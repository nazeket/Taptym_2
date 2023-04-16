<template>
  <div class="py-4 main text__content myPoints d-flex flex-column fill-height">
    <div class="px-4">
      <div class="d-flex align-center">
        <return-back routeName="profile"/>
        <h4 class="flex-shrink-1 flex-grow-1">Мои баллы</h4>
      </div>
      <h3 class="mb-4 mt-9">40 баллов</h3>
      <p>Баллы нужны для того что бы создавать заявки. </p>
      <h5>1 балл - 1 заявка</h5>
      <p class="mt-12"><span>История</span></p>
    </div>
    <div class="history__container px-4 flex-grow-1 flex-shrink-1 mt-2 position-relative overflow-y-auto">
      <div
          v-if="history_items.length"
          v-for="item in history_items"
          :key="item.date"
          class="history__item d-flex align-center py-6 justify-space-between">
        <icon name="b" class="mr-6"/>
        <div class="flex-shrink-1 flex-grow-1 point">{{ item.point }} балл</div>
        <div class="date">{{ item.date }}</div>
      </div>
      <div v-else class="empty__points position-absolute">История пока пустая</div>
    </div>
    <div class="px-4">
      <the-button name="Добавить" class="mb-2 mt-4" @click="openModal"/>
    </div>
  </div>
  <add-point :toggle="toggle" @update-toggle="closeModal"/>
</template>

<script setup>
import ReturnBack from "@/components/ReturnBack.vue";
import TheButton from "@/components/form/TheButton.vue";
import {reactive, ref} from "vue";
import Icon from "@/components/icon.vue";
import {useRouter} from "vue-router";
import AddPoint from "@/pages/common/addPoint.vue";

const history_items = reactive([
  {
    point: 9,
    date: '14 июля 20:23'
  },
  {
    point: 42,
    date: '14 июля 12:41'
  },
  {
    point: 3,
    date: '17 июля 18:03'
  },
  {
    point: 55,
    date: '19 июля 21:16'
  },
  {
    point: 34,
    date: '30 июня 20:23'
  },
  {
    point: 14,
    date: '26 июня 17:53'
  },
  {
    point: 9,
    date: '14 июля 20:23'
  },
  {
    point: 42,
    date: '14 июля 12:41'
  },
  {
    point: 3,
    date: '17 июля 18:03'
  },
  {
    point: 55,
    date: '19 июля 21:16'
  },
  {
    point: 34,
    date: '30 июня 20:23'
  },
  {
    point: 14,
    date: '26 июня 17:53'
  },
])
const toggle = ref(false)
const newCard = ref(false)
const cardNum = ref(null)
const router = useRouter()
const openModal = () => {
  setTimeout(() => {
    toggle.value = true
  }, 200)
}
const closeModal = () => {
  setTimeout(() => {
    toggle.value = false
  }, 300)
}
</script>