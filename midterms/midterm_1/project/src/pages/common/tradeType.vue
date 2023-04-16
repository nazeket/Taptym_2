<template>
  <div class="py-4 px-4 overflow-y-auto fill-height">
    <router-view/>
  </div>
</template>
<script setup>
import {provide} from "vue";
import {useRoute} from "vue-router";
import {useStore} from 'vuex'

const route = useRoute()
const store = useStore()
provide('category', store.state[route.params.tradeType])
provide('tradeType', route.name)
</script>