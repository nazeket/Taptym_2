<template>
  <router-link
      v-if="store.state['announcements'].length && !store.state.loaders.isContentLoading"
      v-for="product in filtered"
      :key="product.uid"
      :to="{name: 'product', params: {
        tradeType: 'buy',
        category: $route.name,
        id: product.uid}}"
      class="vip__block d-block px-4 pb-4 mb-4">
    <announcement-block
        :product="product"/>
  </router-link>
  <no-content
      v-if="!store.state['announcements'].length && !store.state.loaders.isContentLoading"
      iconName="no-statement-icon" text="Здесь будут показываться объявления."/>
  <content-skeleton
      v-if="store.state.loaders.isContentLoading"/>
</template>

<script setup>
import AnnouncementBlock from "@/components/AnnouncementBlock.vue";
import NoContent from "@/components/NoContent.vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed, provide, reactive, watch} from "vue";
import ContentSkeleton from "@/components/skeleton/ContentSkeleton.vue";

const route = useRoute()
const store = useStore()
const filtered = computed(() => {
  if (store.state.filter.length) {
    return store.state['announcements'].sort((p1, p2) =>
        (Number(p1[store.state.filter[0]]) < Number(p2[store.state.filter[0]])) ? 1 : (Number(p1[store.state.filter[0]]) > Number(p2[store.state.filter[0]])) ? -1 : 0)
  }
  return store.state['announcements']
})
</script>
