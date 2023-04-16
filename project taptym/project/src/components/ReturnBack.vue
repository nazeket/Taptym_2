<template>
  <icon name="return-back" @click.prevent="$router.push({name: `${routeName}`})"/>
</template>

<script setup>

import Icon from "@/components/icon.vue";
const {routeName} = defineProps({
  routeName: {type: String, default: 'main'}
})
</script>

<style scoped>

</style>