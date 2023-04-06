<template>
  <div v-if="product.uid">
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
        <v-carousel-item v-for="image in 1" :key="image" @click.prevent="viewImage(image)">
          <img :src="product.image_url" alt="">
        </v-carousel-item>
      </v-carousel>
      <div class="product__body px-4 py-4" :class="{'mt-15': !product.image_url}">
        <div class="product__title mb-2">{{ product.title }}</div>
        <div class="product__detail d-flex align-center justify-space-between mb-4">
          <div class="product__price">{{ floatNumberWithSpaces(product.price) }} ₸</div>
        </div>
        <div class="product__description mb-5">
          <b>Описание:</b> {{ product.description }}
        </div>
        <div class="product__description d-flex align-center mb-5">
          <img v-for="(rating) in Number(product.rating)" class="rating-star" :key="rating"
               src="https://pngimg.com/d/star_PNG41474.png"
               alt="">
        </div>
        <div v-if="product.comment" class="product__description mb-5">
          <b>Комментарий: </b>{{ product.comment }}
        </div>
      </div>
    </div>
    <statement mode="edit" panel-name="editPanel"/>
    <v-dialog
        v-model="openModal"
        class="image__preview"
    >
      <div class="d-flex flex-column fill-height">
        <div class="d-flex align-center justify-space-between mb-14 pb-8">
          <icon name="return-back" @click="openModal = false"/>
        </div>
        <v-carousel
            :show-arrows="false"
            height="267"
            fade
            class="flex-grow-1 flex-shrink-1"
        >
          <v-carousel-item v-for="image in 1" :key="image" @click.prevent="viewImage(image)">
            <img :src="product.image_url" alt="">
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-dialog>
    <div class="px-4">
      <v-textarea
          class="mb-4"
          counter="9000"
          solo
          placeholder="Текст"
          @input="commentValue = $event.target.value"
      >

      </v-textarea>
      <the-button class=" fill-width" name="Сохранить" @click.prevent="updateProduct"/>
    </div>
  </div>
  <content-detail-skeleton v-else/>
</template>

<script setup>
import Icon from "@/components/icon.vue";
import {computed, onMounted, provide, ref} from "vue";
import Statement from "@/pages/common/statement.vue";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import TheButton from "@/components/form/TheButton.vue";
import {floatNumberWithSpaces} from '@/utils/helpers.js'
import ContentDetailSkeleton from "@/components/skeleton/ContentDetailSkeleton.vue";

provide('tradeType', 'sale')
const store = useStore()
const route = useRoute()
const router = useRouter()
const tradeType = computed(() => route.params.tradeType)
const category = route.params.category
const product = ref({})
onMounted(async () => {
  const result = await store.dispatch('getAnnouncementById', route.params.id)
  product.value = result[0]
})
const openModal = ref(false)
const currentImage = ref(null)
const viewImage = image => {
  currentImage.value = image
  openModal.value = true
}
const commentValue = ref()
const updateProduct = async () => {
  const result = await store.dispatch('updateAnnouncement', {id: route.params.id, comment: commentValue.value})
  if (result) {
    const result = await store.dispatch('getAnnouncementById', route.params.id)
    product.value = result[0]
  }
  commentValue.value = ''
}
</script>