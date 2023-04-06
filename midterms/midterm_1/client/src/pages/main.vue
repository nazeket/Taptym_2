<template>
  <div class="d-flex main flex-column container">
    <page-menu
        v-if="['more', 'auto', 'services', 'quarter', 'tradeType'].includes($route.name)"
        ref="pageHeader"/>
    <div ref="pageBody" class="container__body flex-shrink-1 flex-grow-1 overflow-y-auto">
      <router-view/>
    </div>
    <div class="container__footer">
      <footer-menu/>
    </div>
  </div>
</template>

<script setup>
import FooterMenu from "@/components/FooterMenu.vue";
import PageMenu from "@/pages/common/pageMenu.vue";
import {useRoute} from 'vue-router'
import {onMounted, provide, ref} from "vue";
import {useStore} from "vuex";

const route = useRoute()
provide('type', route.name)
const store = useStore()

const pageBody = ref(null)
const pageHeader = ref(null)
onMounted(async() => {
  if (pageHeader.value !== null) {
    pageBody.value.style.maxHeight = `${screen.height - pageHeader.value.offsetHeight - 64}px`
  }
})
</script>