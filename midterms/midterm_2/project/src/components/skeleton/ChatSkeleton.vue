<template>
  <div class="mt-4 chat__skeleton d-flex justify-space-between py-1 mb-4" v-for="i in 5" :key="i">
    <div class="d-flex">
      <Skeletor width="55px" height="55px" class="mr-2 avatar__skeleton"/>
      <div class="mt-1">
        <Skeletor width="110px" height="13px" class="mb-3 chat__name"/>
        <Skeletor width="230px" height="15px" class="chat__content"/>
      </div>
    </div>
    <div>
      <Skeletor width="30px" height="13px" class="chat__time mt-1"/>
    </div>
  </div>
</template>

<script setup>
import {Skeletor} from 'vue-skeletor';

</script>