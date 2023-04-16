<template>
  <router-link
      v-if="productList.length"
      v-for="product in productList"
      :key="product.id"
      :to="{name: 'product', params: {
        tradeType: $route.params.tradeType ? $route.params.tradeType : 'buy',
        category: $route.params.category ? $route.params.category : $route.name,
        id: product.id}}"
      class="vip__block d-block px-4 pb-4 mb-4">
    <announcement-block
        :product="product"/>
  </router-link>
  <content-skeleton v-if="!productList.length && store.state.loaders.isContentLoading"/>
  <no-content v-if="!productList.length && !store.state.loaders.isContentLoading" iconName="no-statement-icon" text="У вас пока нет заявок"/>
</template>

<script setup>
import AnnouncementBlock from "@/components/AnnouncementBlock.vue";
import NoContent from "@/components/NoContent.vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {provide, reactive, watch} from "vue";
import ContentSkeleton from "@/components/skeleton/ContentSkeleton.vue";

const route = useRoute()
const store = useStore()
let productList = reactive([])
watch(() => route.name,
    (value) => {
      if (value !== 'favoriteCategory') {
        productList = store.state[route.params.tradeType][value]
      } else {
        productList = store.state.favorites[route.params.category]
      }
    },
    {deep: true, immediate: true})
</script>
