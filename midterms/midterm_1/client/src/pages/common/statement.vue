<template>
  <transition enter-active-class="animate__animated animate__slideInUp animate__faster"
              leave-active-class="animate__animated animate__slideOutDown animate__faster">
    <div v-if="store.state[panelName]" class="position-fixed createPanel page" ref="createPanel">
      <div class="d-flex align-center justify-space-between mb-8">
        <h4>{{ mode === 'create' ? 'Создайте заявку' : 'Редактировать заявку' }}</h4>
        <icon name="close-icon" @click="store.state[panelName] = false"/>
      </div>
      <the-text-input bindKey="title" placeholder="Toyota Camry" label="Заголовок*" class="mb-4"/>
      <the-text-input bindKey="description" placeholder="Toyota Camry" label="Описание*" class="mb-4"/>
      <the-text-input bindKey="price" placeholder="Toyota Camry" label="Цена*" class="mb-4"/>
      <the-text-input bindKey="image_url" placeholder="Toyota Camry" label="URL изображения*" class="mb-4"/>
      <the-text-input bindKey="rating" placeholder="Toyota Camry" label="Рейтинг*" class="mb-4"/>

      <the-button v-if="mode === 'create'" :loading="store.state['isLoading']" name="Создать" class="mt-8"
                  @click.prevent="createAnnouncement"/>
    </div>
  </transition>
</template>

<script setup>
import Icon from "@/components/icon.vue";
import {useStore} from "vuex";
import TheTextInput from "@/components/form/TheTextInput.vue";
import {computed, onMounted, provide, watch} from "vue";
import {ref} from "vue"
import AddPoint from "@/pages/common/addPoint.vue";
import TheButton from "@/components/form/TheButton.vue";
import {useRoute, useRouter} from "vue-router";

const {mode, panelName} = defineProps({
  mode: {
    type: String, default: 'create',
  },
  panelName: {
    type: String, default: 'createPanel',
  },
})
provide('formName', 'Statement')
const store = useStore()
const router = useRouter()
const categorySelection = ref(null)
const togglePanel = ref(null)
const createPanel = ref(null)
const categoryType = ref('tradeType')

watch(() => categorySelection.value,
    (value) => {
      if (value !== null) {
        value.style.maxHeight = `${screen.height * 0.5}px`
        togglePanel.value.style.height = categoryType.value === 'city' ? '100%' : 'unset'
      }
    })
const createAnnouncement = async () => {
  await store.dispatch('createAnnouncement')
  store.state.products = await store.dispatch('fetchProductList')
}
</script>