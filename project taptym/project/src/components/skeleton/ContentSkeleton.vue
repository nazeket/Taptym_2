<template>
  <div class="content__skeleton px-4 py-4 mb-4" v-for="i in 5" :key="i">
    <div class="content__image">
      <Skeletor height="160px"/>
    </div>
    <div class="content__title mt-4 mb-2">
      <Skeletor width="54%"/>
    </div>
    <div class="d-flex align-center justify-space-between flex-wrap content__description">
      <Skeletor width="45%" class="mr-3 mb-1"/>
      <Skeletor width="45%" class="mr-3 mb-1"/>
    </div>
    <div class="d-flex align-center justify-space-between mt-3">
      <div class="d-flex align-center">
        <Skeletor circle width="32px" height="32px" class="mr-2"/>
        <Skeletor width="110px"/>
      </div>
      <Skeletor width="100px"/>
    </div>
  </div>
</template>

<script setup>
import {Skeletor} from 'vue-skeletor';

</script>