<template>
  <div class="noStatement d-flex align-center flex-column justify-center fill-height">
    <icon :name="`${iconName}`"/>
    <p class="mt-2">{{ text }}</p>
  </div>
</template>

<script setup>
import Icon from "@/components/icon.vue";

const {iconName, text} = defineProps({
  iconName: {type: String},
  text: {type: String},
})
</script>

<style scoped>

</style>