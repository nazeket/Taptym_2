<template>
  <div v-if="toggle" class="overlay" @click.self="onClick"></div>
  <transition
      enter-active-class="animate__animated animate__slideInUp animate__faster"
      leave-active-class="animate__animated animate__slideOutDown animate__faster"
  >
    <div v-if="toggle" class="togglePanel px-4 py-1">
      <div class="d-flex justify-center flex-column align-center">
        <icon name="resize"/>
        <h5 class="mt-3">Способ оплаты</h5>
      </div>
      <div class="cards mt-2">
        <div class="card px-4 py-4 d-flex align-center mt-4" @click.self="onClick">
          <icon name="Kaspi" class="mr-4"/>
          <div class="card__name">Kaspi</div>
        </div>
        <div @click="openPanel" class="card px-4 py-4 d-flex align-center mt-4">
          <icon name="OtherCard" class="mr-4"/>
          <div class="card__name">Другая карта</div>
        </div>
      </div>
    </div>
  </transition>
  <transition enter-active-class="animate__animated animate__slideInUp animate__faster"
              leave-active-class="animate__animated animate__slideOutDown animate__faster">
    <div v-if="newCard" class="add__newCard d-flex flex-column">
      <div class="flex-grow-1 flex-shrink-1">
        <div class="d-flex text__content">
          <icon name="return-back" @click="newCard = false"/>
          <h4 class="flex-shrink-1 flex-grow-1">Другая карта</h4>
        </div>
        <div class="new__card mt-9">
          <label for="cardNum">Номер карты</label>
          <div class="d-flex cardInput py-3 px-4 mt-3">
            <input ref="cardNum" v-maska="'#### #### #### ####'" placeholder="•••• •••• •••• ••••"
                   class="flex-grow-1 flex-shrink-1"
                   type="text" id="cardNum">
            <icon name="scan-icon"/>
          </div>
        </div>
        <div class="new__card mt-4 d-flex align-center justify-space-between">
          <div class="mr-4">
            <label for="cardNum">Дата</label>
            <div class="d-flex date cardInput py-3 px-4 mt-3">
              <input v-maska="'##/##'" placeholder="ММ/ГГ" class="flex-grow-1 flex-shrink-1"
                     type="text" id="cardNum">
            </div>
          </div>
          <div>
            <label for="cardNum">CCV/CVC</label>
            <div class="d-flex ccv cardInput py-3 px-4 mt-3">
              <input v-maska="'###'" placeholder="777" class="flex-grow-1 flex-shrink-1"
                     type="text" id="cardNum">
            </div>
          </div>
        </div>
      </div>
      <the-button name="Добавить"/>
    </div>
  </transition>
</template>

<script setup>
import TheButton from "@/components/form/TheButton.vue";
import Icon from "@/components/icon.vue";
import {ref} from "vue";
const {toggle} = defineProps({
  toggle: {
    type: Boolean, default: false,
  },
})
const emits = defineEmits(["updateToggle"])
const onClick = ()=>{
  emits('updateToggle')
}
const cardNum = ref(null)
const newCard = ref(false)
const openPanel = () => {
  newCard.value = true
  setTimeout(() => {
    cardNum.value.focus()
  }, 400)
}
</script>