<template>
  <button :disabled="disabled" class="btn-primary">
    <img v-if="loading" src="../../assets/loader.gif" alt="">
    <span v-else>{{ name }}</span>
  </button>
</template>

<script setup>
const {name, disabled, loading} = defineProps({
  name: {type: String, default: null},
  disabled: {type: Boolean, default: false},
  loading: {type: Boolean, default: false},
})
</script>

<style scoped>

</style>