<template>
  <router-link :to="{name: 'chatDetail', params: {chatId: chatId, announcementId: announcementId}}"
               class="d-flex justify-space-between chat__block mt-6">
    <div class="chat__block__image">
      <img :src="imageUrl" alt="">
<!--      <p>Айдар</p>-->
    </div>
    <div class="chat__message__container flex-grow-1 flex-shrink-1 pl-4 pr-2">
      <div class="message__title mb-1">
        {{ title }}
      </div>
      <div class="message__shortener">
        {{ text }}
      </div>
    </div>
    <div class="chat__date d-flex align-center flex-column">
      <p class="my-0">17:32</p>
      <span v-if="newMessage !== 0" class="mt-2">{{ newMessage }}</span>
    </div>
  </router-link>
</template>

<script setup>
const {chatId, title, text, newMessage} = defineProps({
  chatId: {
    type: Number, default: 0
  },
  announcementId: {
    type: Number, default: 0
  },
  title: {type: String, default: ''},
  imageUrl: {type: String, default: ''},
  text: {type: String, default: ''},
  newMessage: {type: Number, default: 0},
})
</script>

<style scoped>

</style>