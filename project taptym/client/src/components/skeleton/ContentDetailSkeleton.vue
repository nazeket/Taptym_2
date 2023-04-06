<template>
  <div class="content__detail px-4 py-4 mb-4">
    <div class="content__image">
      <Skeletor height="200px"/>
    </div>
    <div class="content__title mt-4 mb-2">
      <Skeletor width="35%"/>
    </div>
    <div class="d-flex align-center justify-space-between content__description">
      <Skeletor width="15%" class="mr-3 mb-1"/>
      <Skeletor width="15%" class="mr-3 mb-1"/>
    </div>
    <div class="content__description mt-3 mb-9">
      <Skeletor width="100%"/>
      <Skeletor width="89%"/>
      <Skeletor width="94%"/>
      <Skeletor width="93%"/>
      <Skeletor width="100%"/>
      <Skeletor width="90%"/>
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