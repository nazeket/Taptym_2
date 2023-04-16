<template>
  <div v-if="product.images.length" class="block__image">
    <img :src="product.images[0]" alt="">
  </div>
  <div class="block__title pb-2 pt-4">
    {{ product.title }}
  </div>
  <div class="block__content__tags tags d-flex align-center flex-wrap">
    <div v-for="tag in product.tags" :key="tag" class="tag"># {{ tag }}
    </div>
  </div>
  <div class="d-flex align-center justify-space-between pt-5">
    <slot>
      <div class="block__content__count">
        Найдено: <span>{{product.similarTagsCount}}</span>
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