<template>
  <div class="d-flex flex-column bg-white fill-height page px-0 py-0">
    <div class="chat__header position-fixed py-5 d-flex align-center justify-space-between">
      <router-link :to="{name: 'chat'}" class="d-block pr-7 pl-6">
        <icon name="return-back"/>
      </router-link>
      <div class="flex-grow-1 flex-shrink-1 chat__block__image d-flex">
        <img class="mr-4"
             src="https://alaps-photos-kl.kcdn.kz/webp/1b/1bcd6a2a-096b-4741-a13c-97ea3d7b45eb/17-1200x752.webp" alt="">
        <div>
          <h4>Куплю Тайота Камри 25 </h4>
          <p class="mt-1">Айдар</p>
        </div>
      </div>
    </div>
    <div ref="messagesRef" class="px-4chat__body d-flex flex-shrink-1 flex-grow-1">

    </div>
    <div class="chat__input pb-4 px-4 d-flex align-end justify-space-between">
      <div class="input__detail d-flex align-center flex-grow-1 flex-shrink-1 px-4 py-3 mr-4">
        <icon name="camera" class="mr-4"/>
        <textarea ref="textArea" class="flex-grow-1 flex-shrink-1" rows="1" :value="message"
                  @input="message = $event.target.value" placeholder="Cообщение..."/>
      </div>
      <button class="send__button d-flex align-center justify-center" @click="sendMessage">
        <icon name="send-message"/>
      </button>
    </div>
  </div>
</template>

<script setup>
import Icon from "@/components/icon.vue";
import {ref, onMounted, watch} from "vue";

const message = ref(null)
const textArea = ref(null)
watch(() => message.value,
    () => {
      if (message.value !== null) {
        setTimeout(() => {
          textArea.value.style.cssText = 'height:auto';
          textArea.value.style.cssText = 'height:' + textArea.value.scrollHeight + 'px';
        })
      }
    })
const messagesRef = ref(null)
const sendMessage = () => {
  messagesRef.value.scrollTop = messagesRef.value.scrollHeight
}
</script>