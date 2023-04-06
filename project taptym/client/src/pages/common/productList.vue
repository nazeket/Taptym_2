<template>
  <div>
    <div class="d-flex align-center justify-center">
      <the-text-input bindKey="term" class="mr-4 mb-2 flex-shrink-1 flex-grow-1"
                      placeholder="Поиск объявлений"/>
      <the-button :loading="store.state['isLoading']" class="searchBtn" name="Поиск" @click.prevent="searchProduct"/>

    </div>
    <div class="filter__block d-flex align-center justify-space-between">
      <button @click.prevent="sortBy('price')"><span>цена</span>
        <icon name="filter"/>
      </button>
      <button @click.prevent="sortBy('rating')"><span>рейтинг</span>
        <icon name="filter"/>
      </button>
    </div>
    <v-divider class="mb-5"/>
    <div v-for="product in sortedProducts" class="vip__block d-block pt-4 px-4 pb-4 mb-4">
      <vip-block
          :product="product"/>
    </div>
  </div>
</template>

<script setup>
import TheTextInput from "@/components/form/TheTextInput.vue";
import TheButton from "@/components/form/TheButton.vue";
import VipBlock from "@/components/VipBlock.vue";
import NoContent from "@/components/NoContent.vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed, provide, reactive, ref, watch} from "vue";
import ContentSkeleton from "@/components/skeleton/ContentSkeleton.vue";
import Icon from "@/components/icon.vue";

provide('formName', 'search')
const route = useRoute()
const store = useStore()
let productList = reactive([])
watch(() => route.name,
    (value) => {
      if (value !== 'favoriteCategory') {
        productList = store.state[route.params.tradeType][value]
      } else {
        productList = store.state.buy[route.params.category]
      }
    },
    {deep: true, immediate: true})
const products = ref([])
const sortTerm = ref('rating');
const sortDESC = ref(true);
watch(() => sortTerm.value,
    () => {
      sortDESC.value = false;
    });
const sortBy = (key) => {
  if (key === sortTerm.value) {
    sortDESC.value = !sortDESC.value;
  }
  sortTerm.value = key;
};

const sortedProducts = computed(() => {
  return store.state.products.sort((a, b) => {
    if (Number(a[sortTerm.value]) > Number(b[sortTerm.value])) {
      return 1
    }
    if (Number(a[sortTerm.value]) < Number(b[sortTerm.value])) {
      return -1
    }
    return 0
  })
})
const fetchProductList = async () => {
  store.state.products = await store.dispatch('fetchProductList')
}
fetchProductList()
const searchProduct = async () => {
  store.state.products = await store.dispatch('searchProduct')
}
</script>

