<template>
  <transition enter-active-class="animate__animated animate__slideInUp animate__faster"
              leave-active-class="animate__animated animate__slideOutDown animate__faster">
    <div v-if="store.state[panelName]" class="position-fixed createPanel page" ref="createPanel">
      <div class="d-flex align-center justify-space-between mb-8">
        <h4>Создайте заявку</h4>
        <icon name="close-icon" @click="store.state[panelName] = false"/>
      </div>
<!--      <the-text-input :disabled="true" :isCategory="true" bindKey="tradeType" placeholder="Категория"-->
<!--                      label="Что хотите сделать*" class="mb-4" @click="openTogglePanel('tradeType')"/>-->
      <the-text-input :disabled="true" :isCategory="true" bindKey="category" placeholder="Категория"
                      label="Выберите категорию*" class="mb-4" @click="openTogglePanel('category')"/>
      <the-text-input bindKey="title" placeholder="Toyota Camry" label="Заголовок*" class="mb-4"/>
      <the-text-input :disabled="true" :isCategory="true" bindKey="city" placeholder="Алматы" label="Город" class="mb-4"
                      @click="openTogglePanel('city')"/>
      <the-text-input bindKey="price" placeholder="1 000 ₸" label="Цена" class="mb-4"/>
      <the-text-input bindKey="images" placeholder="URL" label="Добавьте фото" class="mb-4"/>
      <div>
        <div class="input__label mb-2">Описание*</div>
        <v-textarea
            class="mb-4"
            counter="9000"
            solo
            placeholder="Добавьте текст"
            :value="store.state['Statement']['description']"
            @input="store.state['Statement']['description'] = $event.target.value"
        >

        </v-textarea>
      </div>
      <div class="myBalls mt-6" v-if="mode === 'create'">
        <div class="input__label mb-2">
          Мои баллы
        </div>
        <div class="d-flex align-center justify-space-between">
          <h5>20 баллов</h5>
          <div class="d-flex align-center" @click="pointToggle = true">
            <icon name="add-point" class="mr-1"/>
            <p>Добавить</p>
          </div>
        </div>
      </div>
      <the-button v-if="mode === 'create'" :loading="store.state['isLoading']" name="Создать" class="mt-8"
                  @click="store.state.isPanelOpen = false"
                  @click.prevent="createAnnouncement"/>
      <the-button v-if="mode === 'edit'" :loading="store.state['isLoading']" name="Сохранить" class="mt-8"
                  @click="updateAnnouncement"/>
      <the-button v-if="mode === 'edit'" :loading="store.state['loaders']['delete']" name="Удалить"
                  class="mt-2 delete-button"
                  @click="deleteStatement"/>
      <div v-show="toggle" class="overlay" @click.self="closeModal"></div>
      <transition
          enter-active-class="animate__animated animate__slideInUp animate__faster"
          leave-active-class="animate__animated animate__slideOutDown animate__faster"
      >
        <div v-if="toggle" ref="togglePanel" class="togglePanel pb-7">
          <div class="d-flex px-4 pt-1 justify-center flex-column align-center">
            <icon name="resize"/>
            <div style="width: 100%" class="d-flex align-center justify-space-between mt-3">
              <p v-if="categoryType === 'city'" class="return__back text-start" @click="closeModal">Назад</p>
              <h5 class="flex-shrink-1 flex-grow-1 text-center">
                {{ categoryType === 'city' ? 'Выберите ваш город' : 'Выберите категорию' }}</h5>
              <p v-if="categoryType === 'city'" class="return__back" @click="closeModal">Назад</p>
            </div>
          </div>
          <div v-if="categoryType === 'city'" class="searchEngine py-4 mt-4 px-4 mx-4 d-flex align-center">
            <icon name="search" class="mr-3"/>
            <input type="text" placeholder="Поиск" v-model="term">
          </div>
          <div ref="categorySelection" class="category__selection overflow-y-auto mt-2 pb-1 mb-4">
            <div v-for="dict in dictionaries" :key="dict.id"
                 class="card px-4 py-4 d-flex align-center justify-space-between"
                 @click="saveValue(dict)">
              <div class="card__name">{{ dict.name }}</div>
              <icon v-if="dict.name === store.state['Statement'][categoryType]" name="selected" class="mr-4"/>
            </div>
          </div>
        </div>
      </transition>
      <add-point :toggle="pointToggle" @update-toggle="closePointModal"/>
    </div>
  </transition>
</template>

<script setup>
import Icon from '@/components/icon.vue';
import { useStore } from 'vuex';
import TheTextInput from '@/components/form/TheTextInput.vue';
import { computed, provide, watch } from 'vue';
import { ref } from 'vue'
import AddPoint from '@/pages/common/addPoint.vue';
import TheButton from '@/components/form/TheButton.vue';
import { useRoute, useRouter } from 'vue-router';

const { mode, panelName } = defineProps({
  mode: {
    type: String, default: 'create',
  },
  panelName: {
    type: String, default: 'createPanel',
  },
})
provide('formName', 'Statement')
const store = useStore()
const route = useRoute()
const router = useRouter()
const toggle = ref(false)
const pointToggle = ref(false)
const categorySelection = ref(null)
const togglePanel = ref(null)
const createPanel = ref(null)
const newHashtagInput = ref(null)
const fileInput = ref()
const newHashtag = ref(null)
const term = ref('')
let hashtagModal = ref(false)
const categoryType = ref('tradeType')
const closeModal = () => {
  createPanel.value.style.overflowY = `auto`
  setTimeout(() => {
    toggle.value = false
    term.value = ''
  }, 300)
}
const closePointModal = () => {
  setTimeout(() => {
    pointToggle.value = false
  }, 300)
}
const dictionaries = computed(() => {
  return store.state[categoryType.value].filter((item) => {
    return item.name.toLowerCase().includes(term.value.toLowerCase())
  })
})
const openTogglePanel = (type) => {
  toggle.value = true
  categoryType.value = type
  createPanel.value.style.overflowY = `hidden`
}
watch(() => categorySelection.value,
    (value) => {
      if (value !== null) {
        value.style.maxHeight = `${screen.height * 0.5}px`
        togglePanel.value.style.height = categoryType.value === 'city' ? '100%' : 'unset'
      }
    })
const openHashtagModal = () => {
  hashtagModal.value = true
}
const saveValue = value => {
  store.state.Statement[categoryType.value] = value.name
  closeModal()
}
const addHashtag = () => {
  store.state.Statement.tags.push(newHashtag.value)
  newHashtag.value = ''
  newHashtagInput.value.focus()
}
const hashtagList = computed(() => store.state.Statement.tags)
const deleteHashtag = (hashtagName) => {
  store.state.Statement.tags = store.state.Statement.tags.filter((hashtag) => {
    if (hashtag !== hashtagName) {
      return hashtag
    }
  })
}

const previewImage = ref([])
const createAnnouncement = async () => {
  const data = {
    title: store.state.Statement.title,
    description: store.state.Statement.description,
    price: store.state.Statement.price.replaceAll(' ', ''),
    images: store.state.Statement.images,
    city: store.state.Statement.city,
    category: store.state.category.find((type)=> type.name === store.state.Statement.category).type,
    userId: String(store.state.profileData.uid)
  }
  await store.dispatch('createAnnouncement', data)
  await store.dispatch('getAnnouncementList')
  previewImage.value = []
  fileInput.value = ''
}
const deleteStatement = async () => {
  store.state.editPanel = false
  await router.go(-1)
}
const updateAnnouncement = async () => {
  await store.dispatch('updateAnnouncement')
}
</script>