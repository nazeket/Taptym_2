<template>
  <div class="main px-4 py-4">
    <div class="d-flex text__content">
      <return-back routeName="profile"/>
      <h4 class="flex-grow-1 flex-shrink-1">Хештеги</h4>
    </div>
    <div v-if="store.state['userHashtags'].length" class="tags mt-8 d-flex flex-wrap">
      <div v-for="hashtag in store.state['userHashtags']" class="tag"># {{hashtag}}</div>
    </div>
  </div>
</template>

<script setup>
import ReturnBack from "@/components/ReturnBack.vue";
import {useStore} from "vuex";
const store = useStore()
</script>