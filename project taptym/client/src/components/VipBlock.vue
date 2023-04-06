<template>
  <div class="block__image">
    <img :src="product.image_url" alt="">
  </div>
  <router-link :to="{name: 'product', params: {tradeType: 'sell', category: 'more', id: product.uid}}">
    <div class="block__title pb-2 pt-4">
      {{ product.title }}
    </div>
  </router-link>
  <div class="block__content__tags tags d-flex align-center flex-wrap">
  </div>
  <div class="d-flex align-center justify-space-between pt-5">
    <slot>
      <div class="d-flex flex-column">
        <div class="block__content__count">
          Описание: <span>{{product.description}}</span>
        </div>
        <div class="block__content__count my-4">
          Цена: <span>{{floatNumberWithSpaces(product.price)}} ₸</span>
        </div>
        <div class="product__description d-flex align-center mb-5">
          <img v-for="(rating) in Number(product.rating)" class="rating-star" :key="rating" src="https://pngimg.com/d/star_PNG41474.png"
               alt="">
        </div>
      </div>
    </slot>
  </div>
</template>

<script setup>
// import {reformatDate} from '@/utils/helpers.js'

import {floatNumberWithSpaces} from "../utils/helpers.js";

const {product} = defineProps({
  product: {
    type: Object, default: null
  },
})
</script>