<template>
  <div v-if="product.images" class="block__image">
    <img :src="product.images" alt="">
  </div>
  <div class="block__title pb-2 pt-4">
    {{ product.title }}
  </div>
  <div class="block__content__tags tags d-flex align-center flex-wrap">
    <div class="price">{{ product.price}}  ₸</div>
  </div>
  <div class="d-flex align-center justify-space-between pt-5">
    <slot>
      <div class="block__content__count">
        Найдено: <span>{{product.similarTagsCount ? product.similarTagsCount : '0'}}</span>
      </div>
      <div class="block__content__date">
        {{ reformatDate(product['created_at']) }}.
      </div>
    </slot>
  </div>
</template>

<script setup>
import {reformatDate} from '@/utils/helpers.js'

const {product} = defineProps({
  product: {
    type: Object, default: null
  },
})
</script>