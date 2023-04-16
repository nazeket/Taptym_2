<template>
  <div class="px-4 profile__skeleton py-4 mb-4">
    <div class="mt-3">
      <Skeletor width="45%" height="25px" class="profile__name"/>
      <div class="d-flex align-center mt-4">
        <Skeletor circle width="55px" height="55px" class="mr-4"/>
        <Skeletor width="50%" height="24px" class="profile__name"/>
      </div>
    </div>
    <div class="py-4" v-for="i in 7" :key="i">
      <Skeletor height="30px" width="100%" class="profile__row"/>
    </div>
  </div>
</template>

<script setup>
import {Skeletor} from 'vue-skeletor';

</script>