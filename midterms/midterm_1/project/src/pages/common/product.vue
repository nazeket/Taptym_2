<template>
  <div v-if="product && product.uid">
    <div class="product__page page position-relative">
      <div class="fixed__tools position-absolute d-flex align-center justify-space-between">
        <icon class="ml-4" name="return-back-bg" @click.prevent="$router.go(-1)"/>
      </div>
      <v-carousel
          cycle
          :show-arrows="false"
          fade
          height="267"
      >
        <v-carousel-item @click.prevent="viewImage(product.images)">
          <img :src="product.images" alt="">
        </v-carousel-item>
      </v-carousel>
      <div class="product__body px-4 py-4" :class="{'mt-15': !product.images}">
        <div class="product__title mb-2">{{ product.title }}</div>
        <div class="product__detail d-flex align-center justify-space-between mb-4">
          <div class="product__price">{{ floatNumberWithSpaces(product.price) }} ₸</div>
          <div class="product__location">{{ product.city }}</div>
        </div>
        <div class="product__description mb-5">
          {{ product.description }}
        </div>
        <div class="product__published__info d-flex align-center justify-space-between mb-2">
          <div class="product__author d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt="" class="author__image mr-4"/>
              <div class="author__name">User</div>
            </div>
          </div>
          <div class="published__date">{{ reformatDate(product['created_at']) }}</div>
        </div>
      </div>
      <div class="py-4 px-4">
        <v-divider class="mb-1"/>
        <h3 class="mb-4">Комментарии</h3>
        <div v-for="comment in store.state.comments" class="mb-4 comment-block px-2 py-2">
          <div class="product__author">
            <h3 class="mb-2">{{ comment.title}}</h3>
            <div class="d-flex align-center justify-space-between">
              <div>
                <icon icon-name="star" v-for="s in comment.rating"/>
              </div>
              <div class="author__name">{{ comment.userName }}</div>
            </div>
            <p class="mt-2">{{ comment.text }}</p>
          </div>
        </div>
        <v-divider class="mb-1"/>
        <div class="d-flex align-center justify-space-between">
          <vue3-star-ratings inactiveColor="#D1D1D6" :step="1" :showControl="false" v-model="rating"
                             class="px-0 py-2 mx-0 my-2 text-start d-inline-block"/>
          <h2 style="color: #2580D5">{{ rating }}</h2>
        </div>
        <div class="d-flex flex-column mt-4">
          <the-text-input placeholder="Название" bind-key="title" class="mb-2"/>
          <v-textarea
              class="mb-4"
              counter="9000"
              solo
              placeholder="Введите текст"
              :value="store.state['comment']['text']"
              @input="store.state['comment']['text'] = $event.target.value"
          >

          </v-textarea>
          <the-button :disabled="!rating || !store.state.comment.text" name="Отправить" @click.prevent="addComment"/>
        </div>
      </div>
      <div v-if="store.state.profileData.uid === 1" class="d-flex align-center fill-width mt-8 mb-4">
        <the-button name="Одобрить" :loading="store.state.loaders.approve" class="mr-4" @click="makeDecision('1')"/>
        <the-button name="Отклонять" :loading="store.state.loaders.reject" class="reverse__style border"
                    @click="makeDecision('-1')"/>
      </div>
    </div>
    <v-dialog
        v-model="openModal"
        class="image__preview"
    >
      <div class="d-flex flex-column fill-height">
        <div class="d-flex align-center justify-space-between mb-14 pb-8">
          <icon name="return-back" @click="openModal = false"/>
          <icon v-if="tradeType === 'buy'" name="favorites" :style="hasInFavorites ? 'fill: white;' : 'fill: black;'"
                @click="saveToFavorites(product.id)"/>
        </div>
        <v-carousel
            :show-arrows="false"
            height="267"
            fade
            class="flex-grow-1 flex-shrink-1"
        >
          <v-carousel-item @click.prevent="viewImage(product.images)">
            <img :src="product.images" alt="">
          </v-carousel-item>
        </v-carousel>
        <div v-if="tradeType === 'buy'" class="d-flex align-center fill-width mt-8 mb-4">
          <the-button name="Написать" class="mr-4" @click="startChat"/>
          <a class="d-block w-100" :href="`tel:${product.user.phone}`">
            <the-button name="Позвонить" class="reverse__style"/>
          </a>
        </div>
      </div>
    </v-dialog>
  </div>
  <content-detail-skeleton v-else/>
</template>

<script setup>
import Icon from "@/components/icon.vue";
import {computed, onMounted, provide, ref, watch} from "vue";
import {useStore} from "vuex";
import {reformatDate} from '@/utils/helpers.js'
import {useRoute, useRouter} from "vue-router";
import TheButton from "@/components/form/TheButton.vue";
import {floatNumberWithSpaces} from '@/utils/helpers.js'
import ContentDetailSkeleton from "@/components/skeleton/ContentDetailSkeleton.vue";
import {useToast} from "vue-toastification";
import TheTextInput from "@/components/form/TheTextInput.vue";

provide('tradeType', 'sale')
provide('formName', 'comment')
const store = useStore()
const route = useRoute()
const router = useRouter()
const tradeType = computed(() => route.params.tradeType)
const category = route.params.category
const product = ref({})
const rating = ref(0)
const toaster = useToast()
onMounted(async () => {
  product.value = await store.dispatch('getAnnouncementById', route.params.id)
  await store.dispatch('getComments', product.value.uid)
})
const saveToFavorites = async (id) => {
  const saved = store.state.favorites[category].find((item) => item.id === id)
  console.log(saved)
  if (saved) {
    toaster('Успешно добавлено в избранное')
  } else {
    toaster('Успешно удалено из избранного')
  }
}
const openModal = ref(false)
const currentImage = ref(null)
const viewImage = image => {
  currentImage.value = image
  openModal.value = true
}
const hasInFavorites = computed(() => store.state.favorites[category].find(item => item.id == route.params.id))

watch(() => route.params.id,
    async (value) => {
      if (!value) return
      product.value = {}
      store.state.similarAnnouncements = []
    }, {
      deep: true
    })
const makeDecision = async (decision) => {
  const isUpdated = await store.dispatch('updateAnnouncement', {id: route.params.id, decision})
  if (isUpdated) {
    await store.dispatch('getAnnouncementList')
    await router.go(-1)
  }
}
const addComment = async () => {
  await store.dispatch('addComment', {rating: rating.value, productId: product.value.uid})
  await store.dispatch('getComments', product.value.uid)
  rating.value = 0
}
</script>