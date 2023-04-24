<template>
  <div v-if="toggle" class="overlay" @click.self="onClick"></div>
  <transition
      enter-active-class="animate__animated animate__slideInUp animate__faster"
      leave-active-class="animate__animated animate__slideOutDown animate__faster"
  >
    <div v-if="toggle" class="togglePanel px-4 py-1">
      <div class="d-flex justify-center flex-column align-center">
        <icon name="resize"/>
        <h5 class="mt-3">Фильтры</h5>
      </div>
      <div class="cards mt-2">
        <v-switch v-model="filter" name="filter" label="Фильтрация по цене" hide-details value="price"
                  color="#2580D5"></v-switch>
        <v-switch v-model="filter" name="filter" label="Фильтрация по рейтингу" hide-details color="#2580D5"
                  value="rating"></v-switch>
      </div>
    </div>
  </transition>
</template>

<script setup>
import Icon from "@/components/icon.vue";
import {ref, watch} from "vue";
import {useStore} from "vuex";

const {toggle} = defineProps({
  toggle: {
    type: Boolean, default: false,
  },
})
const store = useStore()

const emits = defineEmits(["updateToggle"])
const onClick = () => {
  emits('updateToggle')
}
const newCard = ref(false)
const filter = ref(['rating'])

watch(() => filter.value, () => {
  if (filter.value.length === 2) {
    filter.value = [filter.value[1]]
    store.state.filter = filter.value
  }
})
</script>